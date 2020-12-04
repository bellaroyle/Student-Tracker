import React, { Component } from 'react';
import axios from 'axios';
import CurrentPopUp from "./CurrentPopUp";

class Current extends Component {
    state = { current: {}, isLoading: true }

    componentDidMount = () => {
        this.fetchCurrent().then(current => {
            this.setState({ current, isLoading: false })
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        const newId = this.props.id !== prevProps.id
        if (newId)
            // this.prevProps.toggle()
            this.fetchCurrent().then(current => {
                this.setState({ current, isLoading: false })
            })
    }

    progressCurrent = (studentId) => {
        return axios.patch(`https://nc-student-tracker.herokuapp.com/api/students/${studentId}?progress=true`)
            .then((res) => {
                this.setState({ current: res.data.student })
            })

        console.log(studentId)
    }

    fetchCurrent = () => {
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
        const { current, isLoading } = this.state;
        if (isLoading) {
            return (
                <div> </div>
            )
        }
        return (
            <div>
                <CurrentPopUp toggle={this.props.toggle} current={current} formatBlockHistory={this.formatBlockHistory} deleteCurrent={this.props.deleteCurrent} progressCurrent={this.progressCurrent} />

            </div>
        );
    }
}

export default Current;