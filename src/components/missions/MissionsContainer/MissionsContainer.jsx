import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Table, Stack } from 'react-bootstrap';
import getMissions from '../../../redux/missions/missionsApi';
import MissionRow from '../MissionRow/MissionRow';

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

  let rows = [];
  if (missions !== 'loading') {
    rows = missions.map((mission) => <MissionRow key={mission.id} mission={mission} />);
  }

  return (
    <Stack className="p-3">
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </Stack>
  );
};

export default Missions;
