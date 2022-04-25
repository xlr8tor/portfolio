import { useState } from "react";
import Modal from "../Modal/Modal";
import styled from "styled-components";
import { UilArrowRight } from "@iconscout/react-unicons";

const Wrapper = styled.div`
  .services__title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
  }
  .services__button {
    cursor: pointer;
    font-size: var(--small-font-size);
  }
  .services__button:hover svg.button__icon {
    transform: translateX(0.25rem);
  }
`;

const ServicesContent = ({ title, icon }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Wrapper className="services__content">
      <div>
        {icon}
        <h3 className="services__title">
          {title.split(" ")[0]}
          <br />
          Developer
        </h3>
      </div>
      <span
        className="button button--flex button--small button--link services__button"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        View more
        <UilArrowRight className="button__icon" />
      </span>

      <Modal
        title={title}
        visible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </Wrapper>
  );
};

export default ServicesContent;
