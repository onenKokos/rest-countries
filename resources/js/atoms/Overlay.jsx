import React from 'react';
import PropTypes from 'prop-types';

function Overlay(props) {
  const { visible } = props;
  return (
    <div className={`Overlay ${visible ? 'Overlay--visible' : ''}`}>
      <h1 className="Overlay__Headline">Welcome to REST Countries</h1>
    </div>
  );
}

Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Overlay;
