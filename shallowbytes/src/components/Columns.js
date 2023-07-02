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
                accessor: 'Call.OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG IN OI',
                accessor: 'Call.CHNG IN OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'VOLUME',
                accessor: 'Call.VOLUME',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'IV',
                accessor: 'Call.IV',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'LTP',
                accessor: 'Call.LTP',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG',
                accessor: 'Call.CHNG',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID QTY',
                accessor: 'Call.BID QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK',
                accessor: 'Call.ASK',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK QTY',
                accessor: 'Call.ASK QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'STRIKE',
                accessor: 'Call.STRIKE',
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
                accessor: 'Put.OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG IN OI',
                accessor: 'Put.CHNG IN OI',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'VOLUME',
                accessor: 'Put.VOLUME',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'IV',
                accessor: 'Put.IV',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'LTP',
                accessor: 'Put.LTP',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'CHNG',
                accessor: 'Put.CHNG',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'BID QTY',
                accessor: 'Put.BID QTY',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK',
                accessor: 'Put.ASK',
                Cell: props => {
                    return props.value
                }
            },
            {
                Header: 'ASK QTY',
                accessor: 'Put.ASK QTY',
                Cell: props => {
                    return props.value
                }
            }
        ]
    }
]