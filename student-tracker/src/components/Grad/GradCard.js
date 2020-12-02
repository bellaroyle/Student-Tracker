import React from 'react';
import { Link } from '@reach/router'

const GradCard = (props) => {
    const { name, startingCohort, _id } = props
    return (
        <div className="grad-card">
            <Link to={`/graduates/${_id}`}>
                <button>
                    <h2>{name}</h2>
                    <p>Cohort: {startingCohort}</p>
                </button>

            </Link>

        </div>
    );
};

export default GradCard;