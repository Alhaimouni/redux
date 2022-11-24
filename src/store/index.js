import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import textReducer from './reducers/textReducer';



const allReducers = combineReducers({ counterReducer, textReducer });

function store() {
  return createStore(allReducers);
}




export default store;