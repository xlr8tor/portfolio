import styled from "styled-components";

export const ListItem = styled.li`
  .nav__link {
    color: ${(props) => props.theme.titleColor};
  }

  .active__link {
    color: ${(props) => props.theme.firstColor};
  }

  .nav__link:hover {
    color: ${(props) => props.theme.firstColor};
  }
`;
