import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  changeName(){
    localStorage.removeItem('name');
    window.location.href="/";
  }

render() {
  return (
      <nav>
        <div className="nav-wrapper orange">
          <Link to="/" className="brand-logo center">Fix My Mood</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="btn red" onClick={() => this.changeName()}>Change Name</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
