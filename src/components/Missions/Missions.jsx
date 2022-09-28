import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getMissions from '../../redux/missions/missionsApi';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions, shallowEqual);
  useEffect(() => {
    if (missions.length === 0) {
      // avoid fetch data in every createComponent
      dispatch(getMissions());
    }
  });
  console.log('missions', missions);
  return (
    <div>Missions</div>
  );
};

export default Missions;
