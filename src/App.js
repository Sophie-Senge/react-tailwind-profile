import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import "./fonts/Road_Rage.otf";
import Footer from './components/Footer.jsx';
// import Contact from './components/Contact.js'



function App() {
  return (
    <Router basename='react-tailwind-profile'>


      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resume' element={<Resume />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;

