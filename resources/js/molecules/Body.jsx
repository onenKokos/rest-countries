import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
  const { children } = props;

  return (
    <main className="Main">
      <div className="Main__Container">{children}</div>
    </main>
  );
};

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Body.defaultProps = {
  children: null,
};

export default Body;