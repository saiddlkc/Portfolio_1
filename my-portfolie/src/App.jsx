import "./App.css";
import React from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
