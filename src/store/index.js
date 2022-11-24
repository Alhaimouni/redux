import { createStore, combineReducers } from 'redux';
import { addListener, configureStore } from '@reduxjs/toolkit';
// import counterReducer from './reducers/counterReducer';
import textReducer from './reducers/textReducer';
import counterSlice from '../store/sliceReducers/counterSlice';


// const allReducers = combineReducers({ counterSlice });

// const store = createStore(allReducers,reduxDevTool(thunk));

const store = configureStore({
  reducer: {
    counterSlice,

  }
})




export default store;