import TestUser from '../schemas/test_user';

// crud operations for test_user:

const createTestUser = () => {
  TestUser.create({
    name: 'foo',
    message: 'bazinga',
    countersign: 'bar',
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

export default {
  createTestUser,
};
