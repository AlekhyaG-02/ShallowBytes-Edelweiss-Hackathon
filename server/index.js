import net from 'node:net'
import { WebSocketServer } from "ws"
import jStat from 'jstat'
import { blackScholes } from "black-scholes";

const wss = new WebSocketServer({ port: 8000 })

const validateData = (symbol, ts) => {

    if (symbol.length < 15) {
        return null
    }
    else {
        const optionType = symbol.slice(symbol.slice.length - 4)
        const indices = ["ALLBANKS", "MAINIDX", "MIDCAP", "FINANCIALS",]

        symbol = symbol.slice(0, symbol.slice.length - 4)
        let indexType = ""

        indices.forEach(index => {
            if (symbol.includes(index)) {
                indexType = index
                symbol = symbol.slice(symbol.indexOf(index) + index.length)
            }
        });

        let dayMonthYear = symbol.slice(0, 2) + '-' + symbol.slice(2, 5) + '-' + symbol.slice(5, 7)
        let ttm = calculateTTM(symbol.slice(0, 7))
        let strikePrice = symbol.slice(7)

        let s = new Date(ts).toLocaleTimeString("en-US").toString()

        return {
            typeOfIndex: indexType,
            ttm: Number(ttm),
            date: dayMonthYear,
            strikePrice: strikePrice,
            typeOfOption: optionType,
            timestamp: s
        }

    }

}

const calculateTTM = (expirationDate) => {

    var currentTimestamp = new Date();

    var expiryDay = expirationDate.slice(0, 2);
    var expiryMonth = expirationDate.slice(2, 5);
    var expiryYear = expirationDate.slice(5, 7);
    var expiryDate = new Date(expiryMonth + " " + expiryDay + " " + expiryYear);

    expiryDate.setHours(15);
    expiryDate.setMinutes(30);
    expiryDate.setSeconds(0);

    var timeDiff = expiryDate.getTime() - currentTimestamp.getTime();

    var minutesToExpiry = Math.floor(timeDiff / (1000 * 60));
    var yearsToExpiry = minutesToExpiry / (60 * 24 * 365);

    return yearsToExpiry;
}

const getImpliedVolatility = (expectedCost, s, k, t, r, callPut, estimate) => {
    estimate = estimate || .1;
    var low = 0;
    var high = Infinity;

    for (var i = 0; i < 100; i++) {
        var actualCost = blackScholes(s, k, t, estimate, r, callPut);
        // compare the price down to the cent
        if (expectedCost * 100 == Math.floor(actualCost * 100)) {
            break;
        }
        else if (actualCost > expectedCost) {
            high = estimate;
            estimate = (estimate - low) / 2 + low
        }
        else {
            low = estimate;
            estimate = (high - estimate) / 2 + estimate;
            if (!isFinite(estimate)) estimate = low * 2;
        }
    }
    return estimate;
}

let arrayIV = [0, 0, 0, 0]


const client = net.connect({ port: 9011 }, () => {
    console.log("connected!")
    client.write('0')
})

