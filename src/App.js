import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar/AnnouncementBar';
import NavBar from './NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';
import LogoCloud from './LogoCloud/LogoCloud';
import Feature1 from './Feature1/Feature1';
import Feature2 from './Feature2/Feature2';
import Component1 from './Component1/Component1';
import Testimonials from './Testimonials/Testimonials';
import CalltoAction from './CalltoAction/CalltoAction';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <AnnouncementBar/>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <NavBar />
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <HeroSection />
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <LogoCloud/>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Feature1/>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Feature2/>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Component1 />
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Testimonials/>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <CalltoAction />
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Footer />
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </Router>
  );
}

export default App;
