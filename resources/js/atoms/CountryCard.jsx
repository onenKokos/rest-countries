import React from 'react';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const { flag, name, population, capital, url } = props;

  return (
    <div className="CountryCard">
      <img src={flag} alt={`${name} flag`} />
      <p>{name}</p>
      <p>{population}</p>
      <p>{capital}</p>
      <p>{url}</p>
    </div>
  );
};

CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  capital: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CountryCard;
