import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIXER_API_KEY;

export default class CurrencyCoverter extends Component {

    constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "SEK",
      toCurrency: props.code,
      amount: 1,
      currencies: []
    };
  }

  selectHandler = e => {
    if (e.target.name === "from") {
      this.setState({ fromCurrency: e.target.value });
    } else {
      if (e.target.name === "to") {
        this.setState({ toCurrency: e.target.value });
      }
    }
  };

  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `http://data.fixer.io/api/latest?access_key=${API_KEY}&rates=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };

  componentDidMount() {
    axios
      .get(`http://data.fixer.io/api/latest?access_key=${API_KEY}`)
      .then(response => {
        const currencyAr = ["SEK"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }

    render() {
        

        return (
            <React.Fragment>

            <div>
               
                <div className="">
                  
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">{this.state.fromCurrency}</div>
        </div>
         <input
            name="amount"
            type="text"
            className="form-control"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
      </div>

     <p className="font-weight-bold pt-3 pb-2">to {this.state.toCurrency}  </p>
    <div className="mb-3">{this.state.result && <h3><span>{this.props.symbol} </span>{this.state.result}</h3>}</div>
    
          <button className="btn btn-info mb-2" onClick={this.convertHandler}>Convert</button>
          
        </div>
            </div>
        </React.Fragment>
        )
    }
}
