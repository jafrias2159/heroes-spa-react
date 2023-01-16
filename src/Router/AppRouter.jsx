import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from '../auth/Pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
