import React from 'react';

const Overlay = (props) => {
  return (
    <div className={`Overlay ${props.visible ? 'Overlay--visible' : ''}`}>
      <h1 className="Overlay__Headline">Welcome to REST Countries</h1>
    </div>
  );
};

export default Overlay;
