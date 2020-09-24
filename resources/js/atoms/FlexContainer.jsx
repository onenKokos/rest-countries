import React from 'react';
import PropTypes from 'prop-types';

function FlexContainer(props) {
  const { children } = props;

  return <div className="FlexContainer">{children}</div>;
}

FlexContainer.propTypes = {
  children: PropTypes.node,
};

FlexContainer.defaultProps = {
  children: null,
};
export default FlexContainer;
