import React, { useContext } from "react";
import './App.css';
import { Route, Routes, useLocation } from "react-router";
import NotFound from './pages/NotFound';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import AppContext from "./context/AppContext";

function App() {
  const { pathname } = useLocation();
  const { is404 } = useContext(AppContext);

  return (
    <div className="bg-neutral-900 select-none scroll-smooth">
      { !is404 && <Welcome /> }
      { pathname !== '/contact' && <SocialMedia /> }
      <Routes>
        <Route exact path="/" element={ <AboutMe /> } />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/trybewallet" render={() => {window.location.href="trybewallet"}} />
        <Route path="/shopping-cart" render={() => {window.location.href="shopping-cart"}} />
        <Route path="/tryunfo" render={() => {window.location.href="tryunfo"}} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>      
      { !is404 &&  <Footer /> }
    </div>
  );
}

export default App;
