import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThemeToggler from '@Atoms/ThemeToggler';

function Header(props) {
  const { title } = props;

  return (
    <header className="Header">
      <div className="Header__Inner">
        <div className="Header__Title">
          <Link to="/">{title} </Link>
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Where in the world?',
};

export default Header;
