import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import RocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: RocketReducer,
  },
});

export default store;
