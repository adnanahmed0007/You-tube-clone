import React from 'react';
 import "./Hed.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/search">Search</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
