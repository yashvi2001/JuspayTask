import React from 'react';
import Layout from './Layout';
import { ThemeProvider } from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout />
    </ThemeProvider>
  );
}

export default App;
