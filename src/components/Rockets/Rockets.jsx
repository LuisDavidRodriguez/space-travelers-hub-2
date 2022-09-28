import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rocketSlice';
import SingleRocket from '../Rockets/SingleRockets';

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
    <>
      <div>Rockets List</div>
      <div className="rockets-container">
      {
      allRockets.length ? <SingleRocket allrocekts={allRockets} /> : <div>No Rockets Found</div>
      }
    </div>
    </>
  );
};
export default Rockets;
