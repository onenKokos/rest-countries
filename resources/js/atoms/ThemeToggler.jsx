import React from 'react';
import PropTypes from 'prop-types';
import Moon from '@Assets/icons/moon-solid.svg';
import useTheme from '@Hooks/useTheme';

function ThemeToggler(props) {
  const { title, alt } = props;
  const { toggleTheme } = useTheme();

  function handleClick() {
    toggleTheme();
  }

  function handleKeydown(e) {
    if (e.keyCode === 13) {
      toggleTheme();
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
      <Moon alt={alt} />
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
