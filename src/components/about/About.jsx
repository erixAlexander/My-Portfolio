import React from "react";
import "./about.css";
import ME from "../../assets/my_picture3.jpg";
import { FaAward, FaUsersCog, FaFolderOpen } from "react-icons/fa";

const About = ({ setActiveNav }) => {
  return (
    <section className="section__about" id="about">
      <h5>Get to Know</h5>
      <h2 className="about__h2">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Me" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FaUsersCog className="about__icon" />
              <h5>Clients</h5>
              <small>60+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>180+ Completed Projects</small>
            </article>
          </div>
          <p>
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you!
          </p>
          <a
            onClick={() => setActiveNav("about")}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
