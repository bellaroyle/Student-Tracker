import React, { Component } from 'react';
import axios from 'axios';
import PopUp from "./PopUp";

class Grad extends Component {
    state = { grad: {}, isLoading: true }

    componentDidMount = () => {
        this.fetchGrad().then(grad => {
            this.setState({ grad, isLoading: false })
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        const newId = this.props.id !== prevProps.id
        if (newId)
            // this.prevProps.toggle()
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
                <div> </div>
            )
        }
        return (
            <div>
                <PopUp toggle={this.props.toggle} grad={grad} formatBlockHistory={this.formatBlockHistory} deleteGrad={this.props.deleteGrad} />

            </div>
        );
    }
}

export default Grad;