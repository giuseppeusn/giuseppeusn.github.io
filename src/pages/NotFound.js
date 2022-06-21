import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbError404 } from 'react-icons/tb';
import AppContext from '../context/AppContext';

function NotFound() {
  const { setIs404 } = useContext(AppContext);

  useEffect(() => {
    setIs404(true);
  }, [setIs404]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <TbError404 className="text-white text-[300px]" />
        <p className="text-white text-md font-semibold">Ops! Parece que não há nada por aqui...</p>
        <Link to="/"><p className="text-white mt-8 text-cyan-500" onClick={ () => setIs404(false) }>Voltar para início</p></Link>
      </div>
    </div>
  );
}

export default NotFound;
