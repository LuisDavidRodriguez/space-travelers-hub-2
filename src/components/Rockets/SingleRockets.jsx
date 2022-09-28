import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketSlice';

import './Rockets.css';

const SingleRocket = ({ allrocekts }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        allrocekts.map((rocket) => (
          <div key={rocket.id} className="rocket-card">
            <div className="rocket-card-header">
              <h3>{rocket.rocket_name}</h3>
              <img className="rocket-image" src={rocket.flickrImages} alt={rocket.rocket_name} />
            </div>
            <div className="rocket-card-body">
              {rocket.reserved ? <span className="rocket-unavailable">RESERVED</span> : ' '}
              <p>{rocket.description}</p>
            </div>

            <div>
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
            </div>

          </div>
        ))
        }
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
