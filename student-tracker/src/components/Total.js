import React from 'react';

const Total = (props) => {
    return (
        <h3>
            Total Students: {props.students.length}!
        </h3>
    );
};

export default Total;