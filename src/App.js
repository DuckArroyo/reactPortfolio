import React, { useState } from "react";
// import './App.css'; unused now - moved file to assets folder.
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
