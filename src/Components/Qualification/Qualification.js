import { useState } from "react";
import { Wrapper } from "./Qualification.styles";
import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import Tab from "../QualificationTab/Tab";
import Calendar from "../Calendar/Calendar";

const Qualificaton = () => {
  const [isActive, setIsActive] = useState(true);
  const checkIfActive = (active) => {
    setIsActive(active);
  };

  return (
    <Wrapper className="qualification section" id="skills">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <Tab
            className={!isActive && "active"}
            icon={
              <UilGraduationCap className="qualification__icon" size="24" />
            }
            text="Education"
            checkIfActive={checkIfActive}
            style={isActive ? "none" : "active"}
          />
          <Tab
            style={isActive ? "active" : "none"}
            icon={
              <UilBriefcaseAlt className="qualification__icon " size="24" />
            }
            text="Work"
            checkIfActive={checkIfActive}
          />
        </div>

        <div className="qualification__sections">
          <div
            className={
              isActive
                ? "qualification__content"
                : "qualification__content qualification__active"
            }
          >
            <div className="qualification__data">
              <div>
                <Calendar
                  title="Computer Engineering"
                  company="Covenant University"
                  timeframe="2011 - 2016"
                />
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <Calendar
                  title="Web Development"
                  company="NIIT"
                  timeframe="2012 - 2012"
                />
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <Calendar
                  title="Continuous Learning"
                  company="Self taught"
                  timeframe="2012 - date"
                />
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
          <div
            className={
              isActive
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <Calendar
                  title="Frontend Developer"
                  company="DataLinks"
                  timeframe="2018 - 2019"
                />
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <Calendar
                  title="Management Trainee"
                  company="Sahara Group"
                  timeframe="2019 - 2019"
                />
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <Calendar
                  title="Senior Tech Analyst"
                  company="KPMG"
                  timeframe="2019 - 2021"
                />
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <Calendar
                  title="Frontend Developer"
                  company="Upwork"
                  timeframe="2022 - date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Qualificaton;
