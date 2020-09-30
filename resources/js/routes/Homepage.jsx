import React, { useEffect } from 'react';
import CountryCardContainer from '@Molecules/CountryCardContainer';
import SearchBar from '@Atoms/SearchBar';
import Dropdown from '@Atoms/Dropdown';
import FlexContainer from '@Atoms/FlexContainer';
import useCountries from '@Hooks/useCountries';

function Homepage() {
  const { activeCountries, setCountries } = useCountries();

  useEffect(() => {
    async function fetchAllCountries() {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchAllCountries();
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
