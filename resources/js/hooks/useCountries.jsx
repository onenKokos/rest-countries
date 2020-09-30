import { useContext } from 'react';
import { CountriesContext } from '@Contexts/AnotherCountriesContext';

function useCountries() {
  console.log('Logging in useCountries: ', useContext(CountriesContext));
  return useContext(CountriesContext);
}

export default useCountries;
