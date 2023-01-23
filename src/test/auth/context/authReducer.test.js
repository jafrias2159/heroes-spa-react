import { authReducer } from '../../../auth/context/authReducer';
import { types } from '../../../auth/types/types';

describe('Testing authReducer', () => {
  const initialState = {
    logged: false,
    user: {
      name: 'Jorge Frias',
    },
  };
  test('should return the default state', () => {
    const newState = authReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('should set the user on login', () => {
    const newState = authReducer(initialState, {
      type: types.login,
      payload: initialState.user,
    });

    expect(newState).toEqual(
      expect.objectContaining({
        logged: true,
        user: initialState.user,
      })
    );
  });

  test('should remove the user and looged = false on logout', () => {
    const newState = authReducer(initialState, {
      type: types.logout,
    });

    expect(newState).toEqual(
      expect.objectContaining({
        logged: false,
      })
    );
  });
});
