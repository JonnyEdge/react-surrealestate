/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1><FontAwesomeIcon icon="home" /> Surreal</h1>
        <ul className="nav">
          <Link className="item" to="/">View Properties</Link>
          <Link className="item" to="/add-property">Add Property</Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
