import React from 'react';
import '../styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faToiletPaper, faBed, faPoundSign, faCity, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import NavBar from './navbar';
import { Switch, Route } from 'react-router';
import Properties from './properties';
import AddProperty from './addproperty';
import PropertyCards from './propertycards';
import Axios from 'axios';

library.add(faHome, faToiletPaper, faBed, faPoundSign, faCity, faEnvelope);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          properties: response.data,
        });
      });
  }


  render() {
    return (
      <div className="navigation">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
        <PropertyCards
          properties={this.state.properties}
        />
      </div>
    );
  }
}

export default App;
