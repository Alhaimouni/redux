
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../store/sliceReducers/counterSlice';
import textSlice from './sliceReducers/textSlice';



const store = configureStore({
  reducer: {
    counterSlice,
    textSlice
  }
})




export default store;