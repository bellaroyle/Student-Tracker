import React, { Component } from 'react';

class FilterBy extends Component {
    state = { cohorts: [] }
    filterBlock = (event) => {
        this.props.addToQuery(null, event.target.value)
    }

    filterCohort = (event) => {
        this.props.addToQuery(null, null, event.target.value)
    }
    componentDidMount() {
        this.setState({ cohorts: this.props.cohorts })
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps)
    //     console.log(prevState)
    //     console.log(this.props.cohorts)
    //     //this.setState({ cohorts: this.props.cohorts })
    // }
    render() {
        return (
            <div>
                <label className="filter" htmlFor="block">Filter by Current Block</label>
                <select name="block" id="block" className="filter-box" onChange={this.filterBlock}>
                    <option value="">All (Default)</option>
                    <option value="fun">Fundamentals</option>
                    <option value="be">Back End</option>
                    <option value="fe">Front End</option>
                    <option value="project">Project Phase</option>
                </select>
                <br />
                <label className="filter" htmlFor="cohort" >Filter by Starting Cohort</label>
                <select name="cohort" id="cohort" className="filter-box" onChange={this.filterCohort}>
                    <option value="">All (Default)</option>
                    {this.state.cohorts.map(cohort => {
                        return <option key={cohort}>{cohort}</option>
                    })}
                </select>


            </div>
        );
    }
}

export default FilterBy;