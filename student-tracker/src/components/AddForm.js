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
            .then(() => {
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Student Name:</label>

                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={this.handleChange}
                    // value={this.state.name}
                    />
                    <br />

                    <label htmlFor="startingCohort">Starting Cohort:</label>

                    <input
                        type='text'
                        name='startingCohort'
                        id='startingCohort'
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Add</button>
                </form>
            </>

        );
    }
}

export default AddForm;