import React, {
  createContext,
  useState,
  useCallBack,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  countries: [],
  activeCountries: [],
  activeRegion: '',
  search: '',
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: payload,
      };

    case 'SET_ACTIVE':
      return {
        ...state,
        activeCountries: payload,
      };
    case 'SET_REGION':
      return {
        ...state,
        activeRegion: payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
}

export const ThemeContext = createContext(initialState);
const { Provider } = ThemeContext;

function ThemeContextProvider(props) {
  const { children } = props;

  const [countries, setCountries] = useState(null);

  return <Provider>{children}</Provider>;
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ThemeContextProvider.defaultProps = {};

export default ThemeContextProvider;
