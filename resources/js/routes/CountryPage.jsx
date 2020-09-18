import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

const CountryPage = (props) => {
  const { code } = useParams();

  return (
    <div className="CoutnryPage">
      Countrypage for {code}!<br />{' '}
    </div>
  );
};

export default CountryPage;