client.on('data', (data) => {

    const buffer = Buffer.alloc(130, data)
    let tradingSymbol = buffer.toString('binary', 4, 30).replace(/\0/g, '')
    // console.log(tradingSymbol)
    let tradingCleaned = tradingSymbol.replace(/\0/g, '')

    let sequenceNumber = Number(buffer.readBigInt64LE(34))
    let timestamp = Number(buffer.readBigInt64LE(42))
    let LTP = Number(buffer.readBigInt64LE(50))
    let LTQ = Number(buffer.readBigInt64LE(58))
    let volume = Number(buffer.readBigInt64LE(66))
    let bidPrice = Number(buffer.readBigInt64LE(74))
    let bidQuantity = Number(buffer.readBigInt64LE(82))
    let askPrice = Number(buffer.readBigInt64LE(90))
    let askQuantity = Number(buffer.readBigInt64LE(98))
    let OI = Number(buffer.readBigInt64LE(106))
    let previousClose = Number(buffer.readBigInt64LE(114))
    let previousOI = Number(buffer.readBigInt64LE(122))

    if (tradingCleaned == "ALLBANKS") {
        arrayIV[0] = LTP
        // console.log(1)
    }
    if (tradingCleaned == "MIDCAPS") {
        arrayIV[2] = LTP
        // console.log(2)
    }
    if (tradingCleaned == "FINANCIALS") {
        arrayIV[3] = LTP
        // console.log(3)
    }
    if (tradingCleaned == "MAINIDX") {
        arrayIV[1] = LTP
        // console.log(4)
    }


    let symbolDetails = validateData(tradingSymbol, timestamp)

    if (symbolDetails) {

        const indices = ["ALLBANKS", "MAINIDX", "MIDCAPS", "FINANCIALS"]
        let IV = 0
        let indexIV = 0

        for (let i = 0; i < indices.length; i++) {
            if (indices[i].includes(symbolDetails.typeOfIndex)) {
                indexIV = Number(arrayIV[i])
                break
            }
        }

        if (indexIV && symbolDetails.ttm >= 0) {

            let optionLTP = Number(LTP)
            let strikePriceIV = Number(symbolDetails.strikePrice)
            let ttmIV = Number(symbolDetails.ttm).toFixed(5)

            // console.log(optionLTP, indexIV, strikePriceIV, ttmIV)
            if (symbolDetails.typeOfOption == "CE") {
                IV = getImpliedVolatility(optionLTP, indexIV, strikePriceIV, ttmIV, 0, "put")
            }
            else {
                IV = getImpliedVolatility(optionLTP, indexIV, strikePriceIV, ttmIV, 0, "call")
            }
        }
        else {
            IV = 0
        }

        IV = IV.toFixed(2)
        let packetData = {}

        if (symbolDetails.typeOfOption === "CE") {

            packetData = {

                calltradingSymbol: String(tradingSymbol).replace(/\0/g, ''),
                calltradeIndex: symbolDetails.typeOfIndex,
                tradeIndex: symbolDetails.typeOfIndex,
                calltradeOptionType: symbolDetails.typeOfOption,
                calltradeDate: symbolDetails.date,
                callstrikePrice: Number(symbolDetails.strikePrice),
                strikePrice: Number(symbolDetails.strikePrice),
                calltimestamp: symbolDetails.timestamp,
                callsequenceNumber: sequenceNumber,
                callLTP: LTP,
                callLTQ: LTQ,
                callchangePrice: Number((((LTP - previousClose) * 100) / previousClose).toFixed(2)),
                callvolume: volume,
                callbidPrice: bidPrice,
                callbidQuantity: bidQuantity,
                callaskPrice: askPrice,
                callaskQuantity: askQuantity,
                callOI: OI,
                callchangeOI: OI - previousOI,
                callIV: Number(IV).toFixed(2)
            }
        }
        else {

            packetData = {

                puttradingSymbol: String(tradingSymbol).replace(/\0/g, ''),
                puttradeIndex: symbolDetails.typeOfIndex,
                tradeIndex: symbolDetails.typeOfIndex,
                puttradeOptionType: symbolDetails.typeOfOption,
                puttradeDate: symbolDetails.date,
                putstrikePrice: Number(symbolDetails.strikePrice),
                strikePrice: Number(symbolDetails.strikePrice),
                puttimestamp: symbolDetails.timestamp,
                putsequenceNumber: sequenceNumber,
                putLTP: LTP,
                putLTQ: LTQ,
                putchangePrice: Number((((LTP - previousClose) * 100) / previousClose).toFixed(2)),
                putvolume: volume,
                putbidPrice: bidPrice,
                putbidQuantity: bidQuantity,
                putaskPrice: askPrice,
                putaskQuantity: askQuantity,
                putOI: OI,
                putchangeOI: OI - previousOI,
                putIV: Number(IV).toFixed(2)
            }
        }



        let packetString = JSON.stringify(packetData)

        wss.on('connection', (ws) => {
            console.log(packetString)
            ws.send(packetString)
        })
    }

    client.end()


});

