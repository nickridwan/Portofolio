import React from "react";
import "./App.css";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Work/Work";
import Portofolio from "./Component/Portofolio/Portofolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
