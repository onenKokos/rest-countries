import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const themes = {
  THEME_DARK: 'THEME_DARK',
  THEME_LIGHT: 'THEME_LIGHT',
};

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.THEME_LIGHT);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
