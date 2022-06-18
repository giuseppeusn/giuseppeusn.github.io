import React, { useContext } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import AppContext from '../context/AppContext';

const Footer = () => {
  const { welcomeScrollRef } = useContext(AppContext);

  const executeScroll = () => welcomeScrollRef.current.scrollIntoView();

  return (
    <footer className="flex justify-center items-center bg-[#1e1e1e] h-20 text-white">
      <button
        className="absolute mb-[90px] flex justify-center items-center w-12 h-12 rounded-full bg-cyan-500"
        onClick={executeScroll}
      >
        <IoIosArrowUp className="animate-bounce text-4xl"/>
      </button>
      <p className="uppercase text-sm font-semibold">
        <span className="text-cyan-500">Giuseppe Nunes</span> | <span className="text-lg">2022</span>
      </p>
    </footer>
  );
}

export default Footer;
