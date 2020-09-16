import React from 'react';
import CountryCard from '@Atoms/CountryCard';

const CountryCardContainer = (props) => {
  const { countries } = props;

  return (
    <div className="CountryCardContainer">
      {Array.isArray(countries) &&
        countries.length > 0 &&
        countries.map((country) => (
          <CountryCard
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            url={`/${country.alpha2Code}`}
            flag={country.flag}
          />
        ))}
    </div>
  );
};

export default CountryCardContainer;
