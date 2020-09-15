import React from 'react';
import PropTypes from 'prop-types';
import CountryCard from '../atoms/CountryCard';

const CountryCardContainer = (props) => {
  const { cards } = props;

  return (
    <div className="CountryCardContainer">
      {cards.map((card) => {
        <CountryCard
          flag={card.flag}
          name={card.name}
          population={card.population}
          capital={card.capital}
          url={card.url}
        />;
      })}
    </div>
  );
};

CountryCardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};

CountryCardContainer.defaultProps = {
  cards: [],
};

export default CountryCardContainer;
