import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from './Components/Button';
import Missions from './Components/Missions';
import { Mission } from './mission.model';

const API = 'https://api.spacexdata.com/v3/missions';

function App() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState('');

  const fetchMissions = () => {
    setIsFetching(true);
    axios
      .get(API)
      .then((res) => {
        setMissions(res.data);
        setIsFetching(false);
      })

      .catch((err) => {
        setErrors(err.message);
        setIsFetching(false);
      });
  };

  return (
    <div className="App">
      <div>Hello World</div>
      <Button fetch={fetchMissions} fetching={isFetching} />
      <Missions missions={missions} errors={errors} />
    </div>
  );
}

export default App;
