import React from 'react'
import { useMemo, useState, useEffect, setState } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import { GColumns } from './Columns'
import './Table.css';
// import { GlobalFilter } from './GlobalFilter';
import { Filter } from './Filter';

const Table = () => {
    const columns = useMemo(() => GColumns, [])
    const [data, setData] = useState([]);
    const [backupData, setBackupData] = useState([]);

    // const [strikePriceOptions, setStrikePriceOptions] = useState([]);
    // const [selectedFilter, setSelectedFilter] = useState('');


    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000');

        ws.onmessage = async (event) => {
            const packetData = await JSON.parse(event.data);


            setData((prevData) => {
                const newData = [...prevData];

                // Find the index of the existing row based on strikePrice and tradeOptionType
                const existingRowIndex = newData.findIndex(
                    (row) =>
                        row.strikePrice === packetData.strikePrice &&
                        row.tradeOptionType === packetData.tradeOptionType &&
                        row.tradeIndex === packetData.tradeIndex
                );

                if (existingRowIndex !== -1) {
                    // If the existing row is found, update it with new data
                    newData[existingRowIndex] = { ...newData[existingRowIndex], ...packetData };
                } else {
                    // If the existing row is not found, add a new row with the new data
                    newData.push(packetData);
                }

                // const uniqueStrikePrices = [
                //     ...new Set(newData.map((row) => row.strikePrice))
                // ];

                // const sortedStrikePrices = uniqueStrikePrices.sort((a, b) => a - b);

                // const options = uniqueStrikePrices.map((strikePrice) => ({
                //     value: strikePrice,
                //     label: strikePrice
                // }));
                // const options = [
                //     { value: '', label: 'ALL' },
                //     ...sortedStrikePrices.map((strikePrice) => ({
                //         value: strikePrice,
                //         label: strikePrice
                //     }))
                // ];


                // setStrikePriceOptions(options);

                newData.sort((a, b) => a.strikePrice - b.strikePrice);

                setBackupData(newData);

                return newData;
            });
        };

    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setData((prevData) => [...prevData]);
    //     }, 5000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         window.location.reload();
    //     }, 15000); // Refresh every 5 seconds

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
            data: backupData,
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
        { value: 'MIDCAP', label: 'MIDCAP' },
    ];


    return (
        <>
            <h1>Option Chains</h1>
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
            <Filter name="Filter" filter={globalFilter} setFilter={setGlobalFilter} options={options} />
            {/* <Filter
                name="Strike Price"
                filter={globalFilter}
                setFilter={setGlobalFilter}
                options={strikePriceOptions}
            /> */}
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
