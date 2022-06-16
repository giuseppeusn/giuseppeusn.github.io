import React, { useContext} from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import emailjs from '@emailjs/browser';

function Contact() {
  const { ref } = useContext(AppContext);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tyo66sa', 'portfolio_template', e.target, '9xYB4MxNZkHphIcH1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <div className="bg-neutral-800">
      <Header />
      <div className="h-screen">
        <div className="flex justify-center mt-20">
          <h1 className="text-3xl border-b-2 p-3 text-white font-semibold uppercase">
            <span className="text-cyan-500 text-3xl font-semibold">{'<'}</span>
              contato
            <span className="text-cyan-500 text-2xl font-semibold">/</span>
            <span className="text-cyan-500 text-3xl font-semibold">{'>'}</span>
          </h1>
        </div>
        <div className="flex flex-col items-center mt-20 text-3xl bg-neutral-800">
          <h1 className="text-lg text-cyan-500 w-80 text-center">Tem uma dúvida/sugestão ou uma oportunidade de trabalho/projeto?</h1>
          <form
            onSubmit={sendEmail}
            className="bg-[#1e1e1e] flex flex-col justify-around items-center mt-10 h-96 w-[500px] p-8 rounded-lg text-white"
          > 
            <input
              type="text"
              placeholder='Nome'
              className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[90%]
              outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white"
              name="name"
            />
            <input 
              type="email"
              placeholder='Email'
              className="text-lg font-light p-2 border-b-2 border-cyan-800 bg-[#212121] w-[90%]
              outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white"
              name="email"
            />
            <textarea
              placeholder='Sua mensagem'
              className="text-lg font-light h-24 border-b-2 border-cyan-800 p-2 bg-[#212121] w-[90%]
              outline-none focus:border-cyan-500 transition-all duration-300 placeholder-white"
              name="message"
            />
            <button
              type="submit"
              className="flex items-center justify-center text-lg w-48 border border-cyan-500 p-3
              hover:bg-cyan-500 transition-all duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <p ref={ref}></p>
    </div>
  );
}

export default Contact;
