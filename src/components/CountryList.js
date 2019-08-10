import React, { Component } from 'react';
import CountryItem from './CountryItem';

export default class CountryList extends Component {
	renderItems() {
		return this.props.country.map(item => <CountryItem key={item.id} item={item} />);
	}
	render() {
		return (
			<React.Fragment>
				<div className="my-3 p-3 bg-white rounded shadow-sm">
					<h6 className="border-bottom border-gray pb-2 mb-0">Countries</h6>

					<ul className="list-unstyled">{this.renderItems()}</ul>
				</div>
			</React.Fragment>
		);
	}
}
