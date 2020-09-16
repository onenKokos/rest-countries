import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '@Contexts/ThemeContext';

import Moon from '@Assets/icons/moon-regular.svg';
import MoonSolid from '@Assets/icons/moon-solid.svg';

const ThemeToggler = (props) => {
  const { title, alt, isActive } = props;
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'THEME_LIGHT' ? 'THEME_DARK' : 'THEME_LIGHT');
  };

  return (
    <div
      className="ThemeToggler"
      role="button"
      tabIndex={0}
      onClick={() => handleClick()}
    >
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
