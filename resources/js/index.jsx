import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../sass/index.scss';

import AnotherCountriesContext from './contexts/AnotherCountriesContext';

ReactDOM.render(
  <StrictMode>
    <AnotherCountriesContext>
      <App />
    </AnotherCountriesContext>
  </StrictMode>,
  document.getElementById('root'),
);
