import React from 'react';
import PropTypes from 'prop-types';

import Moon from '../../assets/icons/moon-regular.svg';
import MoonSolid from '../../assets/icons/moon-solid.svg';

const ThemeToggler = (props) => {
  const { title, alt, isActive } = props;

  return (
    <div className="ThemeToggler">
      <img
        src={isActive ? MoonSolid : Moon}
        alt={alt}
        className="ThemeToggler__Icon"
      />
      <div>{title}</div>
    </div>
  );
};

ThemeToggler.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  isActive: PropTypes.bool,
};

ThemeToggler.defaultProps = {
  title: 'Dark mode',
  alt: 'Theme toggler',
  isActive: false,
};

export default ThemeToggler;
