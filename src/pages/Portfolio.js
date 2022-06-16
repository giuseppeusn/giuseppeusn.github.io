import React, { useContext, useState }  from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import './ProjectCard.css';
import AppContext from '../context/AppContext';
import projects from '../projectData';

function Portfolio() {
  const { ref, modal, setModal } = useContext(AppContext);
  const [modalId, setModalId] = useState();

  const openModal = ({ target }) => {
    setModal(true);
    setModalId(target.id);
  }

  return (
    <div>
      <Header />
      <div className="h-screen bg-neutral-800">
        {
          projects.map((e) => (
            <div className="wrap">
              <img src={ e.thumb.url } alt={e.thumb.alt} className="h-[400px] object-cover" />
              <div className="image_overlay">
                <div className="flex flex-col items-center">
                  <p className="font-bold">{e.name}</p>
                  <p className="text-cyan-500 text-base">{e.tags}</p>
                </div>
                <div>
                  <button
                    className="flex items-center justify-around text-lg w-56 border border-cyan-500 p-3
                    hover:bg-cyan-500 transition-all duration-300"
                    id={e.id}
                    onClick={ openModal }
                  >
                  Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
      { modal && <Modal id={modalId} /> }
      <p ref={ref}></p>
    </div>
  );
}

export default Portfolio;
