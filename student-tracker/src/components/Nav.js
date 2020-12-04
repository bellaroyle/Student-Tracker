import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <div className="navbar">
            <Link to='/'><button>Home</button></Link>
            <Link to='/current-students'><button>Current Students</button></Link>
            <Link to='/graduates'><button>Graduates</button></Link>

        </div>
    );
};

export default Nav;