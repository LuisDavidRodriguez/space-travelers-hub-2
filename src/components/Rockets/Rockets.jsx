import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';

import './Rockets.css';

const Rockets = () => {

  const allRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allRockets.length) {
      dispatch(getRockets());
    }
  }, [allRockets.length]);
  console.log(allRockets);

  return (
    <Fragment>
    <div>Rockets List</div>
    <div> {
      
      allRockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          <hr/>
          <div>{rocket.description}</div>
          <div>{rocket.flickrImages}</div>
          <img className="rocket-image" src={rocket.flickrImages} alt="dragon-pic" />
        </div>
      ))

    }
    
    </div>
    </Fragment>
  );
}
 

export default Rockets;
