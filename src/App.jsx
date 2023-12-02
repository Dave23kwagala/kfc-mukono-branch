import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import MenuDisplay from './components/MenuDisplay';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
