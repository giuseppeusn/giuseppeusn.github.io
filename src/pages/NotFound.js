import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-white text-3xl font-semibold">Erro 404</p>
        <Link to="/"><p className="text-white">Voltar para início</p></Link>
      </div>
    </div>
  );
}

export default NotFound;
