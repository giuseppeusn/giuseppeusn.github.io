import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import './ContactNoti.css';

function ContactNoti({isSucess}) {
  const [mode, setMode] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMode('close');
    }, 4000);
  },[]);

  return (
    <div className={`wrap-noti z-[10] ${mode} fixed top-0 right-0 mt-28`}>
      <div className="bg-[#212121] border-b border-cyan-500 text-white p-3">
        {
          isSucess ? (
            <p className="noti-text flex justify-around items-center text-center w-56">
              <AiFillCheckCircle className="text-lime-500 text-4xl mr-3" />
              Your message has<br/>been sent successfully!
            </p>
          ) : (
            <p className="noti-text flex justify-around items-center text-center w-56">
              <AiFillCloseCircle className="text-rose-800 text-4xl mr-3" />
              Error sending!<br/>Please try again!
            </p>
          )
        }
      </div>
    </div>
  );
}

export default ContactNoti;
