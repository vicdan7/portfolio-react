import React from 'react';
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import "./contact.css"

const Contact = () => {
  return (
   <section className="contact section">
     <h2 className="section__title">Get In <span>Touch</span></h2>

     <div className="contact__container container grid">
       <div className="contact__data">
         <h3 className="contact__title">Don't be Shy !!</h3>

         <p className="contact__description">Feel free to get in touch with me. 
            I am always open to discussing new projects, creative ideas or opportunities
            to be part of your visions.
         </p>

         <div className="contact__info">
           <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Mail me</span>
                <span className="info__desc">ibarravictor334@gmail.com</span>
              </div>
           </div>

           <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Call me</span>
                <span className="info__desc">+57 3013532321</span>
              </div>
           </div>
         </div>

         <div className="contact__socials">
           <a href="https://facebook.com/" className="contact__social-link">
              <FaFacebookF />
           </a>

           <a href="https://github.com/vicdan7" className="contact__social-link">
              <FaGithub />
           </a>

           <a href="https://instagram.com" className="contact__social-link">
              <FaInstagram />
           </a>

           <a href="https://www.linkedin.com/in/vicibarra/" className="contact__social-link">
              <FaLinkedin />
           </a>
         </div>
       </div>
     </div>
   </section>
  );
}

export default Contact;
