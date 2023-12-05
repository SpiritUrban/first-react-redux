const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET':
      return { ...state, count: action.payload };
    case 'INCREMENT_BY_AMOUNT':
      return { ...state, count: state.count + action.payload };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;