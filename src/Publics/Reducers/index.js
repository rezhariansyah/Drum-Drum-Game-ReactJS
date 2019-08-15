import { combineReducers } from 'redux';

// import all reducers
import Book from './Book';
import Borrow from './Borrow';
import User from './user';
import Login from './login';
import Page from "./pagination";

const appReducer = combineReducers({
  User
});

export default appReducer;