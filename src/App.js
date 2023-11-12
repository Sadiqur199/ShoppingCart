// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement

import { Provider } from 'react-redux';
import store from './store';
import './App.css'; // Import Tailwind CSS

import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
