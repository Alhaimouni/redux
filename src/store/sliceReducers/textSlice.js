import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: 'ts',
  initialState: { name: 'ali', text: 'no text' },
  reducers: {
    hello: (state, action) => {
      state.text = 'hello'
      return state;
    },
    meow: (state, action) => {
      state.text = 'meow';
      return state;
    }
  }
})

export const { hello, meow } = textSlice.actions;
export default textSlice.reducer;
