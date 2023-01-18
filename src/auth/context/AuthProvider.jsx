import React, { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, null, init);

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        name,
        id: 'ABC',
      },
    };
    localStorage.setItem('user', JSON.stringify(action.payload));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
