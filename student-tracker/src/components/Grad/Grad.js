import React, { Component } from 'react';
import axios from 'axios';

class Grad extends Component {
    state = { grad: {}, isLoading: true }

    componentDidMount = () => {
        this.fetchGrad().then(grad => {
            this.setState({ grad, isLoading: false })
        })
    }

    fetchGrad = () => {
        const { id } = this.props
        return axios.get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
            .then(response => {
                return response.data.student
            })
    }

    formatBlockHistory = (blockHistory) => {
        const blocks = {
            'Fundamentals': 0,
            'Back End': 0,
            'Front End': 0,
            'Project Phase': 0,
            'Graduated': 0
        }
        blockHistory.forEach(block => {
            blocks[block.name] += 1
        })
        return Object.entries(blocks)
    }

    render() {
        const { grad, isLoading } = this.state;
        if (isLoading) {
            return (
                <div>
                    loading ...
                </div>
            )
        }
        return (
            <div>
                <h2>{grad.name}</h2>
                <p>Student ID: {grad._id}</p>
                <p>Starting cohort: {grad.startingCohort}</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Block</th>
                            <th>Times Attempted</th>
                        </tr>
                        {this.formatBlockHistory(grad.blockHistory).map(pair => {
                            return (
                                <tr key={pair[0]}>
                                    <td>{pair[0]}</td>
                                    <td>{pair[1]}</td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
            </div>
        );
    }
}

export default Grad;