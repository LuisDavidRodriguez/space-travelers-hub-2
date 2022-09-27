import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';

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
    <div>Rockets</div>
    <div>dragons display here</div>
    </Fragment>
  );
}
 

export default Rockets;
