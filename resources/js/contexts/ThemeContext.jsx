import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const themes = {
  THEME_DARK: 'THEME_DARK',
  THEME_LIGHT: 'THEME_LIGHT',
};

export function ThemeProvider(props) {
  const { children } = props;
  const [theme, setTheme] = useState(themes.THEME_LIGHT);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};
