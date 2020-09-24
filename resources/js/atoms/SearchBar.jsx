import React from 'react';
import PropTypes from 'prop-types';

import Search from '@Assets/icons/search-solid.svg';

function SearchBar(props) {
  const { placeholder } = props;

  return (
    <div className="SearchBar">
      <div className="SearchBar__Inner">
        <input
          className="SearchBar__Input"
          id="searchBar"
          name="searchBar"
          placeholder={placeholder}
          type="text"
        />
        {/* <img src={Search} alt="Search icon" className="SearchBar__Icon" /> */}
        <Search className="SearchBar__Icon" />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search for a country...',
};

export default SearchBar;
