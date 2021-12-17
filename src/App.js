import React, { useState } from "react";
// import './App.css'; unused now - moved file to assets folder.
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import FiveYrPlan from "./components/FiveYrPlan";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [fiveSelected, setFiveSelected] = useState(false);

  //Should I use category selected?
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        fiveSelected={fiveSelected}
        setFiveSelected={setFiveSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <FiveYrPlan></FiveYrPlan>
          </>
        ) : (
          <Contact></Contact>
        )}
        ,
        {!portfolioSelected ? (
          <>
            <About></About>
            <Contact></Contact>
            <Resume></Resume>
            <FiveYrPlan></FiveYrPlan>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
        ,
        {!resumeSelected ? (
          <>
            <About></About>
            <Contact></Contact>
            <Portfolio></Portfolio>
            <FiveYrPlan></FiveYrPlan>
          </>
        ) : (
          <Resume></Resume>
        )},
        {!fiveSelected ? (
          <>
            <About></About>
            <Contact></Contact>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <FiveYrPlan></FiveYrPlan>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
