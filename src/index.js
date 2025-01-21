import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles for the app
import App from './App'; // Main app component
import reportWebVitals from './reportWebVitals'; // Optional: For performance measurement

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the <div id="root"> in public/index.html
);

// Optional: If you want to measure performance in your app
reportWebVitals();
