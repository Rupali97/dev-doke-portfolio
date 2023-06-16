import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopButton from "./components/topButton/TopButton";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
