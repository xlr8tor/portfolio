import { Link } from "react-scroll";
import { Wrapper } from "./Project.styles";
import { UilMessage } from "@iconscout/react-unicons";
const Project = () => {
  return (
    <Wrapper className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h3 className="project__title">Let's create greatness together</h3>
            <p className="project__description">
              Need a new project done to your taste? I'm your guy.
            </p>
            <Link to="contact" className="button button--flex button--white">
              Contact Me
              <UilMessage className="project__icon button__icon" />
            </Link>
          </div>
          <img src="/project.png" alt="" className="project__img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
