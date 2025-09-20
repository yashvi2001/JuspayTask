import { ThemeProvider } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import './App.css';
import './index.css';

function ThemeToggle() {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <button
        className="theme-toggle-button"
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.surface,
          color: theme.text,
          borderColor: theme.border,
        }}
      >
        <img
          src="/Sun.svg"
          alt="Sun"
          className={`theme-icon ${isLight ? 'light' : 'dark'}`}
        />
        {isLight ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
