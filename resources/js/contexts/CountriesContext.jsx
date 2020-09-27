import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CountriesContext = createContext();

export function CountriesProvider(props) {
  const { children } = props;
  const [countries, setCountries] = useState([]);
  const [activeCountries, setActiveCountries] = useState([]);
  const [activeRegion, setActiveRegion] = useState(null);
  const [searchCountry, setSearchCountry] = useState('');

  function handleCountries(data) {
    setCountries(data);
    if (activeRegion) {
      console.log(activeRegion);
    }

    if (searchCountry) {
      console.log(searchCountry);
    }

    setActiveCountries(data);
  }

  function handleRegions(region) {
    setActiveRegion(region);
    handleCountries(countries);
  }

  return (
    <CountriesContext.Provider
      value={[
        countries,
        setCountries,
        activeCountries,
        setActiveCountries,
        activeRegion,
        setActiveRegion,
        searchCountry,
        setSearchCountry,
        handleCountries,
        handleRegions,
      ]}
    >
      {children}
    </CountriesContext.Provider>
  );
}

CountriesProvider.propTypes = {
  children: PropTypes.node,
};

CountriesProvider.defaultProps = {
  children: null,
};
