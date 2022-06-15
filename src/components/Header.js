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
    <div className="fixed">
      <nav className="flex justify-center bg-black opacity-90 border-b-2 border-cyan-500 p-5">
        <ul className="flex justify-around w-[700px] text-xl text-white">
          <li className={ active.about ? 'active' : ''}>
            <Link to="/">
              Sobre mim
            </Link>
          </li>
          <li className={ active.port ? 'active' : ''}>
            <Link to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className={ active.contact ? 'active' : ''}>
            <Link to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
