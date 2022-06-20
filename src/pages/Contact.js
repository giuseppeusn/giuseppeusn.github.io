import React, { useContext, useRef, useState} from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import emailjs from '@emailjs/browser';
import ContactNoti from '../components/ContactNoti';
import { ImSpinner2 } from 'react-icons/im';
import '../components/Title.css';
import './Contact.css';
import Title from '../components/Title';
import useOnScreen from '../hook/useOnScreen';
import SocialMedia from '../components/SocialMedia';

function Contact() {
  const { ref, content } = useContext(AppContext);
  const contactContainer = useRef(null);
  const [notify, setNotify] = useState({
    isSubmit: false,
    isSucess: true,
  });

  const [load, setLoad] = useState(false);

  const contentVisible = useOnScreen(contactContainer);
  
  const sendEmail = (e) => {
    e.preventDefault();

    setLoad(true);

    emailjs.sendForm('service_tyo66sa', 'portfolio_template', e.target, '9xYB4MxNZkHphIcH1')
      .then(() => {
          setNotify({ isSubmit: true, isSucess: true });
          e.target.reset();
      }, (error) => {
          setNotify({ isSubmit: true, isSucess: false });
          console.log(error.text);
      }).then(() => {
        setLoad(false);
        setTimeout(() => setNotify({ isSubmit: false, isSucess: false }), 4800);
      })
  };

  return (
    <div>
      <Header />
      <p ref={ref}></p>
      <div className="contact-container h-screen bg-neutral-800 flex flex-col pb-28 mt-[1px]">
        <div ref={contactContainer} className="relative">
        {
          contentVisible ?
            <div>
              <Title title="contact" />
              <div className="flex flex-col items-center mt-32 text-3xl">
                <div className="contact-title">
                  <h1 className="text-lg text-cyan-500 w-[260px] text-center">
                    Do you have a suggestion or a job/project opportunity?
                  </h1>
                </div>            
                <form
                  onSubmit={sendEmail}
                  className="form-control flex flex-col justify-around items-center mt-10 h-80 w-[600px] rounded-lg"
                >
                  <div className="flex items-around w-[90%]">
                    <input
                      type="text"
                      placeholder="Name"
                      className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[50%] mr-3
                      outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
                      name="name"
                    />
                    <input 
                      type="email"
                      placeholder="Email"
                      className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[50%] 
                      outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
                      name="email"
                    />
                  </div>
                  <textarea
                    placeholder="Your message"
                    className="text-lg font-light h-24 border-b-2 border-cyan-800 p-2 bg-[#212121] w-[90%] resize-none
                    outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
                    name="message"
                  />
                  { !load ? (
                      <button
                        type="submit"
                        className="flex items-center justify-center text-lg w-48 border border-cyan-500 p-3
                        text-white hover:bg-cyan-500 transition-all duration-300"
                      >
                        Submit
                      </button>
                    ) : (
                    <ImSpinner2 className="animate-spin text-cyan-500 h-[54px]" />
                    )
                  } 
                </form>
                <SocialMedia className="social-contact" />
              </div>
            </div>
            :  <div ref={content} className="h-screen bg-neutral-800"></div>
        }
        </div>
      </div>
      {notify.isSubmit && <ContactNoti isSucess={notify.isSucess} />}
    </div>
  );
}

export default Contact;
