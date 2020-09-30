import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '@Routes/ErrorPage';
import LinkButton from '@Atoms/LinkButton';
import usePrev from '@Hooks/usePrev';

function CountryPage() {
  const { code } = useParams();
  const [countries, setCountries] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const prevCode = usePrev(code);

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

    if (prevCode !== code) {
      fetchData();
    }
  }, [code, countries, prevCode]);

  return displayError ? (
    <ErrorPage />
  ) : (
    <div className="CountryPage">
      <LinkButton
        additionalClasses={['LinkButton--Block, LinkButton--show-arrows']}
        text="Back"
        to="/"
      />

      {countries && (
        <div className="CountryPage__Content">
          <div className="CountryPage__Flag-container">
            <img
              alt={countries.alpha3Code}
              className="CountryPage__Flag"
              src={countries.flag}
            />
          </div>
          <div className="CountryPage__Information">
            <h1 className="CountryPage__Name">{countries.name}</h1>
            <ul className="CountryPage__List">
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Native Name:</b>
                {countries.nativeName}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Top Level Domain:</b>
                {countries.topLevelDomain[0]}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Population:</b>
                {countries.population}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Currencies:</b>
                {countries.currencies
                  .map((currency) => currency.name)
                  .join(', ')}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Region:</b>
                {countries.region}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Languages:</b>
                {countries.languages
                  .map((language) => language.name)
                  .join(', ')}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Sub Region:</b>
                {countries.subregion}
              </li>
              <li className="CountryPage__Entry">
                <b className="CountryPage__Highlight"> Capital:</b>
                {countries.capital}
              </li>
            </ul>
            <div className="CountryPage__Border-Countries">
              <span className="CountryPage__Highlight">Border Countries: </span>
              {countries.borders.map((border) => (
                <LinkButton
                  additionalClasses={['LinkButton--inline']}
                  key={`LB__${border}`}
                  text={border}
                  to={`/country/${border}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryPage;
