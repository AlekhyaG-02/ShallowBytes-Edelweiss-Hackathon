import React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import { GColumns } from './Columns'
import './Table.css';
import { Filter } from './Filter';

const Table = () => {
    const columns = useMemo(() => GColumns, [])
    const [data, setData] = useState([]);
    const [backupData, setBackupData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000');

        ws.onmessage = async (event) => {
            const packetData = await JSON.parse(event.data);

            console.log(packetData);

            setData((prevData) => {
                const newData = [...prevData];

                const existingRowIndex = newData.findIndex(
                    (row) =>
                        row.strikePrice === packetData.strikePrice &&
                        row.tradeOptionType === packetData.tradeOptionType &&
                        row.tradeIndex === packetData.tradeIndex
                );

                if (existingRowIndex !== -1) {
                    newData[existingRowIndex] = { ...newData[existingRowIndex], ...packetData };
                } else {
                    newData.push(packetData);
                }

                newData.sort((a, b) => a.strikePrice - b.strikePrice);

                return newData;
            });
        };

    }, []);

    useEffect(() => {
        setBackupData(data);
    }, [data]);

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
            data: data ? data : backupData,
        },
        useGlobalFilter,
        useSortBy
    );

    const { globalFilter } = state

    const options = [
        { value: '', label: 'ALL' },
        { value: 'ALLBANKS', label: 'ALLBANKS' },
        { value: 'MAINIDX', label: 'MAINIDX' },
        { value: 'FINANCIALS', label: 'FINANCIALS' },
        { value: 'MIDCAP', label: 'MIDCAP' },
    ];


    return (
        <>
            <div className='title'>
                <h1>ChainMaster</h1>
                <small>By <span className='smallSpan'>ShallowBytes</span></small>
            </div>

            <Filter name="Filter" filter={globalFilter} setFilter={setGlobalFilter} options={options} />

            <table {...getTableProps()}>
                <thead className='tablehead'>
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
                            <tr {...row.getRowProps()} className='tablebodyrow'>
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
