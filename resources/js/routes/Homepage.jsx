import React, { useEffect, useContext } from 'react';
import CountryCardContainer from '@Molecules/CountryCardContainer';
import SearchBar from '@Atoms/SearchBar';
import Dropdown from '@Atoms/Dropdown';
import FlexContainer from '@Atoms/FlexContainer';
import { CountriesContext } from '@Contexts/CountriesContext';

function Homepage() {
  const [activeCountries, setCountries] = useContext(CountriesContext);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await res.json();
      setCountries(data);
    })();
  }, [setCountries]);

  return (
    <div className="Homepage">
      <FlexContainer>
        <SearchBar />
        <Dropdown />
      </FlexContainer>
      <CountryCardContainer countries={activeCountries} />
    </div>
  );
}

export default Homepage;
