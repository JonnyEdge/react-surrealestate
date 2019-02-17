/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/properties.scss';
import { Link } from 'react-router-dom';
// import Axios from 'axios';

class Properties extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     properties: [],
  //   };
  // }

  // componentDidUpdate(prevProps) {
  //   // console.log(this.props)
  //   // console.log(this.props.location)
  //   // console.log(this.props.location.search)
  //   // console.log(this.state.properties)
  //   const { search } = this.props.location;

  //   if (prevProps.location.search !== search) {
  //     Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
  //       .then(({ data: properties }) => this.setState({ properties }))
  //       .catch(err => console.error(err));
  //   }
  // }

  render() {
    return (
      <div className="sidebar">
        <h4>Filter by city</h4>
        <div className="filters">
          <Link className="filter" to={'/?query={"city":"Manchester"}'}>Manchester</Link>
          <Link className="filter" to={'/?query={"city":"Leeds"}'}>Leeds</Link>
          <Link className="filter" to={'/?query={"city":"Sheffield"}'}>Sheffield</Link>
          <Link className="filter" to={'/?query={"city":"Liverpool"}'}>Liverpool</Link>
        </div>
      </div>
    );
  }
}

export default Properties;
