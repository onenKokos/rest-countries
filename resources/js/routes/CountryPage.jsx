import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '@Routes/ErrorPage';
import LinkButton from '@Atoms/LinkButton';

function CountryPage() {
  const { code } = useParams();
  const [countries, setCountries] = useState(null);
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

    if (!countries) {
      fetchData();
    }
  }, [code, countries]);

  return displayError ? (
    <ErrorPage />
  ) : (
    <div className="CountryPage">
      <LinkButton
        additionalClasses={['LinkButton--Block, LinkButton--show-arrows']}
        text="Back"
        to="/"
      />
      {console.log(countries)}
      {countries && (
        <div className="CountryPage__Content">
          <img
            alt={countries.aplpha3Code}
            className="CountryPage__Flag"
            src={countries.flag}
          />
          <div className="CountryPage__Information">
            <h1 className="CountryPage__Name">{countries.name}</h1>
            <ul className="CountryPage__List">
              <li className="CountryPage__Entry">
                <b>Native Name:</b>
                {countries.nativeName}
              </li>
              <li className="CountryPage__Entry">
                <b>Top Level Domain:</b>
                {countries.topLevelDomain[0]}
              </li>
              <li className="CountryPage__Entry">
                <b>Population:</b>
                {countries.population}
              </li>
              <li className="CountryPage__Entry">
                <b>Currencies:</b>
                {countries.currencies.map((currency) => currency.name)}
              </li>
              <li className="CountryPage__Entry">
                <b>Region:</b>
                {countries.region}
              </li>
              <li className="CountryPage__Entry">
                <b>Languages:</b>
                {countries.languages.map((language) => language.name)}
              </li>
              <li className="CountryPage__Entry">
                <b>Sub Region:</b>
                {countries.subregion}
              </li>
              <li className="CountryPage__Entry">
                <b>Capital</b>
                {countries.capital}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryPage;
