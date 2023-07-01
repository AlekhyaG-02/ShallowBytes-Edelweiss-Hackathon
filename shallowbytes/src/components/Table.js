import React from 'react'
import { useMemo, useState } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import { Columns, GColumns } from './Columns'
import './Table.css'
import { GlobalFilter } from './GlobalFilter'
import Filter from './Filter';
import MOCK_DATA from './MOCK_DATA.json'

const Table = () => {
    const columns = useMemo(() => Columns, [])
    const optionChainsData = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data: optionChainsData
    }, useGlobalFilter)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state

    const [selectedFilter, setSelectedFilter] = useState('');

    const filterData = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredData = useMemo(() => {
        if (!selectedFilter) {
            return optionChainsData;
        }
        return optionChainsData.filter(
            (data) => data.symbol === selectedFilter
        );
    }, [optionChainsData, selectedFilter]);
    const value1 = [
        {
            value: 'NIFTY',
        },
        {
            value: 'FINNIFTY',
        },
        {
            value: 'BANKNIFTY',
        },
        {
            value: 'MIDCPNIFTY',
        }
    ]

    return (
        <>
            <h1>Option Chains</h1>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <Filter filterOption={value1} filterData={filterData} filterLabel="Options" />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
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
