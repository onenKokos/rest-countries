import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '@Contexts/ThemeContext';
import Moon from '@Assets/icons/moon-solid.svg';

function ThemeToggler(props) {
  const { title, alt } = props;
  const [theme, setTheme] = useContext(ThemeContext);

  function handleClick() {
    setTheme(theme === 'THEME_LIGHT' ? 'THEME_DARK' : 'THEME_LIGHT');
  }

  function handleKeydown(e) {
    if (e.keyCode === 13) {
      setTheme(theme === 'THEME_LIGHT' ? 'THEME_DARK' : 'THEME_LIGHT');
    }
  }

  return (
    <div
      className="ThemeToggler"
      onClick={handleClick}
      onKeyDown={handleKeydown}
      role="button"
      tabIndex={0}
    >
      <Moon alt={alt} /* className="ThemeToggler__Icon" */ />
      <div>{title}</div>
    </div>
  );
}

ThemeToggler.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
};

ThemeToggler.defaultProps = {
  alt: 'Theme toggler',
  title: 'Dark mode',
};

export default ThemeToggler;
