import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import Checkout from './Checkout';
import Product from './Product';
import Header from './Header';



class App extends Component {

  render() {
    return (



      <div className="App">
       <Header />

        <Alert color="primary">
           Welcome to the React Store! v1.0.0 is currently under construction. Stay tuned for: Stripe API, CosmicJS API, and blog tutorial. </Alert>
         <Product />



          <div className="footer">
           <p className="footer-text">
           Built by <a href="https://johnallenhopper.now.sh/">John A. Hopper</a> <code>under construction</code>
                 </p>

             </div>


      </div>
    );
  }
}

export default App;
