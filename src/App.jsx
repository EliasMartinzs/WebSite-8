import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import WhatsIcon from './Icons/WhatsIcon.png';
import InstaIcon from './Icons/instaIcon.svg';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <a
        href="https://api.whatsapp.com/send/?phone=5543991622448&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <img src={WhatsIcon} className="dial" />
      </a>
    </Box>
  );
};

export default App;
