import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authContext';
import { PrivateRoute } from '../../Router/PrivateRoute';

describe('Testing private route', () => {
  test('should show children if user is authenticated', () => {
    const authState = { logged: true };
    const querySearch = '/search?q=Batman';
    Storage.prototype.setItem = jest.fn();
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={[querySearch]}>
          <PrivateRoute>
            <h1>Simple h1</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //screen.debug();

    const element = screen.getByText('Simple h1');

    expect(element).toBeTruthy();
    expect(Storage.prototype.setItem).toHaveBeenCalledWith("lastPage", querySearch)
  });
});
