import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import { CallColumns, PutColumns } from './Columns';
import './CPTable.css';
import { GlobalFilter } from './GlobalFilter';
import { Filter } from './Filter';

const CPTable = () => {
    const [data, setData] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000');

        ws.onmessage = (event) => {
            const packetData = JSON.parse(event.data);
            setData((prevData) => [...prevData, packetData]);
        };

        return () => {
            ws.close();
        };
    }, []);

    const filteredData = useMemo(() => {
        return data.filter((item) => item.tradeOptionType === 'CE' || item.tradeOptionType === 'PE');
    }, [data]);

    const optionChainsData = useMemo(() => data, [data]);

    const {
        getTableProps: getCallTableProps,
        getTableBodyProps: getCallTableBodyProps,
        headerGroups: callHeaderGroups,
        rows: callRows,
        prepareRow: callPrepareRow,
        state: callState,
    } = useTable(
        {
            columns: CallColumns,
            data: filteredData,
        },
        useGlobalFilter,
        useSortBy
    );

    const {
        getTableProps: getPutTableProps,
        getTableBodyProps: getPutTableBodyProps,
        headerGroups: putHeaderGroups,
        rows: putRows,
        prepareRow: putPrepareRow,
        state: putState,
    } = useTable(
        {
            columns: PutColumns,
            data: filteredData,
        },
        useGlobalFilter,
        useSortBy
    );

    const updateGlobalFilter = (value) => {
        setGlobalFilter(value);
        callState.globalFilter = value;
        putState.globalFilter = value;
    };

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
            {/* <GlobalFilter filter={globalFilter} setFilter={updateGlobalFilter} /> */}
            <Filter filter={globalFilter} setFilter={updateGlobalFilter} options={options} />

            {/* <br></br>
            <br></br> */}
            <div className='table-container'>
                <table {...getCallTableProps()}>
                    <thead>
                        {callHeaderGroups.map((headerGroup) => (
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
                    <tbody {...getCallTableBodyProps()}>
                        {callRows.map((row) => {
                            callPrepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* <br></br> */}
                <table {...getPutTableProps()}>
                    <thead>
                        {putHeaderGroups.map((headerGroup) => (
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
                    <tbody {...getPutTableBodyProps()}>
                        {putRows.map((row) => {
                            putPrepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CPTable;
