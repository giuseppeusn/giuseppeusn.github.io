import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './SocialMedia.css';

const SocialMedia = ({ className = 'social'}) => {
  return (
    <div className={className}>
      <a href='https://github.com/giuseppeusn' target="_blank" title="External link" rel="noreferrer">
        <FiGithub
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 1 }}
        />
      </a>
      <a href='https://www.linkedin.com/in/giuseppe-nunes/' target="_blank" title="External link" rel="noreferrer">
        <FiLinkedin
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 2 }}
        />
      </a>
      <a href='https://www.instagram.com/giuseppe_usn/' target="_blank" title="External link" rel="noreferrer">
        <FiInstagram
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 3 }}
        />
      </a>
      <span className="trace bg-white w-[2px] opacity-30"></span>
    </div>
  )
}

export default SocialMedia;
