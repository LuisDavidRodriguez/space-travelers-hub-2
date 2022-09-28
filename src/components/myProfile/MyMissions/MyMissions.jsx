import React from 'react';
import { ListGroup, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IS_A_MEMBER } from '../../../redux/missions/missionsApi';

const MyMissions = () => {
  const joinedMissions = useSelector(
    ({ missions }) => missions.filter(({ status }) => status === IS_A_MEMBER),
  );

  let items = [];
  if (joinedMissions.length > 0) {
    items = joinedMissions.map(
      ({ name, id }) => <ListGroup.Item key={id}>{name}</ListGroup.Item>,
    );
  }

  return (
    <Stack>
      <h3>My Missions</h3>
      <ListGroup>
        {items}
      </ListGroup>
    </Stack>
  );
};

export default MyMissions;
