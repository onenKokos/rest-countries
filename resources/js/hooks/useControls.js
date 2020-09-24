function useControls() {
  function mouseToggle(callback) {
    callback();
  }

  function keyboardToggleEnter(e, callback) {
    if (e.keyCode === 13) {
      callback();
    }
  }

  function handleChange(e, callback) {
    callback();
  }

  return {
    mouseToggle,
    handleChange,
    keyboardToggleEnter,
  };
}

export default useControls;
