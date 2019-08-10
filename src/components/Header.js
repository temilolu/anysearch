import React from 'react';

const Header = ({name}) => (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-info">
            <h1 className="navbar-brand">{name}</h1>
        </nav>
    </React.Fragment>
	
);

export default Header;
