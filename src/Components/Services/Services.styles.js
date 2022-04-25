import styled from "styled-components";

export const Wrapper = styled.section`
  .services__container {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .services__content {
    position: relative;
    background-color: ${(props) => props.theme.containerColor};
    padding: 3.5rem 0.5rem 1.25rem 1.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.3s;
  }

  .services__content:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg.services__icon {
    display: block;
    color: ${(props) => props.theme.firstColor};
    margin-bottom: var(--mb-1);
  }

  @media (min-width: 768px) {
    .services__container {
      grid-template-columns: repeat(2,327px);
      justify-content: center;
    }

    .services__modal-content {
      width: 450px;
    }

    .services__content {
      padding: 6rem 0 2rem 2.5rem;
    }
  }

  @media (min-width: 1024px) {
      .services__container {
       grid-template-columns:repeat(2,357px)
    
    }

  @media (max-width: 350px){
    .services__container {
      grid-template-columns: max-content;
      justify-content: center;
    }

    .services__content {
      padding-right: 3.5rem;
    }

    .services__modal {
      padding: 0 .5rem;
    }
  }

 
`;
