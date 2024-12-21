// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // If you're using Redux
import './index.css';
import App from './App.jsx';
import store from './store/store.jsx';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

// Wrap the App with both Redux Provider and ThemeProvider
createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* If using Redux */}
    <ThemeProvider> {/* Wrap with ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>
);


