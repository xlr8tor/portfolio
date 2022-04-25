import { Link } from "react-scroll";
import { Wrapper } from "./Footer.styles";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <Wrapper className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Jeremiah</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <Link to="services" className="footer__link">
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" className="footer__link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com"
              className="footer__social"
              target="_blank"
              rel="noreferrer"
            >
              <UilFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              className="footer__social"
              target="_blank"
              rel="noreferrer"
            >
              <UilTwitterAlt />
            </a>
            <a
              href="https://www.instagram.com"
              className="footer__social"
              target="_blank"
              rel="noreferrer"
            >
              <UilInstagram />
            </a>
          </div>
        </div>
        <p className="footer__copy">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
