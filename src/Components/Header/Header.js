import { useEffect, useState } from "react";
import { Wrapper, Nav } from "./Header.styles";
import {
  UilFileAlt,
  UilUser,
  UilEstate,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun,
} from "@iconscout/react-unicons";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";

const Header = (props) => {
  const [showMenu, useShowMenu] = useState(false);

  const ToggleMenu = () => {
    useShowMenu(!showMenu);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleSetActive = (to) => {};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    ScrollReveal().reveal(".header", { delay: 600 });
    ScrollReveal().reveal(".home", {
      delay: 600,
      origin: "top",
      distance: "60px",
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollReveal().reveal(".header", { delay: 600 });
      ScrollReveal().reveal(".home", {
        delay: 600,
        origin: "top",
        distance: "60px",
      });
    };
  }, []);

  return (
    <Wrapper
      className={scrollPosition >= 80 ? "header scroll-header" : "header"}
      id="header"
    >
      <Nav className="nav container" showMenu={showMenu}>
        <a href="#logo" className="nav__logo">
          Jeremiah
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilEstate size="16" className="nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilUser size="16" className="nav__icon" />
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilFileAlt size="16" className="nav__icon" />
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="services"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilBriefcaseAlt size="16" className="nav__icon" />
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="portfolio"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilScenery size="16" className="nav__icon" />
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                activeClass="active__link"
                spy={true}
                className="nav__link"
                onSetActive={handleSetActive}
                onClick={ToggleMenu}
              >
                <UilMessage size="16" className="nav__icon" />
                Contact
              </Link>
            </li>
          </ul>
          <UilTimes
            className="nav__close"
            id="nav-close"
            size="20"
            onClick={ToggleMenu}
          />
        </div>
        <div className="nav__btns">
          {props.theme === "light" ? (
            <UilMoon
              className="change-theme"
              id="theme-button"
              onClick={() => {
                props.themeToggler();
              }}
            />
          ) : (
            <UilSun
              className="change-theme"
              id="theme-button"
              onClick={() => {
                props.themeToggler();
              }}
            />
          )}

          <div className="nav__toggle" id="nav-toggle" onClick={ToggleMenu}>
            <UilApps size="16" />
          </div>
        </div>
      </Nav>
    </Wrapper>
  );
};

export default Header;
