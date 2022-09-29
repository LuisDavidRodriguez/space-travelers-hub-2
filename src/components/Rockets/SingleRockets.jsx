import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketSlice';
import { Table, Stack } from 'react-bootstrap';
import { Badge, Button } from 'react-bootstrap';

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
            <td className="fw-bold"><img className="rocket-image" src={rocket.flickrImages} alt={rocket.rocket_name} /></td>
            <td className="fw-bold">{rocket.name}</td>
            <td>{rocket.description}</td>
            <td className="align-middle">
              <Badge bg={rocket.reserved ? 'secondary' : ''} > 
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

          

          // <div key={rocket.id} className="rocket-card">
          //   <div className="rocket-card-header">
          //     <h3>{rocket.rocket_name}</h3>
          //     <img className="rocket-image" src={rocket.flickrImages} alt={rocket.rocket_name} />
          //   </div>
          //   <div className="rocket-card-body">
          //     {rocket.reserved ? <span className="rocket-unavailable">RESERVED</span> : ' '}
          //     <p>{rocket.description}</p>
          //   </div>

          //   <div>
          //     {rocket.reserved === false ? (
          //       <button
          //         className="btn-reserve-rocket"
          //         onClick={() => dispatch(reserveRocket(rocket.id))}
          //         id={rocket.id}
          //         type="submit"
          //       >
          //         RESERVE DRAGON
          //       </button>
          //     ) : (
          //       <button
          //         className="btn-cancel-reservation"
          //         onClick={() => dispatch(cancelRocket(rocket.id))}
          //         id={rocket.id}
          //         type="submit"
          //       >
          //         CANCEL DRAGON
          //       </button>
          //     )}
          //   </div>

          // </div>
        ))
        }
          </tbody>

</Table>
</Stack>

    </div>
  );
};

SingleRocket.propTypes = {
  allrocekts: PropTypes.shape(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
    ]),
  ).isRequired,
};

export default SingleRocket;
