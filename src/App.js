import React, { useState } from "react";
// import './App.css'; unused now - moved file to assets folder.
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    { name: "portfolio", description: "My works description" },
    { name: "contact", description: "Contact component" },
    { name: "resume", description: "Qualifications list" },
    { name: "5 Year Plan", description: "The next 5 years" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
        <Gallery></Gallery>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
