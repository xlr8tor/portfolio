import styled from "styled-components";

export const Wrapper = styled.section`
  .qualification__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);
  }

  svg.qualification__icon {
    margin-right: var(--mb-0-25);
  }

  .qualification__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
  }

  .qualification__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: ${(props) => props.theme.firstColor};
    border-radius: 50%;
  }

  .qualification__line {
    display: block;
    background-color: ${(props) => props.theme.firstColor};
    width: 1px;
    height: 100%;
    transform: translate(6px, -7px);
  }

  .qualification__content {
    display: none;
  }

  .qualification__active {
    display: block;
  }

  .qualification__button.qualification__active {
    color: ${(props) => props.theme.firstColor};
  }

  .active {
    color: ${(props) => props.theme.firstColor};
  }

  @media (min-width: 768px) {
    .qualification__tabs {
      justify-content: center;
    }

    .qualification__sections {
      grid-template-columns: .5fr;    
    }
  }

  @media (min-width: 568px){
    .qualification__sections {
      display: grid;
      grid-template-columns: .6fr;
      justify-content: center;
    }
    
 

  @media (max-width: 350px) {
    .qualification__data {
    gap: .5rem
  }

`;
