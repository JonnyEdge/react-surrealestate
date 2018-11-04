import React from 'react';
import '../styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavBar from './navbar';
import { Switch, Route } from 'react-router';
import Properties from './properties';
import AddProperty from './addproperty';

library.add(faHome);

class App extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
