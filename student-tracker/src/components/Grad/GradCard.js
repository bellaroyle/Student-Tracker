
import { Link } from '@reach/router'

import React, { Component } from 'react';
import PopUp from "./PopUp";


class GradCard extends Component {
    state = { seen: false }
    togglePop = () => {
        this.setState((currentState) => {
            const newState = { seen: !currentState.seen }
            return newState
        });
    };


    render() {
        const { name, startingCohort, _id } = this.props
        return (
            <>
                <div className="grad-card">
                    <Link to={`/graduates/${_id}`}>
                        <button onClick={this.togglePop}>
                            <h2>{name}</h2>
                            <p>Cohort: {startingCohort}</p>
                        </button>

                    </Link>

                </div>
                <div>
                    {this.state.seen ? <PopUp toggle={this.togglePop} id={_id} /> : null}
                </div>
            </>
        );
    }
}


export default GradCard;