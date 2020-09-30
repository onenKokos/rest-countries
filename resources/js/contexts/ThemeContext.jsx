import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

const themes = {
  THEME_LIGHT: 'THEME_LIGHT',
  THEME_DARK: 'THEME_DARK',
};

export const ThemeContext = createContext();

function init() {
  return {
    theme: themes.THEME_LIGHT,
  };
}

const initialState = {
  theme: themes.THEME_LIGHT,
};

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case 'TOGGLE_THEME':
      return state.theme === themes.THEME_DARK
        ? { theme: themes.THEME_LIGHT }
        : { theme: themes.THEME_DARK };
    case 'INIT':
      return init();
    default:
      return state;
  }
}

function ThemeContextProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' });
  }, [dispatch]);

  const theme = useMemo(() => {
    return state.theme;
  }, [state]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ThemeContextProvider.defaultProps = {};

export default ThemeContextProvider;
