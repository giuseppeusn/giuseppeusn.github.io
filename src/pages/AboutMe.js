import React, { useContext } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import AppContext from '../context/AppContext';
import useOnScreen from '../hook/useOnScreen';
import ProfilePic  from '../images/profile_pic.jpg';

function AboutMe() {
  const { ref, content } = useContext(AppContext);

  const contentVisible = useOnScreen(content);

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div ref={content} className="h-screen bg-neutral-800 mt-[1px]">
      {  
        contentVisible &&
        <div className="flex flex-col justify-center">
          <Title title="about me" />
          <div className="flex justify-center">
            <div className="flex flex-col items-center mt-5">
              <img src={ ProfilePic } className="rounded-[50%] h-52 w-52 border-2 border-cyan-500 p-1" alt="Giuseppe's Profile" />
              <span className="text-white text-xl text-center">Who is <span className="text-cyan-500">me</span>?</span>
              <p className="text-white w-80 text-center">
                I'm a Front-end developer, graduated in IT technician,
                student of Mechatronics Engineering and student of Full-stack Web Development at Trybe.
                <br/>
                <br/>
                I love technology and innovation. I'm interested in innovative and high-impact projects,
                aiming to make a difference!
              </p>
            </div>
          </div>
        </div>
      }      
      </div>
    </div>
  );
}

export default AboutMe;
