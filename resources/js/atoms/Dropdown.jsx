import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Caret from '@Assets/icons/caret-solid.svg';

function Dropdown(props) {
  const { placeholder, options } = props;

  const [isActive, setIsActive] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');
  const [possibleRegions, setPossibleRegions] = useState(options);

  const handleChange = (e) => {
    setPossibleRegions(
      options.filter((option) => option.includes(e.target.value)),
    );
    setCurrentRegion(e.target.value);
  };

  const handleClick = (e) => {
    setCurrentRegion(e.target.innerHTML);
  };

  return (
    <div className="Dropdown">
      <div
        className={`Dropdown__Container ${
          isActive ? 'Dropdown__Container--is-Active' : ''
        }`}
        onClick={() => setIsActive(!isActive)}
        role="button"
        tabIndex={0}
      >
        <input
          className="Dropdown__Selection"
          id="selected"
          name="selected"
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          type="text"
          value={currentRegion !== '' ? currentRegion : ''}
        />
        <Caret alt="Caret" className="Dropdown__Caret" />
        <div className="Dropdown__Options-container">
          {possibleRegions.length > 0 &&
            possibleRegions.map((option) => (
              <div
                className="Dropdown__Option"
                key={`k__${option}`}
                onClick={(e) => handleClick(e)}
                role="button"
                tabIndex={isActive ? 0 : -1}
              >
                {option}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

Dropdown.defaultProps = {
  placeholder: 'Filter by Region',
  options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
};

export default Dropdown;
