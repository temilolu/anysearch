import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
    width: '15rem',
    textAlign: 'center'
}

const imgStyle = {
    width: '5rem'

}

const CountryItem = ({item}) => (

	<React.Fragment>
            
			<li className="mr-3 ml-3 mt-5">
                  <Link to={`details/${item.numericCode}`}>
                <div className="card" style={divStyle}>
                <img src={item.flag} className="pt-4 mx-auto card-img-top" alt={item.flag} style={imgStyle} />
                <div className="card-body">
                    <h5  className="card-title">{item.name}</h5>
                    <p className="card-text">{item.capital}</p>
                </div>
                </div>
                 </Link>
			</li>  
	</React.Fragment>
);
export default CountryItem;
