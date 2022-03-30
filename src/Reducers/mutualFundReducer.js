const mutualFundReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};

export default mutualFundReducer;
