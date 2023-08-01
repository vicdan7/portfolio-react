import React from 'react';
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
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
                <h4 className="info__desc">ibarravictor334@gmail.com</h4>
              </div>
           </div>

           <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+57 3013532321</h4>
                <FaWhatsapp />
              </div>
           </div>
         </div>

         <div className="contact__socials">
           <a href="https://www.facebook.com/victor.ibarra.5496683?mibextid=9R9pXO" target='__blank' className="contact__social-link">
              <FaFacebookF />
           </a>

           <a href="https://github.com/vicdan7" target='__blank' className="contact__social-link">
              <FaGithub />
           </a>

           <a href="https://instagram.com/victoribarrab?igshid=MmU2YjMzNjRlOQ==" target='__blank' className="contact__social-link">
              <FaInstagram />
           </a>

           <a href="https://www.linkedin.com/in/vicibarra/" target='__blank' className="contact__social-link">
              <FaLinkedin />
           </a>
         </div>
       </div>

       <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Name' 
                className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="email" 
                placeholder='Your Email' 
                className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Subject' 
                className="form__control" 
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
            placeholder='Your Message' 
            className="form__control textarea"
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
       </form>
     </div>
   </section>
  );
}

export default Contact;
