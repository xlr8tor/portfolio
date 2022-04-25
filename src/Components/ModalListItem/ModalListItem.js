import styled from "styled-components";
import { UilCheckCircle } from "@iconscout/react-unicons";

const ListItem = styled.li`
  &.services__modal-service {
    display: flex;
  }

  svg.services__modal-icon {
    color: ${(props) => props.theme.firstColor};
    margin-right: var(--mb-0-25);
  }
`;
const ModalListItem = ({ text }) => {
  return (
    <ListItem className="services__modal-service">
      <UilCheckCircle className="services__modal-icon" />
      <p>{text}</p>
    </ListItem>
  );
};

export default ModalListItem;
