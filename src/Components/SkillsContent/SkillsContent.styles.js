import styled from "styled-components";

export const Wrapper = styled.div`
  .skills__close .skills__list {
    height: 0;
    overflow: hidden;
  }

  .skills__open .skills__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .skills__open svg.skills__arrow {
    transform: rotate(-180deg);
  }
`;
