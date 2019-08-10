import React, { Component } from 'react';
import CountryItem from './CountryItem';
import Search from './Search';

export default class CountryList extends Component {
    state = {
        search: ''
    }

    handleChange = e => {
        this.setState({ search : e.target.value});
    }
	
	render() {

        const {search} = this.state;
        const filteredCountries = this.props.country.filter( country => {
            return country.name.toLowerCase().indexOf( search.toLowerCase()) !== -1
        })

		return (
			<React.Fragment>
                <Search change={this.handleChange}/>
				<div className="my-3 p-3 bg-white">

					<ul className="list-unstyled row">{filteredCountries.map(item => <CountryItem key={item.id} item={item} />)}</ul>
				</div>
			</React.Fragment>
		);
	}
}
