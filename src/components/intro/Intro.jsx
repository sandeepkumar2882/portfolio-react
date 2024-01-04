import React from 'react';
import { FaAward, FaRegFolder } from 'react-icons/fa';
import ME from '../../assets/rich_sandeep_profile.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <FaRegFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I’ve spent approax two years in an organization, from there I have learned many technologies. I have worked on multiple projects that helps me to improve my skills and contribute to my company's growth, mine also. </p>
          <a href="#contact" className="btn btn-primary mx-auto">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default Intro