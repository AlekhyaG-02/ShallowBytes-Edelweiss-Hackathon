import React from 'react';

const Filter = ({ filterOption, filterData, filterLabel }) => {
    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        filterData(selectedFilter);
    };


    return (
        <div>
            <label htmlFor="filter">{filterLabel} </label>
            <select id="filter" onChange={handleFilterChange}>
                {filterOption.map((option) => (
                    <option value={option.value}>{option.value}</option>
                ))}
                {/* <option value="">All</option>
                <option value="NIFTY">NIFTY</option>
                <option value="FINNIFTY">FINNIFTY</option>
                <option value="BANKNIFTY">BANKNIFTY</option>
                <option value="MIDCPNIFTY">MIDCPNIFTY</option> */}
            </select>
        </div>
    );
};

export default Filter;
