import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '@Contexts/ThemeContext';
import Moon from '@Assets/icons/moon-solid.svg';

const ThemeToggler = (props) => {
  const { title, alt } = props;
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
      <Moon className="ThemeToggler__Icon" alt={alt} />
      <div>{title}</div>
    </div>
  );
};

ThemeToggler.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
};

ThemeToggler.defaultProps = {
  title: 'Dark mode',
  alt: 'Theme toggler',
};

export default ThemeToggler;
