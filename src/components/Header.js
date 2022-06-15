import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [active, setActive] = useState({
    about: false,
    port: false,
    contact: false,
  })

  useEffect(() => {
    const path = location.pathname.split('/')[1];

    switch(path) {
      case 'portfolio':
        setActive({port: true, contact: false, about: false });
        break;
      case 'contato':
        setActive({port: false, contact: true, about: false });
        break;
      default:
        setActive({port: false, contact: false, about: true });
        break;
    }
  }, [location])

  return(
    <nav className="flex justify-center bg-black p-5">
      <ul className="flex justify-around w-96 text-xl text-white">
        <Link to="/">
          <li className={ active.about ? 'active' : ''}>Sobre Mim</li>
        </Link>
        <Link to="/portfolio">
          <li className={ active.port ? 'active' : ''}>Portfolio</li>
        </Link>
        <Link to="/contato">
          <li className={ active.contact ? 'active' : ''}>Contato</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
