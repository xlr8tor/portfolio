import styled from "styled-components";

export const Wrapper = styled.div`
  .skills__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }

  .skills__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .skills__bar,
  .skills__percentage {
    height: 5px;
    border-radius: 0.25rem;
  }

  .skills__bar {
    background-color: ${(props) => props.theme.firstColorLighter};
  }
  .skills__percentage {
    display: block;
    background-color: ${(props) => props.theme.firstColor};
    transition: 1s ease 0.3s;
  }

  .skills__html {
    width: ${(props) => props.width};
  }
  .skills__css {
    width: ${(props) => props.width};
  }
  .skills__javascript {
    width: ${(props) => props.width};
  }
  .skills__scss {
    width: ${(props) => props.width};
  }
  .skills__react {
    width: ${(props) => props.width};
  }

  .skills__node {
    width: ${(props) => props.width};
  }

  .skills__mongo {
    width: ${(props) => props.width};
  }

  .skills__python {
    width: ${(props) => props.width};
  }
`;
