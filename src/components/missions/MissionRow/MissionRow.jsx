import React from 'react';
import { PropTypes } from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinTo, unJoinTo } from '../../../redux/missions/missions';
import { NOT_A_MEMBER, IS_A_MEMBER } from '../../../redux/missions/missionsApi';

const MissionRow = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    id,
    name,
    description,
    status,
  } = mission;

  const joinHandler = () => {
    if (status === NOT_A_MEMBER) {
      dispatch(joinTo(id));
    } else if (status === IS_A_MEMBER) {
      dispatch(unJoinTo(id));
    }
  };

  return (
    <tr key={id}>
      <td className="fw-bold">{name}</td>
      <td>{description}</td>
      <td className="align-middle">
        <Badge
          bg={status === NOT_A_MEMBER ? 'secondary' : 'primary'}
        >
          {status}
        </Badge>
      </td>
      <td className="align-middle">
        <Button
          onClick={joinHandler}
          variant={status === NOT_A_MEMBER ? 'primary' : 'outline-danger'}
        >
          {status === NOT_A_MEMBER ? 'Join Mission' : 'Leave Mission'}
        </Button>
      </td>
    </tr>
  );
};

export default MissionRow;

MissionRow.defaultProps = {
  mission: {
    id: 'default',
    name: '',
    description: '',
    status: '',
  },
};

MissionRow.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
};
