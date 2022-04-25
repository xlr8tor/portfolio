import { Wrapper } from "./About.styles";
import { UilDownloadAlt } from "@iconscout/react-unicons";

const About = () => {
  return (
    <Wrapper className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src="/about.jpg" alt="" className="about__img" loading="lazy" />
        <div className="about__data">
          <p className="about__description">
            Fullstack web developer specializing in frontend development using
            react. I have garnered experience across a spectrum of web
            technologies includung React, Git, SCSS, Styled-components, NodeJS,
            and a host of other tools and technologies. Currently a freelance
            developer on Upwork, open to taking up a permanent role.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Complete <br />
                projects
              </span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a download="" href="#a" className="button button--flex">
              Download CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
