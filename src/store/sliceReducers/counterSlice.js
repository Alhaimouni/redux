import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
  name: 'meowww',
  initialState: { counter: 0 },
  reducers: {
    inc: (state, action) => {
      console.log(action.payload, action.type)
      state.counter += 1
    },
    dec: (state, action) => {
      state.counter -= 1;
    },
  }
})

export const { inc, dec } = counterSlice.actions;
export default counterSlice.reducer;