import React from 'react';

export const Filter = ({ filter, setFilter, options }) => {
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <span>
            Filter: {' '}
            <select value={filter} onChange={handleFilterChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </span>
    );
};

