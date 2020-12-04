import React, { Component } from 'react';
import { Link } from '@reach/router'
import Current from './Current'

class CurrentCard extends Component {
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
                <div className="current-card">
                    <Link to={(this.state.seen ? '/current-students' : `/current-students/${_id}`)}>
                        <button onClick={this.togglePop}>
                            <h2>{name}</h2>
                            <p>Cohort: {startingCohort}</p>
                        </button>

                    </Link>

                </div>
                <div>
                    {this.state.seen ? <Current toggle={this.togglePop} id={_id} deleteCurrent={this.props.deleteCurrent} /> : <Link to='/current-students'></Link>}
                </div>
            </>
        );
    }
}

export default CurrentCard;