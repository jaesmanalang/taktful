import React, { createContext, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import authReducer from './authReducer';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async data => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' });
      const res = await axios.post('/api/v1/users/login', data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: 'LOGIN_FAILED', payload: error.response.data });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
