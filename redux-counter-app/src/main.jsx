// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Correct import for React 18+
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// 👇 Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
