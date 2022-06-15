import React, { useContext, useEffect, useState }  from 'react';
import TrybewalletThumb from '../images/trybewallet-1.png';
import { AiFillGithub } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import AppContext from '../context/AppContext';
import './Modal.css';
import projects from '../projectData';

function Modal({ id }) {
  const { setModal } = useContext(AppContext);
  const [modalInfo, setModalInfo] = useState();

  useEffect(() => {
    const modal = projects.find((e) => e.id === id);
    setModalInfo(modal);
  },[]);

  return (
    <div>
      {
        modalInfo &&
        <div className="modal-bg" id="bg" onClick={ (e) => e.target.id === 'bg' && setModal(false)}>
          <div className="modal-wrapper">
            <img src={modalInfo.images[0].url} alt={modalInfo.images[0].url} className="w-[70%] rounded-l-lg" />
            <div className="flex flex-col w-full h-full">
              <button onClick={ () => setModal(false) } className="self-end text-3xl p-2">
                <CgClose />
              </button>
              <div className="flex flex-col items-center justify-between h-full">
                <div className="w-4/5 min-h-[80%] flex flex-col">
                  <div className="border-b border-neutral-700 p-3 mb-10">
                    <p className="font-semibold text-3xl">{modalInfo.name}</p>
                    <p className="uppercase text-sm">{modalInfo.shortDescription}</p>
                  </div>
                  <p>{modalInfo.description}</p>
                </div>
                <div className="flex p-5 w-80 justify-around">
                  <a
                    className="bg-neutral-600 p-3 rounded flex items-center justify-around w-36 hover:bg-neutral-800"
                    href={modalInfo.repoUrl}
                    target="_blank"
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                    Repositório
                  </a>
                  <a
                    className="bg-cyan-500 p-3 rounded flex items-center justify-around w-32 hover:bg-cyan-700"
                    href={modalInfo.deployUrl}
                    target="_blank"
                    rel='noreferrer'
                  >
                    <BsBoxArrowUpRight />
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Modal;


