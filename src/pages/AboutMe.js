import React, { useContext } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import AppContext from '../context/AppContext';
import useOnScreen from '../hook/useOnScreen';
import ProfilePic  from '../images/profile_pic.jpg';
import skillsData from '../data/skillsData.js';

function AboutMe() {
  const { ref, content } = useContext(AppContext);

  const contentVisible = useOnScreen(content);

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div ref={content} className="min-h-screen bg-neutral-800 mt-[1px]">
      {  
        contentVisible &&
          <div className="flex flex-col justify-center">
            <Title title="about me" />
            <div className="flex justify-around items-center mt-5">
              <div className="flex flex-col items-center">
                <img src={ ProfilePic } className="rounded-[50%] h-60 w-60 border-2 border-cyan-500 p-1" alt="Giuseppe's Profile" />
                <span className="text-white text-3xl uppercase text-center mt-5 font-bold">
                  Who is
                  <span className="text-cyan-500"> me</span>
                  ?
                </span>
                <p className="text-white w-[400px] text-center mt-5">
                  I'm a Full-stack Web Developer, graduated in IT technician and
                  student of Mechatronics Engineering.
                  <br/>
                  <br/>
                  Driven by curiosity, I love technology and innovation. I'm interested in innovative and high-impact projects,
                  aiming to make a difference!
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-3xl uppercase font-bold text-center">My <span className="text-cyan-500">skills</span></h1>
                <ul className="my-5 flex flex-col items-center">
                  {
                    skillsData.map((type) => (
                      <li
                        className="text-xl font-semibold mt-10 text-center border-b-2 border-black
                        border-opacity-20 cursor-pointer w-fit"
                      >
                        {type.typeSkill}
                        <div className="flex justify-around mt-5">
                          {
                            type.skills.map((skill) => (
                              <a href={skill.url} target="_blank" rel="noreferrer">
                                <span
                                  className="flex flex-col items-center p-3 text-sm hover:text-cyan-500
                                  min-h-[84px] justify-between"
                                >
                                    <img
                                    src={skill.image}
                                    alt={`${skill.name} icon`}
                                    className={skill.class ? skill.class : "w-8"}
                                  />
                                  <span className="mt-2">{skill.name}</span>
                                </span>
                              </a>
                            ))
                          }
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
      }      
      </div>
    </div>
  );
}

export default AboutMe;
