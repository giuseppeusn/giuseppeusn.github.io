import React, { useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function AboutMe() {
  const { ref } = useContext(AppContext);

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div className="flex justify-center items-center text-3xl text-white h-screen bg-neutral-800">
        Sobre mim
      </div>
    </div>
  );
}

export default AboutMe;
