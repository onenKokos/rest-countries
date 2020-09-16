import React from 'react';
import SearchBar from '@Atoms/SearchBar';
import Dropdown from '@Atoms/Dropdown';
import FlexContainer from '@Atoms/FlexContainer';

const Homepage = () => {
  return (
    <div className="Homepage">
      <FlexContainer>
        <SearchBar />
        <Dropdown />
      </FlexContainer>
    </div>
  );
};

export default Homepage;
