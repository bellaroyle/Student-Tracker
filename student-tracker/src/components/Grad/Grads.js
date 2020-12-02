import React, { Component } from 'react';
import axios from 'axios'
import GradCard from './GradCard'
import SortBy from './SortBy'

class Grads extends Component {
    state = { grads: [], isLoading: true }

    componentDidMount = () => {
        this.fetchGrads().then(grads => {
            this.setState({ grads, isLoading: false })
        })
    }
    addToQuery = (toSortBy) => {
        console.log(toSortBy)
    }

    fetchGrads = () => {
        return axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=true')
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
                <div id="grad-container">
                    {grads.map(grad => {
                        return <GradCard key={grad._id} {...grad} />
                    })}
                </div>
            </div>

        );
    }
}

export default Grads;