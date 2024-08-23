// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Get the root element where React will render your app
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component
  root.render(
    <React.StrictMode>
       <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}