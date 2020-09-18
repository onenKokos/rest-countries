import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

const CountryPage = (props) => {
  const { code } = useParams();

  return <div className="CoutnryPage">Countrypage for {code}!</div>;
};

export default CountryPage;
