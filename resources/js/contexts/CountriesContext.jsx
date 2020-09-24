import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CountriesContext = createContext();

export function CountriesProvider(props) {
  const { children } = props;
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
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
