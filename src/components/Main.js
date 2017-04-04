import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      moodType: null
    }
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <p>Hello World</p>
          <Link to="/display/sad">Display</Link>
        </div>
      </div>
    )
  }
}

export default Main;
