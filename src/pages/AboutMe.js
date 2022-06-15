import React, { useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function AboutMe() {
  const { ref } = useContext(AppContext);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center text-3xl text-white h-screen bg-neutral-800">
        Sobre mim
      </div>
      <p ref={ref}></p>
    </div>
  );
}

export default AboutMe;
