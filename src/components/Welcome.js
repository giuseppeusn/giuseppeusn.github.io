import React, { useContext, useRef } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Particles from 'react-tsparticles';
import AppContext from '../context/AppContext';

function Welcome() {
  const mainContent = useRef(null);
  const { welcomeRef, welcomeScrollRef } = useContext(AppContext);

  const executeScroll = () => mainContent.current.scrollIntoView();

  return (
    <div ref={welcomeScrollRef}>
      <div className="h-0">
        <Particles
          id="tsparticles"
          className="h-screen"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: false,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 5,
                },
              },
            },
            particles: {
              color: {
                value: "#ffff",
              },
              links: {
                color: "#ffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div        
        className="h-screen flex flex-col items-center
        justify-center text-white drop-shadow-[10px_10px_10px_rgba(0,0,0,1)]"
      >
        <div ref={welcomeRef} className="text-center">
          <p className="font-light text-4xl">
            Olá, meu nome é
            <span className="text-cyan-500 font-bold"> Giuseppe Nunes</span>
            !
          </p>
          <p className="font-light text-[27px]">Estudante de Desenvolvimento Web Full-Stack</p>
        </div>
        <div className="flex mt-8">
          <button
            onClick={executeScroll}
            className="flex items-center justify-around text-lg w-56 border border-cyan-500 p-3
            hover:bg-cyan-500 transition-all duration-300"
          >
            Veja meus projetos
            <AiOutlineArrowDown className="text-2xl" />
          </button>
        </div>
      </div>
      <div ref={mainContent} className="bg-neutral-800"></div>
    </div>
  );
}

export default Welcome;
