import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '@Assets/icons/search-solid.svg';
import useCountries from '@Hooks/useCountries';

function SearchBar(props) {
  const { placeholder } = props;

  const { setSearch } = useCountries();

  const [input, setInput] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
    setInput(e.target.value);
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar__Inner">
        <input
          className="SearchBar__Input"
          id="searchBar"
          name="searchBar"
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={input}
        />
        <Search />
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
