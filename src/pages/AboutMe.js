import React, { useContext } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import AppContext from '../context/AppContext';

function AboutMe() {
  const { ref } = useContext(AppContext);

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div className="h-screen bg-neutral-800">
        <div className="flex justify-center">
          <Title title="sobre mim" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
