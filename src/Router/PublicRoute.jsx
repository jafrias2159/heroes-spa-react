import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/authContext';

export const PublicRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? <Navigate to='/marvel' /> : children;
};
