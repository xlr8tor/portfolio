import styled from "styled-components";

export const Wrapper = styled.div`
  &.services__modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    padding: 0 1rem;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  .services__modal-content {
    position: relative;
    background-color: ${(props) => props.theme.containerColor};
    padding: 1.5rem;
    border-radius: 0.5rem;
  }

  .services__modal-services {
    row-gap: 1rem;
  }

  .services__modal-title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
  }

  .services__modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    color: ${(props) => props.theme.firstColor};
    cursor: pointer;
  }

  svg.services__modal-icon {
    color: ${(props) => props.theme.firstColor};
    margin-right: var(--mb-0-25);
  }

  &.active-modal {
    opacity: 1;
    visibility: visible;
  }
`;
