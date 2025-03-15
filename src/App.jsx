import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavDiv from './components/NavDiv'
import Landing from './pages/Landing.jsx'
import Earth from './pages/Earth.jsx'
import SolarSystem from './pages/SolarSystem.jsx'
import Mars from './pages/Mars.jsx'
import Media from './pages/Media.jsx'
import Apod from './pages/Apod.jsx'
import Page from './components/page.jsx'
import './styles/mobile.css'
import 'lord-icon-element'

function App() {
  return (
    <>
      <Router>
        <NavDiv />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/earth' element={<Earth />} />
          <Route path='/solarSystem' element={<SolarSystem />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/media' element={<Media />} />
          <Route path='/apod' element={<Apod />} />
          <Route path='/detailsPage' element={<Page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
