import React from 'react';
import { Mission } from '../mission.model';

type MissionsProps = {
  missions: Mission[];
  errors: string;
};

const Missions = ({ missions, errors }: MissionsProps) => {
  return (
    <>
      {errors ? (
        <div>{errors}</div>
      ) : (
        missions.map((mission, id) => (
          <div key={id}>
            <h1>{mission.mission_name}</h1>

            <p>{mission.description}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Missions;
