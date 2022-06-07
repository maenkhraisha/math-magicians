import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <h1>Math Magicians</h1>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Quote">Quote</Link></li>
    <li><Link to="/Calculator">Calculator</Link></li>
  </>
);

export default Header;
