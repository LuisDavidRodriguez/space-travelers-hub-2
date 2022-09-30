import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListGroup,
  Stack,
  Alert,
  Button,
} from 'react-bootstrap';
import { IS_A_MEMBER } from '../../../redux/missions/missionsApi';
import { unJoinTo } from '../../../redux/missions/missions';

const MyMissions = () => {
  const joinedMissions = useSelector(
    ({ missions }) => missions.filter(({ status }) => status === IS_A_MEMBER),
  );

  let items = [];
  if (joinedMissions.length > 0) {
    items = joinedMissions.map(({ name, id, wikipedia }) => (
      <MissionItem
        key={id}
        name={name}
        id={id}
        wikipedia={wikipedia}
      />
    ));
  }

  return (
    <Stack className="col-xs-10 col-sm-6">
      <h3 className="align-self-center">My Missions</h3>
      <ListGroup className="container">
        {items.length > 0 ? items : <Alert variant="warning">Please Join to missions to see data</Alert>}
      </ListGroup>
    </Stack>
  );
};

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const { name, id, wikipedia } = props;

  return (
    <ListGroup.Item className="row d-flex justify-content-evenly">
      <p className="text-center col-12 col-sm-6 col-md-3">{name}</p>

      <Button
        variant="outline-danger"
        className="col-6 col-sm-6 col-md-3"
        onClick={() => dispatch(unJoinTo(id))}
      >
        Leave Mission
      </Button>

      <a
        className="link-info d-block text-center col-12 col-sm-12 col-md-3"
        href={wikipedia}
        target="_blank"
        rel="noreferrer"
      >
        See details
      </a>
    </ListGroup.Item>
  );
};

MissionItem.defaultProps = {
  name: '',
  id: '',
  wikipedia: '',
};

MissionItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  wikipedia: PropTypes.string,
};

export default MyMissions;
