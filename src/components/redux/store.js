import { configureStore, combineReducers } from '@reduxjs/toolkit';
import RocketReducer from './rockets/rocketSlice';

const reducer = combineReducers({
  rockets: RocketReducer,
});

const store = configureStore({ reducer });

export default store;
