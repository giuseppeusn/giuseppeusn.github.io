import React, { useContext, useState }  from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Title from '../components/Title';
import AppContext from '../context/AppContext';
import useOnScreen from '../hook/useOnScreen';
import projects from '../projectData';
import './ProjectCard.css';

function Portfolio() {
  const { ref, modal, setModal, content } = useContext(AppContext);
  const [modalId, setModalId] = useState();

  const contentVisible = useOnScreen(content);

  const openModal = ({ target }) => {
    setModal(true);
    setModalId(target.id);
  }

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div ref={content} className="h-[120vh] flex flex-col bg-neutral-800 pb-20 mt-[1px]">
        {
          contentVisible &&
          <div>
            <Title title="portfolio" />
            <div className="flex justify-center mt-20">
              <div className="grid grid-cols-3 gap-4">
              {
                projects.map((e, i) => (
                  <div className="wrap" style={{ "--order": i }}>
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
            </div>
          </div>
        }
      </div>
      { modal && <Modal id={modalId} /> }
    </div>
  );
}

export default Portfolio;
