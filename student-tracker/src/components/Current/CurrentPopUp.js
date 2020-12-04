import React, { Component } from 'react';
import { Link } from '@reach/router'
// import axios from 'axios';

// import Grad from './Grad';

class CurrentPopUp extends Component {

    handleClick = () => {
        this.props.toggle()
    }

    handleDelete = () => {
        this.props.deleteCurrent(this.props.current._id)
    }
    handleProgress = () => {
        this.props.progressCurrent(this.props.current._id)
    }

    render() {
        const { current, formatBlockHistory } = this.props
        return (
            <div className="modal">
                <div className="modal_content">
                    <Link to='/current-students'><button className="close" onClick={this.handleClick}>X</button></Link>
                    <h2>{current.name}</h2>
                    <p>Student ID: {current._id}</p>
                    <p>Starting cohort: {current.startingCohort}</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Block</th>
                                <th>Times Attempted</th>
                            </tr>
                            {formatBlockHistory(current.blockHistory).map(pair => {
                                return (
                                    <tr key={pair[0]}>
                                        <td>{pair[0]}</td>
                                        <td>{pair[1]}</td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                    <button className="progress" onClick={this.handleProgress} >Progress to next Block</button>
                    <button className='remove' onClick={() => { this.handleDelete() }}>Remove Student</button>
                </div>
            </div>
        );
    }
}

export default CurrentPopUp;