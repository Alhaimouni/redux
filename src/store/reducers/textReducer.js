const initialState = '';


export default function textReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'chName':
      return payload
    default:
      return state;
  }
}



