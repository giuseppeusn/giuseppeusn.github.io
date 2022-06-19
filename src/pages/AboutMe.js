import React, { useContext, useRef } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import AppContext from '../context/AppContext';
import useOnScreen from '../hook/useOnScreen';

function AboutMe() {
  const { ref, content } = useContext(AppContext);

  // const content = useRef(null);
  const contentVisible = useOnScreen(content);

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div ref={content} className="h-screen bg-neutral-800 mt-[1px]">
      {  
        contentVisible &&
        <div className="flex justify-center">
          <Title title="sobre mim" />
        </div>
      }      
      </div>
    </div>
  );
}

export default AboutMe;
