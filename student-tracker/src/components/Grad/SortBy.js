import React from 'react';

const SortBy = (props) => {
    const passOptionBack = (toSortBy) => {
        props.addToQuery(toSortBy)
    }
    return (
        <div>
            <label>Sort By</label>
            <select id="sort-by" onChange={(event) => { passOptionBack(event.target.value) }}>
                {/* <option>Default</option> */}
                <option value="startingCohort asc">Starting cohort (Low to High)(Default)</option>
                <option value="startingCohort desc">Starting cohort (High to Low)</option>
                <option value="name asc">Name (A-Z)</option>
                <option value="name desc">Name (Z-A)</option>
            </select>
        </div>
    );
};

export default SortBy;