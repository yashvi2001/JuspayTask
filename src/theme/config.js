/**
 * Theme Configuration
 * Defines light and dark theme settings
 */

export const themes = {
  light: {
    background: '#ffffff',
    surface: '#f8fafc',
    secondary: '#f1f5f9',
    text: '#1e293b',
    textSecondary: 'rgba(30, 41, 59, 0.6)',
    border: 'rgba(30, 41, 59, 0.1)',
    cardBackground: '#f8fafc',
    sidebarBackground: '#ffffff',
    navbarBackground: '#ffffff',
    bodyBackground: '#f8fafc',
  },
  dark: {
    background: '#1c1c1c',
    surface: 'rgba(255, 255, 255, 0.05)',
    secondary: 'rgba(255, 255, 255, 0.1)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.1)',
    cardBackground: 'rgba(255, 255, 255, 0.05)',
    sidebarBackground: '#1c1c1c',
    navbarBackground: '#1c1c1c',
    bodyBackground: '#1c1c1c',
  },
};

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};
