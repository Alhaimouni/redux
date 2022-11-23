export const initialState = {
  isAuth: true,
  userName: '',
  email: ''
}


export function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'login':
      return { userName: 'fawzi', email: 'meowwww@gmail.com', isAuth: true };
    case 'logout':
      return { userName: '', email: '', isAuth: false };
    default:
      return state;
  }
};
