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

  componentDidUpdate(prevProps) {
    // console.log(this.props)
    // console.log(this.props.location)
    // console.log(this.props.location.search)
    // console.log(this.state.properties)
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
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
