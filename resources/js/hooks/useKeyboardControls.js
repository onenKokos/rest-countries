const useKeyboardControls = () => {
  const toggle = (e, callback) => {
    if (e) {
      callback();
    }
  };

  return {
    toggle,
  };
};

export default useKeyboardControls;
