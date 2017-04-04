import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
  }

  componentWillMount() {
    if (!this.state.name ){
      const name_prompt = prompt('What is your name?');
      this.setState({name: name_prompt})
    }
  }

  render() {
    return (
      <div className="main">
        <div className="container center">
          <h3>{`Hello ${this.state.name} Click the button that represents your mood!`}</h3>
          <hr/>
          <br/>
          <div className="row">

            <div className="col s4">
              <Link className="btn waves-effect waves-light grey" to="/display/sad">I'm in a sad mood 😞</Link>
            </div>

            <div className="col s4">
              <Link className="btn waves-effect waves-light blue" to="/display/sad">I'm in a happy mood 😁</Link>
            </div>

            <div className="col s4">
              <Link className="btn waves-effect waves-light red" to="/display/sad">I'm in a angry mood 😡</Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Main;
