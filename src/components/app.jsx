import React from 'react';
import '../styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavBar from './navbar';

library.add(faHome);

class App extends React.Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
