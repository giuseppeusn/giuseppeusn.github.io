import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

function Portfolio() {
  return (
    <div>
      <Welcome />
      <Header />
      <div className="flex justify-center items-center text-3xl text-white h-screen bg-neutral-800">
        Portfolio
      </div>
    </div>
  );
}

export default Portfolio;
