import React from 'react';
import PropTypes from 'prop-types';
import CountryCard from '@Atoms/CountryCard';

function CountryCardContainer(props) {
  const { countries } = props;

  return (
    <div className="CountryCardContainer">
      {Array.isArray(countries) &&
        countries.length > 0 &&
        countries.map((country) => (
          <CountryCard
            capital={country.capital}
            flag={country.flag}
            key={`k__${country.alpha2Code}`}
            name={country.name}
            population={country.population}
            region={country.region}
            url={`/country/${country.alpha2Code}`}
          />
        ))}
    </div>
  );
}

CountryCardContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
};

CountryCardContainer.defaultProps = {
  countries: [],
};

export default CountryCardContainer;
