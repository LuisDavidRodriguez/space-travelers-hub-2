import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

const missionsFetched = createAction('missionFetched');
/* eslint-disable arrow-body-style */
const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const NOT_A_MEMBER = 'NOT A MEMBER';
const IS_A_MEMBER = 'ACTIVE MEMBER';

const fetchMissions = createAsyncThunk(missionsFetched, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  // extract just the needed values
  const less = data.map(({
    mission_name: name,
    description,
    mission_id: id,
  }) => ({
    name,
    description,
    id,
    status: NOT_A_MEMBER,
  }));

  return less;
});

export { NOT_A_MEMBER, IS_A_MEMBER, missionsFetched };
export default fetchMissions;
