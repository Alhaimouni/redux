const initialState = {
  counter: 0
};



export default function counterReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'inc':
      return ({ counter: ++state.counter });
    case 'dec':
      return ({ counter: --state.counter });
    default:
      return state;
  }
};


