import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Math Magicians</h1>
      <ul className="header-nav">
        <li><Link className="header-nav-item" to="/">Home</Link></li>
        <span> | </span>
        <li><Link className="header-nav-item" to="/Quote">Quote</Link></li>
        <span> | </span>
        <li><Link className="header-nav-item" to="/Calculator">Calculator</Link></li>
      </ul>
    </div>
  );
}

export default Header;
