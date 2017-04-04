import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    console.log(this.props)
    return (
        <div className="App">
          <Header />
           {this.props.children}
        </div>
    )
  }
}

export default App;
