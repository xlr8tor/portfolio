import styled from "styled-components";

export const Wrapper = styled.div`
  &.portfolio__content {
    padding: 0 1.5rem;
  }

  .portfolio__img {
    width: 279px;
    border-radius: 0.5rem;
    justify-self: center;
  }

  .portfolio__data {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .portfolio__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }

  .portfolio__description {
    margin-bottom: var(--mb-0-75);
  }

  .portfolio__date {
    display: block;
    font-weight: var(--font-semi-bold);
  }

  .portfolio__button:hover svg.button__icon {
    transform: translateX(0.25rem);
  }

  @media (min-width: 768px) {
    .portfolio__img {
      width: 320px;
    }

    &.portfolio__content {
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    &.portfolio__content {
      column-gap: 5rem;
    }
  }
`;
