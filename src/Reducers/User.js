const User = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, { id: state.length, ...action.payload }];
    case 'UPDATE':
      return [...action.payload];
    default:
      return state;
  }
};

export default User;
