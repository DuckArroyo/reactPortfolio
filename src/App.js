import React from 'react';
// import './App.css'; unused now - moved file to assets folder.
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Gallery></Gallery>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
