import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="brand-name">
            <Link to={props.path}>FastFoodFast.com</Link>
          </div>
          <div className="navlinks">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
