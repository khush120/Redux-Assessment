
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value (null or any initial state)
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider component to provide the theme and toggleTheme functions
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
