import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { Smurf } from './smurf';
import  Form  from './smurfForm';
import Smurfs from './smurfs';
import { fetchSmurfs } from '../store/reducers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={() => this.props.fetchSmurfs()}></button>
        <Form />
        <Smurfs /> 
      </div>
    );
  }
}

export default connect(null, {fetchSmurfs})(App);
