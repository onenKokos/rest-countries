import React from 'react';
import useCountries from '@Hooks/useCountries';

function AnotherExampleContextPage() {
  //const { countries, setCountries } = useCountries();

  const countries = useCountries();

  console.log(countries);

  return (
    <div className="AnotherExampleContextPage">
      <p>
        This is another example context page, using the useCountries hook! wow!
        sooooo amazing!
      </p>
      {/* {countries &&
        countries.map((country) => (
          <div key={`p__${country.alpha2Code}`}>{country.name}</div>
        ))} */}
    </div>
  );
}

export default AnotherExampleContextPage;
