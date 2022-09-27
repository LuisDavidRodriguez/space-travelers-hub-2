import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from '../MyProfile/MyProfile';
import Missions from '../Missions/Missions';
import Rockets from '../Rockets/Rockets';
import NavBar from '../Navbar/NavBar';
import './App.css';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Missions" element={<Missions />} />
    </Routes>
  </BrowserRouter>
);

export default App;