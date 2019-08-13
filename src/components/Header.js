import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({name}) => (
    <React.Fragment>
        <nav className=" navbar navbar-dark bg-dark">
            <div className="container">
            <Link to="/">
                 <h1 className="navbar-brand font-weight-bold font-italic">{name}</h1>
            </Link>
            </div>
        </nav>
    </React.Fragment>
	
);

export default Header;
