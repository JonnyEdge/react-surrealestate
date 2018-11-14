import React from 'react';
import PropertyCard from './propertycard';
import '../styles/propertycards.scss';

const PropertyCards = props => (
  <div className="property-cards">
    {
    props.properties.map(property => (
      <PropertyCard
        key={property.title}
        title={property.title}
        type={property.type}
        bathrooms={property.bathrooms}
        bedrooms={property.bedrooms}
        price={property.price}
        city={property.city}
        email={property.email}
      />
    ))
  }
  </div>
);

export default PropertyCards;
