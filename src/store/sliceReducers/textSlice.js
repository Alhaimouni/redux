import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: 'textSlice',
  initialState: { name: 'ali', text: 'no text' },
  reducers: {
    hello: (state, action) => {
      state.text = 'hello'
      console.log({ ...state });
      return state;
    },
    meow: (state, action) => {
      state.text = 'meow';
      console.log({ ...state });
      return state;
    }
  }
})

export const { hello, meow } = textSlice.actions;
export default textSlice.reducer;
