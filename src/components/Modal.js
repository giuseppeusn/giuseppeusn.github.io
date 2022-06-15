import React, { useContext }  from 'react';
import TrybewalletThumb from '../images/trybewallet-1.png';
import { AiFillGithub } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import AppContext from '../context/AppContext';
import './Modal.css';

function Modal() {
  const { setModal } = useContext(AppContext);

  return (
    <div className="modal-bg" id="bg" onClick={ (e) => e.target.id === 'bg' && setModal(false)}>
      <div className="modal-wrapper">
        <img src={ TrybewalletThumb } alt="img" className="h-full rounded-l-lg" />
        <div className="flex flex-col w-full h-full">
          <button onClick={ () => setModal(false) } className="self-end text-3xl p-2">
            <CgClose />
          </button>
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-4/5 min-h-[80%] flex flex-col">
              <div className="border-b border-neutral-700 p-3 mb-10">
                <p className="text-3xl">Trybewallet</p>
                <p className="uppercase text-sm">Carteira de controle de gastos</p>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
            <div className="flex p-5 w-80 justify-around">
              <button
                className="bg-neutral-600 p-3 rounded flex items-center justify-around w-36 hover:bg-neutral-800"
              >
                <AiFillGithub />
                Repositório
              </button>
              <a
                className="bg-cyan-500 p-3 rounded flex items-center justify-around w-32 hover:bg-cyan-700"
                href="/trybewallet" target="_blank"
              >
                <BsBoxArrowUpRight />
                Deploy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;


