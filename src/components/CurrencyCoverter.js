import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIXER_API_KEY;

export default class CurrencyCoverter extends Component {

    constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "EUR",
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
          `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${
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
        const currencyAr = ["EUR"];
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
               
                <div className="From">
          <input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
         
           <p>{this.state.fromCurrency}</p>
         
           <p>{this.state.toCurrency}</p>
          <button onClick={this.convertHandler}>Convert</button>
          {this.state.result && <h3><span>{this.props.symbol} </span>{this.state.result}</h3>}
        </div>
            </div>
        </React.Fragment>
        )
    }
}
