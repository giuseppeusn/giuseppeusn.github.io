import React, { useState }  from 'react';
import TrybewalletThumb from '../images/trybewallet-thumb.png';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <div className="fixed w-1/2 top-1/2 left-1/2 mt-[-100px] ml-[-500px] bg-black transtion-all delay-500">
      <div className="flex flex-col h-full">
        <img src={ TrybewalletThumb } alt="trybewallet project" className="h-32 object-cover" />
        <div className="flex flex-col p-5">
          <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="flex justify-between mt-10 text-white">
            <div className="flex justify-between w-72">
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
            <button onClick={ () => setModal(false) } className="text-3xl">
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
