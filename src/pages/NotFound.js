import React from 'react';
import { Link } from 'react-router-dom';
import { TbError404 } from 'react-icons/tb';

function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <TbError404 className="text-white text-[300px]" />
        <p className="text-white text-md font-semibold">Ops! Parece que não há nada por aqui...</p>
        <Link to="/"><p className="text-white mt-8 text-cyan-500">Voltar para início</p></Link>
      </div>
    </div>
  );
}

export default NotFound;
