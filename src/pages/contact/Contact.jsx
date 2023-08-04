import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const sendEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/emails/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">ibarravictor334@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+57 3013532321</h4>
                <FaWhatsapp />
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/victor.ibarra.5496683?mibextid=9R9pXO"
              target="__blank"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/vicdan7"
              target="__blank"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/victoribarrab?igshid=MmU2YjMzNjRlOQ=="
              target="__blank"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/vicibarra/"
              target="__blank"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="form__control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form__input-div">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="form__control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form__input-div">
              <input
                name="subject"
                type="text"
                placeholder="Your Subject"
                className="form__control"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default sendEmail;
