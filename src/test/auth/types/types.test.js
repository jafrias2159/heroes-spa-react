import { types } from '../../../auth/types/types';

describe('Test types', () => {
  test('should have a a defined set of itens', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
