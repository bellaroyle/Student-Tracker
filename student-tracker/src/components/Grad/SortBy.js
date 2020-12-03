import React from 'react';

const SortBy = (props) => {
    const passOptionBack = (toSortBy) => {
        console.log(props)
        props.addToQuery(toSortBy)
    }
    return (
        <div>
            <label>Sort By</label>
            <select id="sort-by" onChange={() => { passOptionBack('name') }}>
                <option>Default</option>
                <option>Name (A-Z)</option>
                <option>Name (Z-A)</option>
                <option>Starting cohort (Low to High)()</option>
                <option>Starting cohort (High to Low)</option>
            </select>
        </div>
    );
};

export default SortBy;