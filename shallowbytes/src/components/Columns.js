export const Columns = [
    {
        id: 'col1',
        Header: 'Column',
        columns: [
            {
                Header: 'Trade Index',
                accessor: 'tradeIndex',
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'Type',
                id: 'sub_col1a',
                accessor: 'tradeOptionType',
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'OI',
                id: 'sub_col1b',
                accessor: 'OI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'CHNG IN OI',
                id: 'sub_col1c',
                accessor: 'changeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'VOLUME',
                id: 'sub_col1d',
                accessor: 'volume',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'sub_col1e',
                accessor: 'LTP',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in Price',
                id: 'sub_col1f',
                accessor: 'changePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'sub_col1g',
                accessor: 'bidPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Quantity',
                id: 'sub_col1h',
                accessor: 'bidQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'sub_col1i',
                accessor: 'askPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'ASK QTY',
                id: 'sub_col1j',
                accessor: 'askQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Strike',
                id: 'sub_col1k',
                accessor: 'strikePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
        ],
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