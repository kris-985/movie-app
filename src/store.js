import {  configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  
});


const store = configureStore({
  reducer: rootReducer
})

export default store;