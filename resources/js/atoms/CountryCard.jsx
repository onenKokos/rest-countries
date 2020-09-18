import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const { flag, name, population, capital, url, region } = props;

  return (
    <div className="CountryCard">
      <Link to={url}>
        <div className="CountryCard__Flag-container">
          <img src={flag} alt={`${name} flag`} className="CountryCard__Flag" />
        </div>
        <div className="CountryCard__Body">
          <h3 className="CountryCard__Name">{name}</h3>

          <div className="CountryCard__Row">
            <b>Population:</b>
            {population}
          </div>
          <div className="CountryCard__Row">
            <b>Region</b>
            {region}
          </div>
          <div className="CountryCard__Row">
            <b>Capital:</b>
            {capital}
          </div>
        </div>
      </Link>
    </div>
  );
};

CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CountryCard;
