import styled from "styled-components";

export const Wrapper = styled.section`
  .contact__container {
    row-gap: 3rem;
  }

  .contact__information {
    display: flex;
    margin-bottom: var(--mb-2);
    align-items: center;
  }

  svg.contact__icon {
    color: ${(props) => props.theme.firstColor};
    margin-right: var(--mb-0-75);
  }

  .contact__title {
    font-size: var(--h3-font-size);
    font-weight: var(--font_medium);
  }

  .contact__subtitle {
    font-size: var(--small-font-size);
    color: ${(props) => props.theme.textColorLight};
  }

  .contact__content {
    background-color: ${(props) => props.theme.inputColor};
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;
  }

  .contact__label {
    font-size: var(--small-font-size);
    color: ${(props) => props.theme.titleColor};
  }

  .contact__input {
    width: 100%;
    background-color: ${(props) => props.theme.inputColor};
    color: ${(props) => props.theme.textColor};
    font-family: inherit;
    font-size: var(--normal-font-size);
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }

  .contact__error {
    color: red;
  }

  @media (min-width: 568px){
    .contact__container  {
      grid-template-columns: repeat(2,1fr);
    }

    @media (min-width: 1024px) {
    .contact__form {
      width: 460px;
    }

    .contact__inputs {
      grid-template-columns: repeat(2,1fr);
    }
}
`;
