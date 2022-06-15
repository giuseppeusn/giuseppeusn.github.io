import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import NotFound from './pages/NotFound';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="h-screen bg-neutral-800 select-none scroll-smooth">
      <Routes>
        <Route exact path="/" element={ <AboutMe /> } />
        <Route exact path="/portfolio" element={ <Portfolio />} />
        <Route exact path="/contato" element={ <Contact />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>      
    </div>
  );
}

export default App;
