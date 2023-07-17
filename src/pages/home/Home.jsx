import React from 'react';
import Profile from "../../assets/vic.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <div>
      <section className="home section grid">
        <img src={Profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Victor Ibarra.</span> Web Developer
            </h1>

            <p className="home__description"> 
              Welcome to my web developer portfolio! I'm a skilled front-end and
              back-end developer, i specialize in creating responsive and
              user-friendly websites using the latest technologies. Thank you for
              visiting me.
            </p>

            <Link to='/about' className='button'>
              More About Me{' '}
              <span className='button__icon'>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="color__block"></div>
      </section>
    </div>
  );
}

export default Home;
