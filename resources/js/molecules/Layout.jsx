import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import { ThemeContext } from '../contexts/ThemeContext';

function Layout(props) {
  const { children } = props;
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={`Layout ${
        theme === 'THEME_LIGHT' ? 'Layout--light' : 'Layout--dark'
      }`}
    >
      <Header />
      <Body>{children}</Body>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
