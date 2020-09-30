import { useContext } from 'react';
import { ThemeContext } from '@Contexts/ThemeContext';

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
