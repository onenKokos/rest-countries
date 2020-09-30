import { useContext } from 'react';
import { CountriesContext } from '@Contexts/CountriesContext';

function useCountries() {
  return useContext(CountriesContext);
}

export default useCountries;
