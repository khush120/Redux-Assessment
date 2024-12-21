// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { useTheme } from './context/ThemeContext';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const { theme, toggleTheme } = useTheme();

 
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className={theme}> {/* Dynamically apply the theme */}
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Toggle theme */}
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
