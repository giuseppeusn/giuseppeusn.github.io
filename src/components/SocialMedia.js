import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="fixed flex flex-col items-center justify-around z-10 bottom-0 w-[80px] h-[300px]">
      <a href='https://github.com/giuseppeusn' target="_blank" title="Link externo" rel="noreferrer">
        <FiGithub className="icon-1 text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"/>
      </a>
      <a href='https://www.linkedin.com/in/giuseppe-nunes/' target="_blank" title="Link externo" rel="noreferrer">
        <FiLinkedin className="icon-2 text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"/>
      </a>
      <a href='https://www.instagram.com/giuseppe_usn/' target="_blank" title="Link externo" rel="noreferrer">
        <FiInstagram className="icon-3 text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"/>
      </a>
      <span className="trace bg-white w-[2px] opacity-30"></span>
    </div>
  )
}

export default SocialMedia;
