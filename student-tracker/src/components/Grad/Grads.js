import React, { Component } from 'react';
import axios from 'axios'
import GradCard from './GradCard'
import SortBy from './SortBy'
import Total from '../Total'

class Grads extends Component {
    state = { grads: [], isLoading: true, }

    componentDidMount = () => {
        this.fetchGrads().then(grads => {
            this.setState({ grads, isLoading: false })
        })
    }

    addToQuery = (toSortBy) => {
        const sortArray = toSortBy.split(' ')

        this.fetchGrads(sortArray[0], sortArray[1]).then(grads => {
            this.setState({ grads, isLoading: false })
        })
    }

    deleteGrad = (gradId) => {
        return axios.delete(`https://nc-student-tracker.herokuapp.com/api/students/${gradId}`)
            .then(() => {
                this.fetchGrads().then(grads => {
                    console.log(grads)
                    this.setState({ grads, isLoading: false })
                })
            })
    }

    fetchGrads = (sort_by, order) => {
        return axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=true', {
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
        const { grads, isLoading } = this.state;
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
                <Total students={this.state.grads} />
                <div id="grad-container">
                    {grads.map(grad => {
                        return <GradCard key={grad._id} {...grad} deleteGrad={this.deleteGrad} />
                    })}
                </div>

            </div>

        );
    }
}

export default Grads;