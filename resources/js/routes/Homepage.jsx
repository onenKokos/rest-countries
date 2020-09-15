import React from 'react';
import SearchBar from '../atoms/SearchBar';
import Dropdown from '../atoms/Dropdown';

const Homepage = () => {
  return (
    <div className="Homepage">
      <SearchBar />
      <Dropdown />
    </div>
  );
};

export default Homepage;
