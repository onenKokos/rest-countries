import React, { useEffect, useContext } from 'react';
import CountryCardContainer from '@Molecules/CountryCardContainer';
import SearchBar from '@Atoms/SearchBar';
import Dropdown from '@Atoms/Dropdown';
import FlexContainer from '@Atoms/FlexContainer';
import { CountriesContext } from '@Contexts/CountriesContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = () => {
  const [countries, setCountries] = useContext(CountriesContext);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await res.json();
      setCountries(data);
    })();
  }, []);

  return (
    <div className="Homepage">
      <FlexContainer>
        <SearchBar />
        <Dropdown />
      </FlexContainer>

      <Router>
        <CountryCardContainer countries={countries} />
        <Switch>
          <Route exact path="/hell">
            <div>Hello</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Homepage;
