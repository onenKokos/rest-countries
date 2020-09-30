import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import useTheme from '@Hooks/useTheme';

function Layout(props) {
  const { children } = props;

  const { theme } = useTheme();

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
