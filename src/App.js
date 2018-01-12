import React, { Component } from 'react';
import Clock from './components/Clock';
import Calculator from './components/Calculator';
import Filter from './components/Filter/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            {/* <Clock />

            <Calculator /> */}
            <Filter />
        </div>
        
    );
  }
}

export default App;
