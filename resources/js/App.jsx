import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from '@Molecules/Layout';
import Homepage from '@Routes/Homepage';
import ErrorPage from '@Routes/ErrorPage';

// Contexts
import { ThemeProvider } from '@Contexts/ThemeContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
