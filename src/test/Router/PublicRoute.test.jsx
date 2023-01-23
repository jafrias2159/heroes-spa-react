import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authContext';
import { PublicRoute } from '../../Router/PublicRoute';

describe('Testing public route', () => {
  test('should show children if user is not authenticated', () => {
    const authState = { logged: false };

    render(
      <AuthContext.Provider value={{ authState }}>
        <PublicRoute>
          <h1>Simple h1</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    //screen.debug();
    const element = screen.getByText('Simple h1');

    expect(element).toBeTruthy();
  });

  test('should navigate if user is authenticated', () => {
    const authState = { logged: true };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <h1>Simple h1</h1>
                </PublicRoute>
              }
            />
            <Route path='/marvel' element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
   
    const element = screen.getByText('Marvel Page');

    expect(element).toBeTruthy();
  });
});
