import styled from "styled-components";

export const Wrapper = styled.div`
  &.qualification__button {
    display: flex;
    align-items: center;
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;
  }

  &.qualification__button:hover {
    color: ${(props) => props.theme.firstColor};
  }

  @media (min-width: 768px) {
    &.qualification__button {
      margin: 0 var(--mb-1);
    }
  }
`;
