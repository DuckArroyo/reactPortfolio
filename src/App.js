import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css'; unused now - moved file to assets folder.
import Nav from './components/Nav';
import Home from './components/About';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import FiveYrPlan from './components/FiveYrPlan';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App' style={{ height: '100vh' }}>
      <Nav />
      <div id='container'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/fiveyear' element={<FiveYrPlan />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
