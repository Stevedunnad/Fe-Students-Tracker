import React from 'react';
import { Link } from '@reach/router'
import './Nav.css';

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="link-list">
        <Link to="/" className="link-item">Home</Link>
        <Link to="/students" className="link-item">Students</Link>
        <Link to="/graduates" className="link-item">Graduates</Link> 
        <Link to="/blocks" className="link-item">Blocks</Link>
      </ul>
    </div>
  );
};

export default Nav;