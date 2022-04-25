import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: ${(props) => props.theme.bodyColor};

  &.scroll-header {
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__logo,
  .nav__toggle {
    color: ${(props) => props.theme.titleColor};
    font-weight: var(--font-medium);
  }

  .nav__logo:hover,
  .nav__toggle:hover {
    color: ${(props) => props.theme.firstColor};
  }

  .nav__toggle {
    cursor: pointer;
    font-size: 1.1rem;
  }

  .nav__btns {
    display: flex;
    align-items: center;
  }

  .nav__link {
    color: ${(props) => props.theme.titleColor};
    cursor: pointer;
  }

  .active__link {
    color: ${(props) => props.theme.firstColor};
  }

  .nav__link:hover {
    color: ${(props) => props.theme.firstColor};
  }

  svg.change-theme {
    color: ${(props) => props.theme.titleColor};
    margin-right: var(--mb-1);
    cursor: pointer;
  }

  svg.change-theme:hover {
    color: ${(props) => props.theme.firstColor};
  }

  @media (min-width: 768px) {
    &.nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 1rem;
    }

    .nav__icon,
    .nav__close,
    .nav__toggle {
      display: none;
    }

    .nav__list {
      display: flex;
      column-gap: 2rem;
    }

    .nav__menu {
      margin-left: auto;
    }

    svg.change-theme {
      margin: 0;
    }
  }

  @media (max-width: 350px) {
    .nav__menu {
      padding: 2rem 0.25rem 4rem;
    }

    .nav__list {
      column-gap: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      width: 100%;
      position: fixed;
      bottom: ${(props) => (props.showMenu ? "0" : "-100%")};
      left: 0;
      background-color: ${(props) => props.theme.bodyColor};
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
    }

    .nav__list {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .nav__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--small-font-size);
      color: ${(props) => props.theme.titleColor};
      font-wieght: var(--font-medium);
    }

    .nav__link:hover {
      color: ${(props) => props.theme.firstColor};
    }

    svg.nav__icon {
      width: 22px;
      height: 22px;
    }

    .nav__close {
      position: absolute;
      right: 1.3rem;
      bottom: 0.5rem;
      cursor: pointer;
      font-size: 1.5rem;
      color: ${(props) => props.theme.firstColor};
    }

    .nav__close:hover {
      color: ${(props) => props.theme.firstColorAlt};
    }
  }
`;
