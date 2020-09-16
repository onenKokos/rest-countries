import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;
