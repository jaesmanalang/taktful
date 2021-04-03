import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/auth/authContext';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
