import { useRef, useState } from "react";
import { Wrapper } from "./Skills.styles";
import { UilBracketsCurly, UilServerNetwork } from "@iconscout/react-unicons";
import { useInViewport } from "react-in-viewport";
import SkillsData from "../SkillsData/SkillsData";
import SkillsHeader from "../SkillsHeader/SkillsHeader";
import SkillsContent from "../SkillsContent/SkillsContent";
import { FrontEnd, BackEnd } from "../../Skills";

const Skills = () => {
  const skillsRef = useRef();
  const { inViewport, enterCount } = useInViewport(skillsRef);
  const [isAccent, setIsAccent] = useState({ first: true, second: false });

  const toggleAccent = (index) => {
    if (index > 0) {
      return setIsAccent((prev) => {
        return { ...prev, second: !prev.second };
      });
    }

    setIsAccent((prev) => {
      return { ...prev, first: !prev.first };
    });
  };

  return (
    <Wrapper className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <div>
          <SkillsContent>
            <div
              className={
                isAccent.first
                  ? "skills__content skills__open"
                  : "skills__content skills__close"
              }
            >
              <SkillsHeader
                title="Frontend Developer"
                subtitle="More than 4 years"
                icon={<UilBracketsCurly className="skills__icon" />}
                toggleAccent={toggleAccent}
              />
              <div className="skills__list grid" ref={skillsRef}>
                {FrontEnd.map((item, index) => {
                  return (
                    <SkillsData
                      key={index}
                      name={item.name}
                      number={item.number}
                      inViewport={inViewport}
                      enterCount={enterCount}
                    />
                  );
                })}
              </div>
            </div>
          </SkillsContent>
        </div>
        <div>
          <SkillsContent>
            <div
              className={
                isAccent.second
                  ? "skills__content skills__open"
                  : "skills__content skills__close"
              }
            >
              <SkillsHeader
                title="Backend Developer"
                subtitle="More than 2 years"
                icon={<UilServerNetwork className="skills__icon" />}
                toggleAccent={toggleAccent}
              />
              <div className="skills__list grid">
                {BackEnd.map((item, index) => {
                  return (
                    <SkillsData
                      key={index}
                      name={item.name}
                      number={item.number}
                      inViewport={inViewport}
                      enterCount={enterCount}
                    />
                  );
                })}
              </div>
            </div>
          </SkillsContent>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
