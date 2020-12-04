import React, { Component } from 'react';
import axios from 'axios'
import CurrentCard from './CurrentCard'
import Total from '../Total'
import SortBy from '../Grad/SortBy'
import AddForm from './AddForm'

class Currents extends Component {
    state = {
        currents: [],
        isLoading: true
    }

    componentDidMount = () => {

        this.fetchCurrents().then(currents => {
            // console.log(currents)
            this.setState({ currents, isLoading: false })
        })
    }

    addToQuery = (toSortBy) => {
        const sortArray = toSortBy.split(' ')

        this.fetchCurrents(sortArray[0], sortArray[1]).then(currents => {
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
                    this.setState({ currents, isLoading: false })
                })
            })
    }
    fetchCurrents = (sort_by, order) => {
        return axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=false', {
            params: {
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