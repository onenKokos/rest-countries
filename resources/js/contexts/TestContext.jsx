import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

function exampleReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: payload,
      };

    case 'SET_REGION':
      return {
        ...state,
        region: payload,
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

const initialExampleState = {
  countries: [],
  activeCountries: [],
  activeRegion: '',
  search: '',
};

const ExampleStore = React.createContext(initialExampleState);
const { Provider } = ExampleStore;

function TestContextProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(exampleReducer, initialExampleState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

TestContextProvider.propTypes = {
  children: PropTypes.node,
};

TestContextProvider.defaultProps = {
  children: null,
};

export { TestContextProvider, ExampleStore };
