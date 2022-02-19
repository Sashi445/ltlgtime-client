import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
        <div className="container-xl">
            <Link className="navbar-brand" to="/">
                <h3 className='text-white'>Picgram</h3>
            </Link>
        </div>
    </nav>);
}

export default Navbar;