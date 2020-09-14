import React from 'react';
import Layout from './molecules/Layout';
import SearchBar from './atoms/SearchBar';
import Dropdown from './atoms/Dropdown';

function App() {
  return (
    <Layout>
      <SearchBar />
      <Dropdown />
    </Layout>
  );
}

export default App;
