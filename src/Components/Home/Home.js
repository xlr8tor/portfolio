import { Link } from "react-scroll";
import { Wrapper, Content } from "./Home.styles";
import {
  UilLinkedin,
  UilGithub,
  UilTwitter,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";

const Home = () => {
  return (
    <>
      <Wrapper className="home section" id="home">
        <Content className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a href="https://www.linkedin.com" className="home__social-icon">
                <UilLinkedin />
              </a>
              <a href="https://www.twitter.com" className="home__social-icon">
                <UilTwitter />
              </a>
              <a href="https://www.github.com" className="home__social-icon">
                <UilGithub />
              </a>
            </div>
            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home__blob-img"
                    x="10"
                    y="-40"
                    xlinkHref="/perfil1.png"
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">Hi, I'm Jeremiah</h1>
              <h3 className="home__subtitle">Frontend Developer</h3>
              <p className="home__description">
                I have a wealth of experience in building responsive websites
                and interactive web apps. I am seeking React, Javascript, and
                other web development opportunities.
              </p>
              <Link to="contact" className="button button--flex">
                Contact Me
                <UilMessage className="button__icon" />
              </Link>
            </div>
          </div>
          <div className="home__scroll">
            <Link to="about" className="home__scroll-button button--flex flex">
              <UilMouseAlt className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <UilArrowDown className="home__scroll-arrow" />
            </Link>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Home;
