import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
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
        <BrowserRouter>
        <Header name="AnySearch" />
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => <CountryList country={this.state.country} />}/>
          <Route path='/details/:id' component={CountryDetails}/>
        </Switch>
        </div>
        </BrowserRouter>
        
    </React.Fragment>
    )
  }
}
