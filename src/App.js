import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="h-screen bg-neutral-800 select-none">
      <Routes>
        <Route exact path="/" element={ <Welcome />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>      
    </div>
  );
}

export default App;
