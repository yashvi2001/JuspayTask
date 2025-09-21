import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { themes, THEME_MODES } from './config';
import { ThemeContext } from './context';

export const ThemeProvider = ({
  children,
  defaultTheme = THEME_MODES.LIGHT,
}) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prev =>
      prev === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT
    );
  }, []);

  const theme = themes[currentTheme];

  // Set CSS custom properties when theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background', theme.bodyBackground);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      currentTheme,
      toggleTheme,
      isLight: currentTheme === THEME_MODES.LIGHT,
      isDark: currentTheme === THEME_MODES.DARK,
    }),
    [theme, currentTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
