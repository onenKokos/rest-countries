import React from 'react';
import PropTypes from 'prop-types';

import Search from '../../assets/icons/search-solid.svg';
import Caret from '../../assets/icons/caret-solid.svg';

const SearchBar = (props) => {
  const { placeholder } = props;

  return (
    <div className="SearchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder={placeholder}
        className="SearchBar__Input"
      />
      <img src={Search} alt="Search icon" className="SearchBar__Icon" />
      <div className="SearchBar__Caret-container">
        <img src={Caret} alt="Caret" className="SearchBar__Caret" />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search for a country...',
};

export default SearchBar;
