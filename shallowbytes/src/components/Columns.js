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
                Header: 'Chng OI',
                id: 'sub_col1c',
                accessor: 'changeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Vol',
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
                Header: 'Chng%',
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
                Header: 'Bid Qty',
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

export const TestCols = [
    {
        id: 'col1',
        Header: 'Call',
        columns: [
            {
                id: 'csub_col1',
                Header: 'Trade Index',
                accessor: (d) => {
                    if (d.tradeOptionType === 'CE') {
                        return d.tradeIndex;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'OI',
                id: 'sub_col1b',
                accessor: (d) => {
                    if (d.tradeOptionType === 'CE') {
                        return d.OI;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'Chng OI',
                id: 'sub_col1c',
                accessor: (d) => {
                    if (d.tradeOptionType === 'CE') {
                        return d.changeOI;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
            },
        ],
    },
    {
        id: 'col2',
        Header: 'Put',
        columns: [
            {
                id: 'csub_col2',
                Header: 'Trade Index',
                accessor: (d) => {
                    if (d.tradeOptionType === 'PE') {
                        return d.tradeIndex;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'OI',
                id: 'sub_col2b',
                accessor: (d) => {
                    if (d.tradeOptionType === 'PE') {
                        return d.OI;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'Chng OI',
                id: 'sub_col2c',
                accessor: (d) => {
                    if (d.tradeOptionType === 'PE') {
                        return d.changeOI;
                    }
                },
                Cell: (props) => {
                    return props.value;
                }
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
                accessor: 'calltradeIndex',
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
                accessor: 'callOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng OI',
                id: 'csub_col1c',
                accessor: 'callchangeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Vol',
                id: 'csub_col1d',
                accessor: 'callvolume',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'csub_col1e',
                accessor: 'callLTP',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng%',
                id: 'csub_col1f',
                accessor: 'callchangePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'csub_col1g',
                accessor: 'callbidPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Qty',
                id: 'csub_col1h',
                accessor: 'callbidQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'csub_col1i',
                accessor: 'callaskPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Qty',
                id: 'csub_col1j',
                accessor: 'callaskQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Strike',
                id: 'csub_col1k',
                accessor: 'callstrikePrice',
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
                accessor: 'puttradeIndex',
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
                accessor: 'putOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng OI',
                id: 'psub_col1c',
                accessor: 'putchangeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Vol',
                id: 'psub_col1d',
                accessor: 'putvolume',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'psub_col1e',
                accessor: 'putLTP',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng%',
                id: 'psub_col1f',
                accessor: 'putchangePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'psub_col1g',
                accessor: 'putbidPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Qty',
                id: 'psub_col1h',
                accessor: 'putbidQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'psub_col1i',
                accessor: 'putaskPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Qty',
                id: 'psub_col1j',
                accessor: 'putaskQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Strike',
                id: 'psub_col1k',
                accessor: 'putstrikePrice',
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
        Header: 'Expiry',
        id: 'csub_col1l',
        accessor: 'calltradeDate',
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
                accessor: 'callOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng OI',
                id: 'csub_col1c',
                accessor: 'callchangeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Vol',
                id: 'csub_col1d',
                accessor: 'callvolume',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'csub_col1e',
                accessor: 'callLTP',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng%',
                id: 'csub_col1f',
                accessor: 'callchangePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'csub_col1g',
                accessor: 'callbidPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Qty',
                id: 'csub_col1h',
                accessor: 'callbidQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'csub_col1i',
                accessor: 'callaskPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Qty',
                id: 'csub_col1j',
                accessor: 'callaskQuantity',
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
            {
                Header: 'IV',
                id: 'csub_col1m',
                accessor: 'callIV',
                Cell: (props) => {
                    return props.value;
                },
            }
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
                Header: 'Expiry',
                id: 'psub_col1l',
                accessor: 'puttradeDate',
                Cell: (props) => {
                    return props.value;
                }
            },
            {
                Header: 'OI',
                id: 'psub_col1b',
                accessor: 'putOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng OI',
                id: 'psub_col1c',
                accessor: 'putchangeOI',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Vol',
                id: 'psub_col1d',
                accessor: 'putvolume',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'LTP',
                id: 'psub_col1e',
                accessor: 'putLTP',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Chng%',
                id: 'psub_col1f',
                accessor: 'putchangePrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Price',
                id: 'psub_col1g',
                accessor: 'putbidPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Bid Qty',
                id: 'psub_col1h',
                accessor: 'putbidQuantity',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Price',
                id: 'psub_col1i',
                accessor: 'putaskPrice',
                Cell: (props) => {
                    return props.value;
                },
            },
            {
                Header: 'Ask Qty',
                id: 'psub_col1j',
                accessor: 'putaskQuantity',
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
            {
                Header: 'IV',
                id: 'psub_col1m',
                accessor: 'putIV',
                Cell: (props) => {
                    return props.value;
                }
            }
        ],
    }
]