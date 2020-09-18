import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '@Molecules/Layout';
import Homepage from '@Routes/Homepage';
import ErrorPage from '@Routes/ErrorPage';
import Overlay from '@Atoms/Overlay';
import CountryPage from '@Routes/CountryPage';

// Contexts
import { ThemeProvider } from '@Contexts/ThemeContext';
import { CountriesProvider } from '@Contexts/CountriesContext';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <Router>
      <CountriesProvider>
        <ThemeProvider>
          <Overlay visible={isLoaded ? false : true} />
          <Layout>
            <Switch>
              <Route exact path="/country/:code">
                <CountryPage />
              </Route>

              <Route exact path="/">
                <Homepage />
              </Route>

              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </CountriesProvider>
    </Router>
  );
};

export default App;
