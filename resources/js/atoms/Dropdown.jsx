import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Caret from '@Assets/icons/caret-solid.svg';

function Dropdown(props) {
  const { placeholder, options } = props;

  const [isActive, setIsActive] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');
  const [possibleRegions, setPossibleRegions] = useState(options);

  function handleChange(e) {
    setPossibleRegions(
      options.filter((option) => option.includes(e.target.value)),
    );
    setCurrentRegion(e.target.value);
  }

  function handleClick(e) {
    setCurrentRegion(e.target.innerHTML);
  }

  function handleClickToggle() {
    setIsActive(!isActive);
  }

  function handleKeydown(e) {
    setCurrentRegion(e.target.innerHTML);
  }

  function handleKeydownToggle(e) {
    if (e.keyCode === 13) {
      setIsActive(!isActive);
    }
  }

  return (
    <div className="Dropdown">
      <div
        className={`Dropdown__Container ${
          isActive ? 'Dropdown__Container--is-Active' : ''
        }`}
        onClick={handleClickToggle}
        onKeyDown={handleKeydownToggle}
        role="button"
        tabIndex={0}
      >
        <input
          className="Dropdown__Selection"
          id="selected"
          name="selected"
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={currentRegion !== '' ? currentRegion : ''}
        />
        <Caret alt="Caret" /* className="Dropdown__Caret" */ />
        <div className="Dropdown__Options-container">
          {possibleRegions.length > 0 &&
            possibleRegions.map((option) => (
              <div
                className="Dropdown__Option"
                key={`k__${option}`}
                onClick={handleClick}
                onKeyDown={handleKeydown}
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
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
  placeholder: 'Filter by Region',
};

export default Dropdown;
