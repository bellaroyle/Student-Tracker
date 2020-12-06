import React, { Component } from 'react';
import axios from 'axios'
import CurrentCard from './CurrentCard'
import Total from '../Total'
import SortBy from '../Grad/SortBy'
import AddForm from './AddForm'
import FilterBy from './FilterBy'

class Currents extends Component {
    state = {
        currents: [],
        isLoading: true,
        cohorts: []
    }

    componentDidMount = () => {

        this.fetchCurrents().then(currents => {
            const newCohorts = [...this.state.cohorts]
            currents.forEach(student => {
                if (!newCohorts.includes(student.startingCohort)) {
                    newCohorts.push(student.startingCohort)
                }
            })
            this.setState({ currents, isLoading: false, cohorts: newCohorts })
        })
    }


    addToQuery = (toSortBy, blockFilter, cohortFilter) => {
        let sortArray = [null, null]
        if (toSortBy) {
            sortArray = toSortBy.split(' ')
        }

        this.fetchCurrents(blockFilter, cohortFilter, sortArray[0], sortArray[1]).then(currents => {
            this.setState({ currents, isLoading: false })
        })
    }

    addCurrent = (student) => {
        const { blockHistory, ...restOfStudent } = student
        this.setState((currState) => {
            return { currents: [restOfStudent, ...currState.currents] }
        })
    }

    deleteCurrent = (studentId) => {
        return axios.delete(`https://nc-student-tracker.herokuapp.com/api/students/${studentId}`)
            .then(() => {
                this.fetchCurrents().then(currents => {
                    const newCohorts = [...this.state.cohorts]
                    currents.forEach(student => {
                        if (!newCohorts.includes(student.startingCohort)) {
                            newCohorts.push(student.startingCohort)
                        }
                    })
                    this.setState({ currents, isLoading: false, cohorts: newCohorts })
                })
            })
    }

    fetchCurrents = (block, cohort, sort_by, order) => {
        return axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=false', {
            params: {
                block,
                cohort,
                sort_by,
                order
            }
        })
            .then(response => {
                return response.data.students
            })
    }

    render() {
        const { currents, isLoading } = this.state;
        if (isLoading) {
            return (
                <div>
                    loading ...
                </div>
            )
        }
        return (
            <div>
                <FilterBy addToQuery={this.addToQuery} cohorts={this.state.cohorts} />
                <SortBy addToQuery={this.addToQuery} />
                <AddForm addCurrent={this.addCurrent} />
                <Total students={this.state.currents} />
                <div id="student-container">
                    {currents.map(current => {
                        return <CurrentCard key={current._id} {...current} deleteCurrent={this.deleteCurrent} />
                    })}
                </div>

            </div>

        );
    }
}

export default Currents;