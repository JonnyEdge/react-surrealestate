/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/addproperty.scss';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: '',
        email: '',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: Object.assign({}, this.state.fields, {
        [event.target.name]: event.target.value,
      }),
    });
  };

  render() {
    return (
      <div className="addproperty">
        <form>
          <input name="title" placeholder="Advert Tagline" value={this.state.fields.title} onChange={this.handleFieldChange} />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="" hidden>Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <input name="bedrooms" placeholder="Number of Bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
          <input name="bathrooms" placeholder="Number of Bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
          <input name="price" placeholder="Price" value={this.state.fields.price} onChange={this.handleFieldChange} />
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="" hidden>Location</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <input name="email" placeholder="Email" value={this.state.fields.email} onChange={this.handleFieldChange} />
        </form>
        <button onClick={this.handleAddProperty} type="submit">Add</button>
      </div>
    );
  }
}

export default AddProperty;
