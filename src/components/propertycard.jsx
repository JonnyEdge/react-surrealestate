import React from 'react';
import '../styles/propertycard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PropertyCard = props => console.log(props) || (

  <span className="property-card">
    <div className="property-card__placeholder"><FontAwesomeIcon icon="home" /></div>
    <div className="property-card__title">{props.title}</div>
    <div className="property-card__type">{props.type}</div>
    <div className="property-card__bathrooms"><FontAwesomeIcon icon="toilet-paper" />  {props.bathrooms}</div>
    <div className="property-card__bedrooms"><FontAwesomeIcon icon="bed" />  {props.bedrooms}</div>
    <div className="property-card__price"><FontAwesomeIcon icon="pound-sign" />  {props.price}</div>
    <div className="property-card__city"><FontAwesomeIcon icon="city" />  {props.city}</div>
    <div className="property-card__email"><FontAwesomeIcon icon="envelope" />  {props.email}</div>
  </span>

);

export default PropertyCard;
