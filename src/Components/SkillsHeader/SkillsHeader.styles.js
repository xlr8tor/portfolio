import styled from "styled-components";

export const Wrapper = styled.div`
  &.skills__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }

  svg.skills__icon,
  svg.skills__arrow {
    width: 30px;
    height: 30px;
    color:${(props) => props.theme.firstColor};
  }

  svg.skills__icon {
    margin-right: var(--mb-0-75);
  }

  .skills__title {
    font-size: var(--h3-font-size);
  }

  .skills__subtitle {
    color:  ${(props) => props.theme.textColor};
    font-size: var(--small-font-size);
  }

  svg.skills__arrow {
    margin-left: auto;
    transition: 0.4s;
  }

  @media (max-width: 350px) {
    .skills__title {
    font-size: var(--normal-font-size);
  }
`;
