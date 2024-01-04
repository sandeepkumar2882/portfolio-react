import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const skills = () => {
  return (
    <section id="skills">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Back-end Development</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>WordPress</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills