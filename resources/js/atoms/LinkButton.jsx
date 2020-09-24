import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Arrow from '@Assets/icons/arrow-left-solid.svg';

function LinkButton(props) {
  const { additionalClasses, text, to } = props;

  const stringClasses = additionalClasses.join('').replace(/,/g, ' ');

  return (
    <span className={`LinkButton ${stringClasses}`}>
      <Link to={to}>
        <Arrow />
        {text}
      </Link>
    </span>
  );
}

LinkButton.propTypes = {
  additionalClasses: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  additionalClasses: [],
};

export default LinkButton;
