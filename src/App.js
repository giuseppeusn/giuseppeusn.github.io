import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import NotFound from './pages/NotFound';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="bg-neutral-800 select-none scroll-smooth">
      <Welcome />
      <Routes>
        <Route exact path="/" element={ <AboutMe /> } />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/contato" element={ <Contact />} />
        <Route path="/trybewallet" render={() => {window.location.href="trybewallet"}} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>      
    </div>
  );
}

export default App;
