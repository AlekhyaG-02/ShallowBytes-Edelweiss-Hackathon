import React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import { Columns, GColumns } from './Columns'
import './Table.css'
import { GlobalFilter } from './GlobalFilter'
import { Filter } from './Filter';

const Table = () => {
    const columns = useMemo(() => GColumns, [])
    const [data, setData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000');

        ws.onmessage = (event) => {
            const packetData = JSON.parse(event.data);
            setData((prevData) => [...prevData, packetData]);

            // if (packetData.tradeOptionType === 'CE') {
            //     setData((prevData) => {
            //         const newData = [...prevData];
            //         const existingRow = newData.find(
            //             (row) => row.strikePrice === packetData.strikePrice
            //         );
            //         if (existingRow) {
            //             Object.assign(existingRow, packetData);
            //         } else {
            //             const newRow = { strikePrice: packetData.strikePrice };
            //             newData.push(Object.assign(newRow, packetData));
            //         }
            //         return newData;
            //     });
            // } else if (packetData.tradeOptionType === 'PE') {
            //     setData((prevData) => {
            //         const newData = [...prevData];
            //         const existingRow = newData.find(
            //             (row) => row.strikePrice === packetData.strikePrice
            //         );
            //         if (existingRow) {
            //             Object.assign(existingRow, packetData);
            //         } else {
            //             const newRow = { strikePrice: packetData.strikePrice };
            //             newData.push(Object.assign(newRow, packetData));
            //         }
            //         return newData;
            //     });
            // }


        };

        return () => {
            ws.close();
        };
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         window.location.reload();
    //     }, 5000); // Refresh every 5 seconds

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);


    const optionChainsData = useMemo(() => data, [data])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy
    );

    const { globalFilter } = state

    // const sortByStrike = () => {
    //     // Sort the rows based on the 'STRIKE' column
    //     const sortedRows = rows.sort((a, b) => {
    //         const strikeA = a.values['strikePrice'];
    //         const strikeB = b.values['strikePrice'];
    //         return strikeA - strikeB;
    //     });

    //     // Prepare sorted rows for rendering
    //     const preparedRows = sortedRows.map(row => {
    //         prepareRow(row);
    //         return row;
    //     });

    //     return preparedRows;
    // };

    // const sortedRows = useMemo(sortByStrike, [rows]);

    // const [selectedFilter, setSelectedFilter] = useState('');

    // const filterData = (filter) => {
    //     setSelectedFilter(filter);
    // };

    // const filteredData = useMemo(() => {
    //     if (!selectedFilter) {
    //         return data;
    //     }
    //     return data.filter(
    //         (d) => d.tradeIndex === selectedFilter
    //     );
    // }, [data, selectedFilter]);

    const options = [
        { value: '', label: 'ALL' },
        { value: 'ALLBANKS', label: 'ALLBANKS' },
        { value: 'MAINIDX', label: 'MAINIDX' },
        { value: 'FINANCIALS', label: 'FINANCIALS' },
        { value: 'MIDCAPS', label: 'MIDCAPS' },
    ];


    return (
        <>
            <h1>Option Chains</h1>
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
            <Filter name="Filter" filter={globalFilter} setFilter={setGlobalFilter} options={options} />
            {/* <Filter name="Strike Price" filter={globalFilter} setFilter={setGlobalFilter} options={strikePriceOptions} /> */}
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table
