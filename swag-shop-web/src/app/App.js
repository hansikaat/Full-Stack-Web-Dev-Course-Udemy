import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.loadData =this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <div className="container App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React.</h2>
        </div>
        <div className="App-main">
          <div className="row">
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://image.freepik.com/free-photo/swimming-pool-water-with-copy-space_23-2148240100.jpg"/>
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://image.freepik.com/free-photo/swimming-pool-water-with-copy-space_23-2148240100.jpg"/>
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://image.freepik.com/free-photo/swimming-pool-water-with-copy-space_23-2148240100.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
