import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../sass/index.scss';

import CountriesContextProvider from './contexts/CountriesContext';
import ThemeContextProvider from './contexts/ThemeContext';

ReactDOM.render(
  <StrictMode>
    <CountriesContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountriesContextProvider>
  </StrictMode>,
  document.getElementById('root'),
);
