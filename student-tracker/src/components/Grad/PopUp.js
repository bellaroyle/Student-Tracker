import React, { Component } from 'react';
import Grad from './Grad';

class PopUp extends Component {

    handleClick = () => {
        this.props.toggle()
    }

    render() {
        return (
            <div className="modal">
                <div className="modal_content">
                    <button className="close" onClick={this.handleClick}>&times;</button>
                    <Grad id={this.props.id} />
                </div>
            </div>
        );
    }
}

export default PopUp;