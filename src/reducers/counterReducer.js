import { useReducer } from "react";

export const initialState = {
  counter: 0,
}


export function counterReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'inc':
      return { ...state, counter: state.counter + payload };
    case 'dec':
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};


// state : the state when we called the reducer.
// action : what we send when we dispatch the reducer.
// complex state managment center 