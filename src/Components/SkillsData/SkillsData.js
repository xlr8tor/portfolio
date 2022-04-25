import { Wrapper } from "./SkillsData.styles";
import { useState } from "react";

const SkillsData = ({ name, number, inViewport, enterCount }) => {
  const [width, setWidth] = useState("0%");
  if (inViewport && enterCount === 1) {
    setTimeout(() => {
      setWidth(number);
    }, 1000);
  }

  return (
    <Wrapper className="skills__data" width={width}>
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{number}</span>
      </div>
      <div className="skills__bar">
        <span
          className={`skills__percentage skills__${name.toLowerCase()}`}
        ></span>
      </div>
    </Wrapper>
  );
};

export default SkillsData;
