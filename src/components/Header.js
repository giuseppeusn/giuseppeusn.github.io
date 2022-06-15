import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className="flex justify-end">
      <ul className="flex justify-around w-96 text-xl text-white">
        <Link to="">
          <li className="uppercase font-semibold">Sobre Mim</li>
        </Link>
        <Link to="">
          <li className="uppercase font-semibold">Portfolio</li>
        </Link>
        <Link to="">
          <li className="uppercase font-semibold">Contato</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
