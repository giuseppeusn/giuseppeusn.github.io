import React from "react";
import './App.css';
import { Route, Routes, useLocation } from "react-router";
import NotFound from './pages/NotFound';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="bg-neutral-900 select-none scroll-smooth">
      <Welcome />
      { pathname !== '/contato' && <SocialMedia /> }
      <Routes>
        <Route exact path="/" element={ <AboutMe /> } />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/contato" element={ <Contact />} />
        <Route path="/trybewallet" render={() => {window.location.href="trybewallet"}} />
        <Route path="/shopping-cart" render={() => {window.location.href="shopping-cart"}} />
        <Route path="/tryunfo" render={() => {window.location.href="tryunfo"}} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
