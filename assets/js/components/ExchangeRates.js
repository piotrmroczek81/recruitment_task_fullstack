// ./assets/js/components/Users.js

import React, {Component} from 'react';
import axios from 'axios';

class ExchangeRates extends Component {
    constructor() {
        super();
        this.state = { setupCheck: {}, loading: true, date: ""};
    }

    getBaseUrl() {
        return 'http://telemedi-zadanie.localhost';
    }

    componentDidMount() {
        this.checkApiSetup();

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // dodamy 1, ponieważ miesiące w JavaScript są indeksowane od 0
        const day = now.getDate();
        const formattedDate = `${year}-${month}-${day}`;

        this.setState({ date: formattedDate }, () => {
            console.log(this.state.date); // wydrukuje nowy stan
          });
    }

    checkApiSetup() {
        //const baseUrl = this.getBaseUrl();
        const baseUrl = 'http://telemedi-zadanie.localhost';
        axios.get(baseUrl + `/api/setup-check?testParam=1`).then(response => {
            let responseIsOK = response.data && response.data.testParam === 1
            this.setState({ setupCheck: responseIsOK, loading: false})
        }).catch(function (error) {
            console.error(error);
            this.setState({ setupCheck: false, loading: false});
        });
    }
    
    handleChange = (event) => {
        const newDate = event.target.value;
        this.setState({ date: newDate }, () => {
            console.log(this.state.date); // wydrukuje nowy stan
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
        <tr>
          <td>EUR</td>
          <td>EUR</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td>EUR</td>
          <td>EUR</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td>EUR</td>
          <td>EUR</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
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
                        <td>01/01/01</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>01/01/01</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
          </td>
        </tr>

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
