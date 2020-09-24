import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '@Contexts/CountriesContext';
import ErrorPage from '@Routes/ErrorPage';

function CountryPage() {
  const { code } = useParams();
  const [countries, setCountries] = useContext(CountriesContext);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${code}`,
        );
        const data = await res.json();

        if (data.status === 400) {
          setDisplayError(true);
        }

        setCountries(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    if (countries.length === 0) {
      fetchData();
    }

    if (countries.length > 0) {
      const found = countries.find((country) => country.alpha2Code == code);
      if (!found) {
        setDisplayError(true);
      }
    }
  }, [countries, setCountries, code]);

  return displayError ? (
    <ErrorPage />
  ) : (
    <div className="CountryPage">Countrypage for {code}!</div>
  );
}

export default CountryPage;
