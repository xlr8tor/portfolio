import { Wrapper } from "./Services.styles";
import { UilArrow, UilServerAlt } from "@iconscout/react-unicons";

import ServicesContent from "../ServicesContent/ServicesContent";

const Services = () => {
  return (
    <Wrapper className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <ServicesContent
          title={"Frontend Developer"}
          icon={<UilArrow className="services__icon" />}
        />
        <ServicesContent
          title={"Backend Developer"}
          icon={<UilServerAlt className="services__icon" />}
        />
      </div>
    </Wrapper>
  );
};

export default Services;
