import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const { placeholder, options } = props;

  return (
    <div className="Dropdown">
      <div className="Dropdown__Container">
        <input
          type="text"
          className="Dropdown__Selection"
          id="selected"
          name="selected"
          placeholder={placeholder}
        />
        <div className="Dropdown__Options-container">
          {options.length > 0 &&
            options.map((option) => (
              <div className="Dropdown__Option">{option}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

Dropdown.defaultProps = {
  placeholder: 'Filter by Region',
  options: ['Hello', 'World'],
};

export default Dropdown;
