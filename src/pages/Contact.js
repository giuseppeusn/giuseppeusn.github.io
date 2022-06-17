import React, { useContext, useState} from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import emailjs from '@emailjs/browser';
import ContactNoti from '../components/ContactNoti';
import { ImSpinner2 } from 'react-icons/im';

function Contact() {
  const { ref } = useContext(AppContext);
  const [notify, setNotify] = useState({
    isSubmit: false,
    isSucess: true,
  });

  const [load, setLoad] = useState(false);
  
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
    <div className="bg-neutral-800">
      <Header />
      <div className="h-[80vh]">
        <div className="flex justify-center mt-20">
          <h1 className="text-3xl border-b-2 p-3 text-white font-semibold uppercase">
            <span className="text-cyan-500 text-3xl font-semibold">{'<'}</span>
              contato
            <span className="text-cyan-500 text-2xl font-semibold">/</span>
            <span className="text-cyan-500 text-3xl font-semibold">{'>'}</span>
          </h1>
        </div>
        <div className="flex flex-col items-center mt-20 text-3xl">
          <h1 className="text-lg text-cyan-500 w-[420px] text-center">Tem uma dúvida/sugestão ou uma oportunidade de trabalho/projeto?</h1>
          <form
            onSubmit={sendEmail}
            className="flex flex-col justify-around items-center mt-10 h-80 w-[600px] p-8 rounded-lg"
          >
            <div className="flex items-around w-[90%]">
              <input
                type="text"
                placeholder='Nome'
                className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[50%] mr-3
                outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
                name="name"
              />
              <input 
                type="email"
                placeholder='Email'
                className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[50%]
                outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
                name="email"
              />
            </div>
            <textarea
              placeholder='Sua mensagem'
              className="text-lg font-light h-24 border-b-2 border-cyan-800 p-2 bg-[#212121] w-[90%]
              outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white text-white"
              name="message"
            />
            { !load ? (
                <button
                  type="submit"
                  className="flex items-center justify-center text-lg w-48 border border-cyan-500 p-3
                  text-white hover:bg-cyan-500 transition-all duration-300"
                >
                  Enviar
                </button>
              ) : (
              <ImSpinner2 className="animate-spin text-cyan-500 h-[54px]" />
              )
            } 
          </form>
        </div>
      </div>
      {notify.isSubmit && <ContactNoti isSucess={notify.isSucess} />}
      <p ref={ref}></p>
    </div>
  );
}

export default Contact;
