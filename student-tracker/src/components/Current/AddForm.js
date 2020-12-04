import axios from 'axios';
import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: '',
        startingCohort: '',
        submitted: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, startingCohort } = this.state

        return axios
            .post('https://nc-student-tracker.herokuapp.com/api/students', { name, startingCohort })
            .then((response) => {
                this.props.addCurrent(response.data.student)

                this.setState({
                    name: '',
                    startingCohort: '',
                    submitted: true
                })
            })

    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <>
                <h2>Add a Student</h2>
                <form onSubmit={this.handleSubmit} id="add-form">
                    <label htmlFor="name">Student Name:</label>


                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={this.handleChange}
                        value={this.state.name}
                        required
                    />


                    <label htmlFor="startingCohort">Starting Cohort:</label>

                    <input
                        type='number'
                        name='startingCohort'
                        id='startingCohort'
                        onChange={this.handleChange}
                        value={this.state.startingCohort}
                        min="0"
                        required
                    />

                    <button id="add-button">Add</button>
                </form>
            </>

        );
    }
}

export default AddForm;