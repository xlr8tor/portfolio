import styled from "styled-components";

export const Wrapper = styled.section``;

export const Content = styled.div`
  &.home__container {
    gap: 1rem;
  }

  .home__content {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
  }

  .home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }

  .home__social-icon {
    font-size: 1.25rem;
    color: ${(props) => props.theme.firstColor};
  }

  .home__social-icon:hover {
    color: ${(props) => props.theme.firstColorAlt};
  }

  .home__blob {
    width: 200px;
    fill: ${(props) => props.theme.firstColor};
  }

  .home__blob-img {
    width: 170px;
  }

  .home__data {
    grid-column: 1/3;
  }

  .home__title {
    font-size: var(--big-font-size);
  }

  .home__subtitle {
    font-size: var(--h3-font-size);
    color: ${(props) => props.theme.textColor};
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  .home__description {
    margin-bottom: var(--mb-2);
  }

  .home__scroll {
    display: none;
  }

  .home__scroll-button {
    color: ${(props) => props.theme.firstColor};
    transition: 0.3s;
  }

  .home__scroll-button:hover {
    transform: translateY(0.25rem);
  }

  svg.home__scroll-mouse {
    width: 30px;
    height: 30px;
  }
  .home__scroll-name {
    font-size: var(--small-font-size);
    color: ${(props) => props.theme.titleColor};
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  @media (min-width: 568px) {
    .home__content {
      grid-template-columns: max-content 1fr 1fr;
    }

    .home__data {
      grid-column: initial;
    }

    .home__img {
      order: 1;
      justify-self: center;
    }
  }

  @media (max-width: 350px) {
    .home__content {
      grid-template-columns: 0.25fr 3fr;
    }

    .home__blob {
      width: 180px;
    }
  }

  @media (min-width: 768px) {
    &.home__container {
      row-gap: 5rem;
    }

    .home__content {
      padding-top: 5.5rem;
      column-gap: 2rem;
    }

    .home__blob {
      width: 270px;
    }

    .home__scroll {
      display: block;
    }

    .home__scroll-button {
      margin-left: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .home__blob {
      width: 320px;
    }

    .home__social {
      transform: translateX(-6rem);
    }
  }
`;
