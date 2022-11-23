
import { combineReducers, createStore } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { authReducer } from '../reducers/authReducer';

const allReducers = combineReducers({ counterReducer, authReducer });



function store() {
  return createStore(allReducers);
};


export default store();