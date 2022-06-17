import React from 'react';
import './Title.css';

const Title = ({ title }) => {
  return (
    <div className="flex justify-center mt-20">
      <div className="title">
        <h1 className="text-3xl border-b-2 p-3 text-white font-semibold uppercase">
          <span className="text-cyan-500 text-3xl font-semibold">{'<'}</span>
            {title}
          <span className="text-cyan-500 text-2xl font-semibold">/</span>
          <span className="text-cyan-500 text-3xl font-semibold">{'>'}</span>
        </h1>
      </div>
    </div>
  )
}

export default Title;
