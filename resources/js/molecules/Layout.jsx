import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="Layout">
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
