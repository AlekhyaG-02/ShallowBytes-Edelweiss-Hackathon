import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import { GColumns, CallColumns, PutColumns } from './Columns';
import './Table.css';
import { GlobalFilter } from './GlobalFilter';

const CPTable = () => {
    const [data, setData] = useState([]);

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

    const optionChainsData = useMemo(() => data, [data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns: GColumns,
            data: optionChainsData,
        },
        useGlobalFilter,
        useSortBy
    );

    const { globalFilter } = state;

    const {
        getTableProps: getCallTableProps,
        getTableBodyProps: getCallTableBodyProps,
        headerGroups: callHeaderGroups,
        rows: callRows,
        prepareRow: callPrepareRow,
    } = useTable(
        {
            columns: CallColumns,
            data: optionChainsData,
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
    } = useTable(
        {
            columns: PutColumns,
            data: optionChainsData,
        },
        useGlobalFilter,
        useSortBy
    );

    return (
        <>
            <h1>Option Chains</h1>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <br></br>
            <br></br>
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
            <br></br>
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
        </>
    );
};

export default CPTable;
