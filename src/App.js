import React from "react";
// import './App.css'; unused now - moved file to assets folder.
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import FiveYrPlan from "./components/FiveYrPlan";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <FiveYrPlan></FiveYrPlan>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
