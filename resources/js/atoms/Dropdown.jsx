import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Caret from '@Assets/icons/caret-solid.svg';
import useClickOutside from '@Hooks/useClickOutside';
import useCountries from '@Hooks/useCountries';

function Dropdown(props) {
  const { placeholder, options } = props;

  const { setRegion, activeRegion } = useCountries();

  const [isActive, setIsActive] = useState(false);
  const [possibleRegions, setPossibleRegions] = useState(options);

  const dropdownRef = useRef();

  useClickOutside(dropdownRef, () => setIsActive(false));

  function handleChange(e) {
    setPossibleRegions(
      options.filter((option) => option.includes(e.target.value)),
    );
    setRegion(e.target.value);
  }

  function handleClick(e) {
    setRegion(e.target.innerHTML);
  }

  function handleClickToggle() {
    setIsActive(!isActive);
  }

  function handleKeydown(e) {
    setRegion(e.target.innerHTML);
  }

  function handleKeydownToggle(e) {
    if (e.keyCode === 13) {
      setIsActive(!isActive);
    }
  }

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <div
        className={`Dropdown__Container ${
          isActive ? 'Dropdown__Container--is-Active' : ''
        }`}
        onClick={handleClickToggle}
        onKeyDown={handleKeydownToggle}
        role="button"
        tabIndex={-1}
      >
        <input
          autoComplete="off"
          className="Dropdown__Selection"
          id="selected"
          name="selected"
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={activeRegion !== '' ? activeRegion : ''}
        />
        <Caret alt="Caret" />
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
