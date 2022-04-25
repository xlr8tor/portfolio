import { Wrapper } from "./Tab.styles";

const Tab = ({ text, icon, checkIfActive, style }) => {
  return (
    <Wrapper
      className={`qualification__button button--flex ${style}`}
      onClick={() => {
        if (text === "Work") {
          checkIfActive(true);
        } else if (text === "Education") {
          checkIfActive(false);
        }
      }}
    >
      {icon}
      {text}
    </Wrapper>
  );
};

export default Tab;
