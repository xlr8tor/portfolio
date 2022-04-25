import styled from "styled-components";

export const Wrapper = styled.footer`
  &.footer {
    padding-top: 2rem;
  }

  .footer__container {
    row-gap: 3.5rem;
  }

  .footer__bg {
    background-color: ${(props) => props.theme.firstColorSecond};
    padding: 2rem 0 3rem;
  }

  .footer__title {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
  }

  .footer__subtitle {
    font-size: var(--small-font-size);
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    cursor: pointer;
  }

  .footer__link:hover {
    color: ${(props) => props.theme.firstColorLighter};
  }

  .footer__social {
    margin-right: var(--mb-2);
  }

  .footer__social:hover {
    color: ${(props) => props.theme.firstColorLighter};
  }

  .footer__copy {
    font-size: var(--small-font-size);
    text-align: center;
    color:  ${(props) => props.theme.textColorLight};
    margin-top: var(--mb-3);
  }

  .footer__title,
  .footer__subtitle,
  .footer__link,
  .footer__social {
    color: #fff;
  }

  @media (min-width: 568px){
    .footer__container  {
      grid-template-columns: repeat(2,1fr);
    }

    @media (min-width: 768px) {
    .footer__container  {
      padding: 0 1rem;
      grid-template-columns: repeat(3,1fr);
    }

    .footer__bg {
      padding: 3rem 0 3.5rem;
    }

    .footer__links {
      flex-direction: row;
      column-gap: 2rem;
    }

    .footer__socials {
      justify-self: flex-end;
    }

    .footer__copy {
      margin-top: 4.5rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;
