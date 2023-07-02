import { WebSocketServer } from "ws"
import net from 'node:net';

const validateData = (symbol, ts) => {

    const indices = ["FINANCIALS", "MAINIDX", "ALLBANKS", "MIDCAPS"]

    if (symbol == "FINANCIALS" || symbol == "MAINIDX" || symbol == "ALLBANKS" || symbol == "MIDCAPS") {
        let indexType = ""
        let unixTimestamp = ts
        let s = new Date(unixTimestamp).toLocaleTimeString("en-US").toString()

        indices.forEach(index => {
            if (symbol.includes(index)) {
                indexType = index
            }

        });
        console.log(indexType)
        return {
            typeOfIndex: indexType,
            date: null,
            strikePrice: null,
            typeOfOption: null,
            timestamp: s
        }

    }
    else {
        const optionType = symbol.slice(symbol.slice.length - 4)
        symbol = symbol.slice(0, symbol.slice.length - 4)
        let indexType = ""

        indices.forEach(index => {
            if (symbol.includes(index)) {
                indexType = index
                symbol = symbol.slice(symbol.indexOf(index) + index.length)
            }
        });

        let dayMonthYear = symbol.slice(0, 2) + '-' + symbol.slice(2, 5) + '-' + symbol.slice(5, 7)
        let strikePrice = symbol.slice(7)

        let unixTimestamp = ts
        let s = new Date(unixTimestamp).toLocaleTimeString("en-US").toString()

        return {
            typeOfIndex: indexType,
            date: dayMonthYear,
            strikePrice: strikePrice,
            typeOfOption: optionType,
            timestamp: s
        }
    }
}


const client = net.createConnection({ port: 9011 }, () => {
    console.log('connected to server!');
    client.write('0');
});



client.on('data', (data) => {
    const buffer = Buffer.alloc(130, data)

    // console.log(buffer.toString())
    let tradingSymbol = buffer.toString('binary', 4, 30)
    tradingSymbol = String(tradingSymbol).replaceAll('\x00', '')
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

    const indices = ["FINANCIALS", "MAINIDX", "ALLBANKS", "MIDCAPS"]


    let symbolDetails = validateData(tradingSymbol, timestamp)

    if (symbolDetails) {

        const packetData = {
            tradingSymbol: String(tradingSymbol).replaceAll('\x00', ''),
            tradeIndex: symbolDetails.typeOfIndex,
            tradeOptionType: symbolDetails.typeOfOption,
            tradeDate: symbolDetails.date,
            strikePrice: symbolDetails.strikePrice,
            timestamp: symbolDetails.timestamp,
            sequenceNumber: sequenceNumber,
            LTP: LTP,
            LTQ: LTQ,
            changePrice: Math.abs(LTP - previousClose),
            volume: volume,
            bidPrice: bidPrice,
            bidQuantity: bidQuantity,
            askPrice: askPrice,
            askQuantity: askQuantity,
            OI: OI,
            changeOI: Math.abs(OI - previousOI)
        }


        // console.log(packetData)
        // console.log(packetData)
        // console.log("Trading Symbol: ", buffer.toString('binary', 4, 30))
        // console.log("Sequence Number: ",buffer.readBigInt64LE(34))
        // console.log("Timestamp: ",buffer.readBigInt64LE(42))
        // console.log("LTP: ",buffer.readBigInt64LE(50))
        // console.log("Last Traded Quantity: ",buffer.readBigInt64LE(58))
        // console.log("Volume: ",buffer.readBigInt64LE(66))
        // console.log("Bid Price: ",buffer.readBigInt64LE(74))
        // console.log("Bid Quantity: ",buffer.readBigInt64LE(82))
        // console.log("Ask Price: ",buffer.readBigInt64LE(90))
        // console.log("Ask Quantity: ",buffer.readBigInt64LE(98))
        // console.log("OI: ",buffer.readBigInt64LE(106))
        // console.log("Previous Close Price: ",buffer.readBigInt64LE(114))
        // console.log("Previous OI: ",buffer.readBigInt64LE(122))

        // console.log("\n")

        const packetString = JSON.stringify(packetData)

        console.log(packetString)

        wss.on('connection', (ws) => {
            // console.log(packetData)
            // ws.send(tradingSymbol)
            ws.send(packetString)
        })
    }

    client.end();
});

const wss = new WebSocketServer({ port: 8000 })