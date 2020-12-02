import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <div>
            <Link to='/'><button>Home</button></Link>
            {/* <Link><button>Current Students</button></Link> */}
            <Link to='/graduates'><button>Graduates</button></Link>
        </div>
    );
};

export default Nav;