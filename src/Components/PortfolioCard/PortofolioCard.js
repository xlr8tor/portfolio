import { UilArrowRight } from "@iconscout/react-unicons";
import { Wrapper } from "./PortfolioCard.styles";

const PortofolioCard = ({ src, title, desc, href, time }) => {
  return (
    <Wrapper className="portfolio__content grid">
      <img src={src} alt="" className="portfolio__img" />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">
          {desc} <span className="portfolio__date">- {time}</span>
        </p>
        <a
          href={`https://xlr8tor.github.io/${href}/`}
          className="button button--flex button--small portfolio__button"
        >
          Demo
          <UilArrowRight className="button__icon" />
        </a>
        <a
          href={`https://github.com/xlr8tor/${href}`}
          className="button button--flex button--small button--blue portfolio__button"
        >
          Github
          <UilArrowRight className="button__icon" />
        </a>
      </div>
    </Wrapper>
  );
};

export default PortofolioCard;
