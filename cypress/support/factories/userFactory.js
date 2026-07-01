export function createUser(overrides = {}) {
  const random = Math.random().toString(36).substring(2, 10);

  const defaultUser = {
    username: `user_${random}`,
    email: `user_${random}@mail.com`,
    password: '123456789'
  };

  return { ...defaultUser, ...overrides };
}