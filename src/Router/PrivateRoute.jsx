import { useContext, useEffect, useMemo } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../auth/context/authContext';

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPage = useMemo(() => pathname + search, [pathname + search]);

  useEffect(() => {
    localStorage.setItem('lastPage', lastPage);
  }, [lastPage]);

  return authState.logged ? children : <Navigate to='/login' />;
};
