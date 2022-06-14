import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen bg-neutral-800 flex items-center justify-center">
      <div className="text-center">
        <p className="text-white text-3xl font-[raleway] font-semibold">Erro 404</p>
        <Link to="/"><p className="text-white font-[raleway]">Voltar para início</p></Link>
      </div>
    </div>
  );
}

export default NotFound;
