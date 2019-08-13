import React from 'react';

const searchStyle = {
    borderRadius: '10rem',
    background: '#fff',
    height: '3.5rem',
    width: '100%'
}

const Search = ({change}) => (
    <React.Fragment>
        <div className="text-center search-bar mt-5 p-3 p-lg-1 pl-lg-4 ">
            <h1 className="display-4 font-weight-bolder">Search Country</h1>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                     <input className="form-control mt-3 pl-4" style={searchStyle} type='text' placeholder="e.g Sweden" onChange={change} />
                </div>
                 <div className="col-md-2"></div>
            </div>
           
        </div>
    </React.Fragment>
	
);

export default Search;
