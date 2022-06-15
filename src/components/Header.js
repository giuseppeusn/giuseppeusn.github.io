import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <nav className="flex justify-center bg-black p-5">
      <ul className="flex justify-around w-96 text-xl text-white">
        <Link to="/">
          <li className="uppercase font-semibold hover:text-cyan-500 transition-all duration-300">Sobre Mim</li>
        </Link>
        <Link to="/portfolio">
          <li className="uppercase font-semibold hover:text-cyan-500 transition-all duration-300">Portfolio</li>
        </Link>
        <Link to="/contato">
          <li className="uppercase font-semibold hover:text-cyan-500 transition-all duration-300">Contato</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
