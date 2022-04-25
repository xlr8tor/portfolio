import { Wrapper } from "./Modal.styles";
import { UilTimes } from "@iconscout/react-unicons";
import ModalListItem from "../ModalListItem/ModalListItem";

const offerings = {
  Frontend: [
    "Bring design concepts to life",
    "User experience optimization",
    "Develop and maintain user interface",
    "SEO optimization",
    "Bug fixes and usability testing",
  ],
  Backend: [
    "Develop web interface back blah",
    "Develop web interface blah blah",
    "Develop web interface blah blah",
    "Develop web interface blah blah",
  ],
};
const Modal = ({ title, visible, setIsVisible }) => {
  return (
    <Wrapper
      className={visible ? "services__modal active-modal" : "services__modal"}
    >
      <div className="services__modal-content">
        <h4 className="services__modal-title">{title}</h4>
        <UilTimes
          className="services__modal-close"
          onClick={() => {
            setIsVisible(false);
          }}
        />
        <ul className="services__modal-services grid">
          {offerings[title.split(" ")[0]].map((item, index) => {
            return <ModalListItem key={index} text={item} />;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Modal;
