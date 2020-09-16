import React from 'react';

const Overlay = (props) => {
  console.log('Overlay render');
  return (
    <div className={`Overlay ${props.visible ? 'Overlay--visible' : ''}`}>
      <h1 className="Overlay__Headline">Welcome to REST Countries</h1>
    </div>
  );
};

export default Overlay;
