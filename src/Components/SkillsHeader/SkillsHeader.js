import { Wrapper } from "./SkillsHeader.styles";
import { UilAngleDown } from "@iconscout/react-unicons";

const SkillsHeader = ({ title, subtitle, icon, toggleAccent }) => {
  return (
    <Wrapper
      className="skills__header"
      onClick={() => {
        title[0] === "F" ? toggleAccent(0) : toggleAccent(1);
      }}
    >
      {icon}
      <div>
        <h1 className="skills__title">{title}</h1>
        <span className="skills__subtitle">{subtitle}</span>
      </div>
      <UilAngleDown className="skills__arrow" />
    </Wrapper>
  );
};

export default SkillsHeader;
