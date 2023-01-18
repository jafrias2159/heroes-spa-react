import React from 'react';
import { AuthProvider } from './auth/context/AuthProvider';
import AppRouter from './Router/AppRouter';

const HeroesApp = (props) => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
