import styled from "styled-components";
import { UilCalendarAlt } from "@iconscout/react-unicons";
const Wrapper = styled.div`
  &.qualification__calender {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
  }

  &.qualification__calender svg {
    vertical-align: sub;
    margin-right: var(--mb-0-25);
  }

  .qualification__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .qualification__subtitle {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }
`;

const Calendar = ({ title, company, timeframe }) => {
  return (
    <Wrapper className="qualification__calender">
      <h3 className="qualification__title">{title}</h3>
      <span className="qualification__subtitle">{company}</span>
      <UilCalendarAlt size="16" />
      {timeframe}
    </Wrapper>
  );
};

export default Calendar;
