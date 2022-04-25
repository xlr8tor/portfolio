import styled from "styled-components";

export const Wrapper = styled.section`
  .skills__container {
    row-gap: 0;
  }
  .skills__list {
    row-gap: 1.5rem;
    padding-left: 2.7rem;
  }

  @media (min-width: 568px){
    .skills__container {
      grid-template-columns: repeat(2,1fr);
    }
`;
