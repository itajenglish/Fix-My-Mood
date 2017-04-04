import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper orange">
        <Link to="/" className="brand-logo center">Fix My Mood</Link>
      </div>
    </nav>
  )
}

export default Header;
