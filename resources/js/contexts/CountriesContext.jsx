import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

export const CountriesContext = createContext();

function init() {
  return {
    countries: [],
    activeCountries: [],
    activeRegion: '',
    search: '',
  };
}

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
        activeCountries: payload,
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
    case 'INIT':
      return init();
    default:
      return state;
  }
}

function CountriesContextProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const setCountries = useCallback(
    (payload) => {
      dispatch({ type: 'SET_COUNTRIES', payload });
    },
    [dispatch],
  );

  const setActiveCountries = useCallback(
    (payload) => {
      dispatch({ type: 'SET_ACTIVE', payload });
    },
    [dispatch],
  );

  const setRegion = useCallback(
    (payload) => {
      dispatch({ type: 'SET_REGION', payload });
    },
    [dispatch],
  );

  const setSearch = useCallback(
    (payload) => {
      dispatch({ type: 'SET_SEACH', payload });
    },
    [dispatch],
  );

  const countries = useMemo(() => {
    return state.countries;
  }, [state]);

  const activeCountries = useMemo(() => {
    return state.activeCountries;
  }, [state]);

  const activeRegion = useMemo(() => {
    return state.activeRegion;
  }, [state]);

  const search = useMemo(() => {
    return state.search;
  }, [state]);

  return (
    <CountriesContext.Provider
      value={{
        setCountries,
        setActiveCountries,
        setRegion,
        setSearch,
        countries,
        activeCountries,
        activeRegion,
        search,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

CountriesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

CountriesContextProvider.defaultProps = {};

export default CountriesContextProvider;
