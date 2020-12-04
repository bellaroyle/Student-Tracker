import React, { Component } from 'react';

class FilterBy extends Component {
    passOptionBack = (event) => {
        // console.log(event.target.value)
        this.props.addToQuery(null, event.target.value)
    }
    render() {
        return (
            <div>
                <label htmlFor="block">Filter by Current Block</label>
                <select name="block" id="block" className="filter-box" onChange={this.passOptionBack}>
                    <option value="">All (Default)</option>
                    <option value="fun">Fundamentals</option>
                    <option value="be">Back End</option>
                    <option value="fe">Front End</option>
                    <option value="project">Project Phase</option>
                </select>

                {/* <label htmlFor="cohort">Filter by Starting Cohort</label>
                <select name="cohort" id="cohort" className="filter-box">
                    <option
                </select> */}


            </div>
        );
    }
}

export default FilterBy;