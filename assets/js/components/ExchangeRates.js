import React, {Component} from 'react';
import axios from 'axios';
import { generatePath } from "react-router";


// /exchange-rates/2023-01-01

class ExchangeRate extends Component {

    render() {
        const { rate } = this.props;
        return (
        <tr>
          <td>{rate.currency.name}</td>
          <td>{rate.currency.code}</td>
          <td className="container-fluid">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rate.buy.dataA.date}</td>
                        <td>{rate.buy.dataA.price}</td>
                    </tr>
                    <tr>
                        <td>{rate.buy.dataB.date}</td>
                        <td>{rate.buy.dataB.price}</td>
                    </tr>
                </tbody>
            </table>
          </td>
          <td className="container-fluid">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rate.sell.dataA.date}</td>
                        <td>{rate.sell.dataA.price}</td>
                    </tr>
                    <tr>
                        <td>{rate.sell.dataB.date}</td>
                        <td>{rate.sell.dataB.price}</td>
                    </tr>
                </tbody>
            </table>
          </td>
          <td className="container-fluid">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>{rate.NBP.dataA.date}</td>
                        <td>{rate.NBP.dataA.price}</td>
                    </tr>
                    <tr>
                        <td>{rate.NBP.dataB.date}</td>
                        <td>{rate.NBP.dataB.price}</td>
                    </tr>
                </tbody>
            </table>
          </td>
        </tr>
          
        );
      }
}

class ExchangeRates extends Component {
    constructor(props) {
        super(props);
        this.state = { setupCheck: {}, loading: true, date: null, exchangeRates : []};
        console.log({'from': 'ExchangeRates.constructor', state: this.state})
    }

    getBaseUrl() {
        return 'http://telemedi-zadanie.localhost';
    }

    handleLinkChange = () => {
        console.log({'from': 'ExchangeRates.handleLinkChange', state: this.state})
        this.getDataFromApi(this.state.date) 
    };


    getDataFromApi(when) {
    
        const baseUrl = 'http://telemedi-zadanie.localhost';
        axios.get(baseUrl + `/api/exchange-rates/` + when).then(response => {

            console.log({data:response.data});

            this.setState({ exchangeRates : response.data}, () => {
                console.log({'from': 'ExchangeRates.getDataFromApi', state: this.state})
            });

        }).catch(function (error) {
            console.error(error);
            alert('wystapil blad');
        });
    }



    componentDidMount() {

        let date = null;
        if (this.props.match.params.when) {
            date = this.props.match.params.when;
        } 
        else {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1; // dodamy 1, ponieważ miesiące w JavaScript są indeksowane od 0
            const day = now.getDate();
            const formattedDate = `${year}-${month}-${day}`;
            date = formattedDate
        }  

        this.setState({ date: date }, () => {
            this.getDataFromApi(date)                
            console.log({'when' : this.state.date});
        });
        
        this.unlisten = this.props.history.listen(this.handleLinkChange);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleChange = (event) => {
        const newDate = event.target.value;
        this.setState({ date: newDate }, () => {
            console.log(this.state.date); 
            let where = generatePath("/exchange-rates/:when", {
                when: this.state.date,
              });
            console.log(where)  
            this.props.history.push(where);
            console.log('navigate done'); 
          });
    };

    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row mt-5">

                            <div className="col-md-8 offset-md-2">
                                <h2 className="text-center">Exchange rates</h2>

                                <div className="col-md-8 offset-md-2">
                                    <div className="form-group">
                                        <label htmlFor="datePicker">Date:</label>
                                        <input type="date" className="form-control" id="datePicker" placeholder="Select a date" 
                                        value =  {this.state.date}
                                        onChange={this.handleChange}

                                        />
                                    </div>
                            </div>

                                <div className="container">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                            <th colSpan="2">Waluta</th>
                                            <th>Kurs kupna</th>
                                            <th>Kurs sprzedaży</th>
                                            <th>Kurs NBP</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.exchangeRates.map((exchangeRate) => (
                                            <ExchangeRate key={exchangeRate.currency.code} rate={exchangeRate} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ExchangeRates;
