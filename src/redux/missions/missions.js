import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from './missionsApi';
/* eslint-disable prefer-template */

const slice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export default slice.reducer;
