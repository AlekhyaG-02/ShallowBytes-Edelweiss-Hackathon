export const Columns = [
    {
        Header: 'Call',
        columns: [
            {
                Header: 'OI',
                accessor: 'openInterest',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG IN OI',
                accessor: 'changeInOI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'VOLUME',
                accessor: ' totalTradedVolume',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'IV',
                accessor: 'IV',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'LTP',
                accessor: 'LTP',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG',
                accessor: 'CHNG',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID',
                accessor: 'bestBid',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID QTY',
                accessor: 'bestBidQty',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK',
                accessor: 'bestAsk',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK QTY',
                accessor: 'bestAskQty',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'STRIKE',
                accessor: 'strike',
                Cell: props => {
                    return props.value
                }
            }
        ]
    }
]

export const GColumns = [
    {
        Header: 'Call',
        columns: [
            {
                Header: 'OI',
                accessor: 'putOI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG IN OI',
                accessor: 'putCHNG IN OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'VOLUME',
                accessor: 'putVOLUME',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'IV',
                accessor: 'putIV',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'LTP',
                accessor: 'putLTP',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG',
                accessor: 'putCHNG',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID QTY',
                accessor: 'putBID QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK',
                accessor: 'putASK',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK QTY',
                accessor: 'putASK QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'STRIKE',
                accessor: 'putSTRIKE',
                Cell: props => {
                    return props.value
                }
            }
        ]
    },
    {
        Header: 'Put',
        columns: [
            {
                Header: 'OI',
                accessor: 'OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG IN OI',
                accessor: 'CHNG IN OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'VOLUME',
                accessor: 'VOLUME',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'IV',
                accessor: 'IV',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'LTP',
                accessor: 'LTP',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG',
                accessor: 'CHNG',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID QTY',
                accessor: 'BID QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK',
                accessor: 'ASK',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK QTY',
                accessor: 'ASK QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'STRIKE',
                accessor: 'STRIKE',
                Cell: props => {
                    return props.value
                }
            }
        ]
    }
]