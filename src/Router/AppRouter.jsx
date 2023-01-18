import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from '../auth/Pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
      <Routes>
        <Route
          path='login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <HeroesRoutes></HeroesRoutes>
            </PrivateRoute>
          }
        />
      </Routes>
  );
};

export default AppRouter;
