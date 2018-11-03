import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1><FontAwesomeIcon icon="home" /> Surreal</h1>
        <ul className="nav">
          <li className="item">Previous</li>
          <li className="item">Next</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
