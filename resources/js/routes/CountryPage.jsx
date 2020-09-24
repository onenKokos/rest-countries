import React from 'react';
import { useParams } from 'react-router-dom';

function CountryPage() {
  const { code } = useParams();

  return <div className="CoutnryPage">Countrypage for {code}!</div>;
}

export default CountryPage;
