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
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ExperiencePage from "./Pages/ExperiencePage";
import PortfolioPage from "./Pages/PortfolioPage";
import TestiPage from "./Pages/TestiPage";
import Homepage from "./Pages/Homepage";
import CVPage from "./Pages/CVPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ExperiencePage" element={<ExperiencePage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/TestiPage" element={<TestiPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/CVPage" element={<CVPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
