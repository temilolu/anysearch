import React from 'react';

const imgStyle = {
    height: '100%',
    width: '50px'
}

const CountryItem = ({ item }) => (
	<React.Fragment>
			<li>
				<div className="media text-muted pt-3">
                    <div >
                        <img style={imgStyle} src={item.flag} alt={item.flag} />
                    </div>
                    
					<div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
						<div className="d-flex justify-content-between align-items-center w-100">
							<strong className="text-gray-dark">{item.name}</strong>
							<span>{item.capital}</span>
						</div>
						
					</div>
				</div>
			</li>
	</React.Fragment>
);
export default CountryItem;
