import {lightColors, darkColors} from './colors';
import {useColorScheme} from 'react-native';
import React, {createContext, useContext, useEffect, useState} from 'react';

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvader = props => {
  const colorScheme = useColorScheme(colorScheme == 'dark');
  const [isDark, setisDark] = useState(colorScheme == 'dark');

  useEffect(() => {
    setisDark(colorScheme == 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setisDark(scheme == 'dark'),
  };
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
