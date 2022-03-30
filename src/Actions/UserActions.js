const createUser = (obj) => {
  return {
    type: 'CREATE',
    payload: obj,
  };
};

const updateUser = (obj) => {
  return {
    type: 'UPDATE',
    payload: obj,
  };
};

export default {
  createUser,
  updateUser,
};
