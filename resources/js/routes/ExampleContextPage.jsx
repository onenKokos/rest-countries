import React, { useContext, useEffect } from 'react';
import { ExampleStore } from '@Contexts/TestContext';

function ExampleContextPage() {
  const { state, dispatch } = useContext(ExampleStore);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();

        dispatch({ type: 'SET_COUNTRIES', payload: data });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [dispatch]);

  function clickHandler() {}

  function keyBoardHandler(e) {
    if (e.keyCode === 13) {
      dispatch({ type: 'ADD_COUNTRY', payload: 'I love dicks in my asshole' });
    }
  }

  return (
    <div className="ExampleContextPage">
      <p>Context data will be here.</p>
      {state &&
        state.countries.map((country) => (
          <p key={`p__${country.name}${Math.random()}`}>{country.name}</p>
        ))}
      <button onClick={clickHandler} onKeyDown={keyBoardHandler} type="button">
        Upadte data in global state.
      </button>
    </div>
  );
}

export default ExampleContextPage;
