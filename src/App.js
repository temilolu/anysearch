import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';
// import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      country: []
    };
  }

  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					country: data
				});
			})
      .catch(error => console.log(error));
      
  }

  render() {
    return (
      <React.Fragment>
        <Header name="AnySearch" />
        <div className="container">
        <Search />
        <CountryList country={this.state.country} />
        </div>
    </React.Fragment>
    )
  }
}
