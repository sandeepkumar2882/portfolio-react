import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/home/Home';
import ToggleTheme from './components/toggletheme/Toggletheme';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
        <ToggleTheme />
        <Topbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
