import styled from "styled-components";

export const Wrapper = styled.div`
  &.project {
    text-align: center;
  }

  .project__bg {
    background-color: ${(props) => props.theme.firstColorSecond};
    padding-top: 3rem;
  }

  .project__title {
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
  }

  .project__description {
    margin-bottom: var(--mb-1-5);
  }

  .project__title,
  .project__description {
    color: #fff;
  }

  .project__img {
    width: 232px;
    justify-self: center;
  }

  @media (min-width: 768px) {
    &.project {
      text-align: initial;
    }

    .project__bg {
      background: none;
    }

    .project__container {
      background-color: ${(props) => props.theme.firstColorSecond};
      border-radius: 1rem;
      padding: 3rem 2.5rem 0;
      grid-template-columns: 1fr max-content;
      column-gap: 3rem;
    }

    .project__data {
      padding-top: .8rem;
    }
  }

  @media (min-width: 568px){
    .project__container {
      grid-template-columns: repeat(2,1fr);
    }

  @media (max-width: 350px){
    .project__img {
    width: 200px;
  }
`;
