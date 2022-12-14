import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Table, Stack, Badge } from 'react-bootstrap';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketSlice';
import './Rockets.css';

const SingleRocket = ({ allrocekts }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Stack className="p-3">
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Rockets</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {
        allrocekts.map((rocket) => (

          <tr key={rocket.id}>
            <td className="col-3"><img className="rocket-image inline-block col-12" src={rocket.flickrImages} alt={rocket.rocket_name} /></td>
            <td className="fw-bold">{rocket.name}</td>
            <td>{rocket.description}</td>
            <td className="align-middle">
              <Badge bg={rocket.reserved ? 'secondary' : ''}>
                {rocket.reserved ? <span className="rocket-unavailable">RESERVED</span> : ' ' }
              </Badge>
            </td>
            <td className="align-middle">
              {rocket.reserved === false ? (
                <button
                  className="btn-reserve-rocket"
                  onClick={() => dispatch(reserveRocket(rocket.id))}
                  id={rocket.id}
                  type="submit"
                >
                  RESERVE DRAGON
                </button>
              ) : (
                <button
                  className="btn-cancel-reservation"
                  onClick={() => dispatch(cancelRocket(rocket.id))}
                  id={rocket.id}
                  type="submit"
                >
                  CANCEL DRAGON
                </button>
              )}
            </td>
          </tr>
        ))
        }
          </tbody>

        </Table>
      </Stack>

    </div>
  );
};

SingleRocket.defaultProps = {
  allrocekts: { id: 0, name: '' },
};

SingleRocket.propTypes = {
  allrocekts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      },
    ),
  ),
};

export default SingleRocket;
