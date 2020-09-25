import React, { /*  useEffect, useState, */ Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '@Molecules/Layout';
import ErrorPage from '@Routes/ErrorPage';
/* import Overlay from '@Atoms/Overlay'; */
import CountryPage from '@Routes/CountryPage';
import Loading from '@Atoms/Loading';

const Homepage = React.lazy(() => import('./routes/Homepage'));

// Contexts
import { ThemeProvider } from '@Contexts/ThemeContext';
import { CountriesProvider } from '@Contexts/CountriesContext';

function App() {
  /*   const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]); */

  return (
    <Router>
      <CountriesProvider>
        <ThemeProvider>
          {/*   <Overlay visible={isLoaded ? false : true} /> */}
          <Layout>
            {/* <Loading /> */}
            <Switch>
              <Route exact path="/country/:code">
                <CountryPage />
              </Route>

              <Route exact path="/">
                <Suspense fallback={<Loading />}>
                  <Homepage />
                </Suspense>
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
}

export default App;
