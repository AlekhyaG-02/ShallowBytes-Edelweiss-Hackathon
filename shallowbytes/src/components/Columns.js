export const Columns = [
    {
        id: 'col1',
        Header: 'Column',
        columns: [
            {
                id: 'csub_col1',
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
                Header: 'Change in OI',
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

export const CallColumns = [
    {
        id: 'ccol1',
        Header: 'Call',
        columns: [
            {
                id: 'csub_col1',
                Header: 'Trade Index',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.tradeIndex : '',
                Cell: (props) => {
                    return props.value;
                }
            },
            // {
            //     Header: 'Type',
            //     id: 'csub_col1a',
            //     accessor: 'tradeOptionType',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            {
                Header: 'OI',
                id: 'csub_col1b',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.OI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in OI',
                id: 'csub_col1c',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.changeOI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'VOLUME',
                id: 'csub_col1d',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.volume : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'csub_col1e',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.LTP : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in Price',
                id: 'csub_col1f',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.changePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'csub_col1g',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.bidPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Quantity',
                id: 'csub_col1h',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.bidQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'csub_col1i',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.askPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Quantity',
                id: 'csub_col1j',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.askQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Strike',
                id: 'csub_col1k',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.strikePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
        ],
    },
]

export const PutColumns = [
    {
        id: 'pcol1',
        Header: 'Put',
        columns: [
            {
                id: 'psub_col1',
                Header: 'Trade Index',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.tradeIndex : '',
                Cell: (props) => {
                    return props.value;
                }
            },
            // {
            //     Header: 'Type',
            //     id: 'psub_col1a',
            //     accessor: 'tradeOptionType',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            {
                Header: 'OI',
                id: 'psub_col1b',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.OI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in OI',
                id: 'psub_col1c',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.changeOI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'VOLUME',
                id: 'psub_col1d',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.volume : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'psub_col1e',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.LTP : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in Price',
                id: 'psub_col1f',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.changePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'psub_col1g',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.bidPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Quantity',
                id: 'psub_col1h',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.bidQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'psub_col1i',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.askPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Quantity',
                id: 'psub_col1j',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.askQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Strike',
                id: 'psub_col1k',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.strikePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
        ],
    },
]

export const GColumns = [
    {
        id: 'tIcol1',
        Header: 'Trade Index',
        accessor: 'tradeIndex',
        Cell: (props) => {
            return props.value;
        }
    },
    {
        id: 'ccol1',
        Header: 'Call',
        columns: [
            // {
            //     id: 'csub_col1',
            //     Header: 'Trade Index',
            //     accessor: 'tradeIndex',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            // {
            //     Header: 'Type',
            //     id: 'csub_col1a',
            //     accessor: 'tradeOptionType',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            {
                Header: 'OI',
                id: 'csub_col1b',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.OI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in OI',
                id: 'csub_col1c',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.changeOI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'VOLUME',
                id: 'csub_col1d',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.volume : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'csub_col1e',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.LTP : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in Price',
                id: 'csub_col1f',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.changePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'csub_col1g',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.bidPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Quantity',
                id: 'csub_col1h',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.bidQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'csub_col1i',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.askPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Quantity',
                id: 'csub_col1j',
                accessor: (d) => d.tradeOptionType === 'CE' ? d.askQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            // {
            //     Header: 'Strike',
            //     id: 'csub_col1k',
            //     accessor: 'strikePrice',
            //     Cell: (props) => {
            //         return props.value;
            //     },
            // },
        ],
    },
    {
        id: 'tcol1',
        Header: 'Strike',
        accessor: 'strikePrice',
        Cell: (props) => {
            return props.value;
        }
    },
    {
        id: 'pcol1',
        Header: 'Put',
        columns: [
            // {
            //     Header: 'Trade Index',
            //     accessor: 'tradeIndex',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            // {
            //     Header: 'Type',
            //     id: 'psub_col1a',
            //     accessor: 'tradeOptionType',
            //     Cell: (props) => {
            //         return props.value;
            //     }
            // },
            {
                Header: 'OI',
                id: 'psub_col1b',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.OI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in OI',
                id: 'psub_col1c',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.changeOI : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'VOLUME',
                id: 'psub_col1d',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.volume : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'psub_col1e',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.LTP : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Change in Price',
                id: 'psub_col1f',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.changePrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'psub_col1g',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.bidPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Quantity',
                id: 'psub_col1h',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.bidQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'psub_col1i',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.askPrice : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Quantity',
                id: 'psub_col1j',
                accessor: (d) => d.tradeOptionType === 'PE' ? d.askQuantity : '',
                Cell: (props) => {
                    return props.value;
                },
            },
            // {
            //     Header: 'Strike',
            //     id: 'psub_col1k',
            //     accessor: 'strikePrice',
            //     Cell: (props) => {
            //         return props.value;
            //     },
            // },
        ],
    }
]