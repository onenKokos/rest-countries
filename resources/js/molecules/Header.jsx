import React from 'react';
import PropTypes from 'prop-types';
import ThemeToggler from '@Atoms/ThemeToggler';

const Header = (props) => {
  const { title } = props;
  return (
    <header className="Header">
      <div className="Header__Title">{title}</div>
      <ThemeToggler />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Where in the world?',
};

export default Header;
