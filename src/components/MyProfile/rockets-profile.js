// rockets-profile.js
import React from 'react';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const rockets = useSelector((store) => store.rockets);
  const newRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <h2>My Rockets</h2>
      <table className="pf-table">
        <tbody className="pf-item-list">
          {newRockets.map((rocket) => <tr key={rocket.id}><td>{rocket.name}</td></tr>) }
        </tbody>
      </table>
    </div>
  );
};

export default RocketsProfile;
