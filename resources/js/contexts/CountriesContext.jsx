import React, { useState, createContext } from 'react';

export const CountriesContext = createContext();

export function CountriesProvider(props) {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      {props.children}
    </CountriesContext.Provider>
  );
}
