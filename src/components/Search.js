import React from 'react';

const Search = ({change}) => (
    <React.Fragment>
        <div className="text-center mt-5">
            <h1 className="">Search Country</h1>
            <input className="form-control" type='text' placeholder="e.g Sweden" onChange={change} />
        </div>
    </React.Fragment>
	
);

export default Search;
