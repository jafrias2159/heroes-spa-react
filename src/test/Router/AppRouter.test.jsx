import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authContext';
import AppRouter from '../../Router/AppRouter';

describe('Testing routes', () => {
  test('Should show login page on authorized user ', () => {
    const authState = {
      logged: false,
      user: {
        name: 'Jorge Frias',
      },
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={{ authState }}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getAllByText('login').length).toEqual(1);
  });

  test('Should show login page on authorized user ', () => {
    const authState = {
      logged: true,
      user: {
        name: 'Jorge Frias',
      },
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={{ authState }}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  });
});
