import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
