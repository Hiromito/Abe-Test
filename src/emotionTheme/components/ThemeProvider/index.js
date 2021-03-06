import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../../theme';

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    {children}
  </EmotionThemeProvider>
);

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export { ThemeProvider };
export { useTheme };