import styled from "styled-components";

export const Wrapper = styled.section`
  .about__img {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
  }

  .about__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  .about__info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
  }

  .about__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: ${(props) => props.theme.titleColor};
  }

  .about__info-name {
    font-size: var(--smaller-font-size);
  }

  .about__info-title,
  .about__info-name {
    display: block;
    text-align: center;
  }

  .about__buttons {
    display: flex;
    justify-content: center;
  }

 
    
  }
  @media (min-width: 568px){
    .about__container {
      grid-template-columns: repeat(2,1fr);
    }

    @media (min-width: 768px) {
    .about__container {
      column-gap: 5rem;
    }

    .about__img {
      width: 350px;
    }

    .about__description {
      text-align: initial;
    }

    .about__info{
      justify-content: space-between;
    }

    .about__buttons{
      justify-content:initial;
    }
`;
