import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { counter: 0 },
  reducers: {
    inc: (state, action) => {
      state.counter += 1
    },
    dec: (state, action) => {
      state.counter -= 1;
    },
  }
})

export const { inc, dec } = counterSlice.actions;
export default counterSlice.reducer;