import React, { Component } from 'react';
import { Link } from '@reach/router'
import axios from 'axios';
// import Grad from './Grad';

class PopUp extends Component {

    handleClick = () => {
        this.props.toggle()
    }

    handleDelete = () => {
        console.log(this.props.deleteGrad)
        this.props.deleteGrad(this.props.grad._id)
    }

    render() {
        const { grad, formatBlockHistory } = this.props
        return (
            <div className="modal">
                <div className="modal_content">
                    <Link to='/graduates'><button className="close" onClick={this.handleClick}>X</button></Link>
                    {/* <button className="close" onClick={this.handleClick}>&times;</button> */}
                    <h2>{grad.name}</h2>
                    <p>Student ID: {grad._id}</p>
                    <p>Starting cohort: {grad.startingCohort}</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Block</th>
                                <th>Times Attempted</th>
                            </tr>
                            {formatBlockHistory(grad.blockHistory).map(pair => {
                                return (
                                    <tr key={pair[0]}>
                                        <td>{pair[0]}</td>
                                        <td>{pair[1]}</td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                    <button onClick={() => { this.handleDelete() }}>Remove Student</button>
                </div>
            </div>
        );
    }
}

export default PopUp;