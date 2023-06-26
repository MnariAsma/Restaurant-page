import React from 'react';
import './pages/home/sections/style.css';
import './pages/home/sections/navBar.css';
import HomePage from './pages/home/sections/homePage';
import Experts from './components/Experts';
import Contact from './components/Contact';
import Menu from './components/menu';
import Reservation from './pages/reservation/section/Reservation';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Expert" element={<Experts />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
