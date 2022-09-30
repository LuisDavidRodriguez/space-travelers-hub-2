import { createSlice } from '@reduxjs/toolkit';
import fetchMissions, { IS_A_MEMBER, NOT_A_MEMBER } from './missionsApi';
/* eslint-disable prefer-template */

const helper = (state, action, s = IS_A_MEMBER) => state.map((mission) => {
  if (mission.id === action.payload) {
    return { ...mission, status: s };
  }
  return { ...mission };
});

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinTo(state, action) {
      return helper(state, action);
    },
    unJoinTo(state, action) {
      return helper(state, action, NOT_A_MEMBER);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchMissions.pending, () => 'loading');
  },
});

const { joinTo, unJoinTo } = slice.actions;
export { joinTo, unJoinTo };
export default slice.reducer;
