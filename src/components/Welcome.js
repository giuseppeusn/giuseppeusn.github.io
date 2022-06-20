import React, { useContext } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Particles from 'react-tsparticles';
import AppContext from '../context/AppContext';
import useOnScreen from '../hook/useOnScreen';
import './Welcome.css'

function Welcome() {
  const { welcomeRef, welcomeScrollRef, content } = useContext(AppContext);
  const isVisible = useOnScreen(welcomeScrollRef);

  const executeScroll = () => content.current.scrollIntoView();

  return (
    <div ref={welcomeScrollRef}>
      <div className="h-0">
        <Particles
          id="tsparticles"
          className="particle-anim h-screen"
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
        className="flex justify-center items-center h-screen"
      >
        <p ref={welcomeRef} ></p>
        {
          isVisible &&
          <div className="title-container flex flex-col items-center text-white">
            <div className="title-anim text-center">
              <p className="tile-main font-base text-[40px]">
                Hello, I'm
                <span className="text-cyan-500 font-semibold"> Giuseppe Nunes</span>
                !
              </p>
              <p className="subtitle font-base text-[30px]">Full-stack Web Development Student</p>
            </div>
            <div className="title-anim flex mt-8 opacity-0" style={ { "--order": 1} }>
              <button
                onClick={executeScroll}
                className="flex items-center justify-around text-lg w-56 border border-cyan-500 p-3
                hover:bg-cyan-500 transition-all duration-300"
              >
                View my projects
                <AiOutlineArrowDown className="text-2xl" />
              </button>
            </div>
          </div>
        }
        
      </div>
    </div>
  );
}

export default Welcome;
