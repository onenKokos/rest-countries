import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '@Molecules/Layout';
import ErrorPage from '@Routes/ErrorPage';
import Overlay from '@Atoms/Overlay';
import Loading from '@Atoms/Loading';

const Homepage = React.lazy(() => import('./routes/Homepage'));
const CountryPage = React.lazy(() => import('./routes/CountryPage'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <Router>
      <Overlay visible={isLoaded ? false : true} />
      <Layout>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
