import { Wrapper } from "./Portfolio.styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import PortofolioCard from "../PortfolioCard/PortofolioCard";

const Portfolio = () => {
  return (
    <Wrapper className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent projects</span>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="portfolio__container container"
      >
        <SwiperSlide>
          <PortofolioCard
            src="/RMDB.png"
            title="React Movie Database"
            desc="An online database of information related to films, 
            television series, and streaming content online 
            including cast, plot summaries, ratings. Built using React, S
            tyled-components, HTML, CSS, TMDB API"
            href="React-rmdb"
            time="October 2021"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortofolioCard
            src="/Blogr.jpg"
            title="Blogr Landing Page"
            desc="Landing page for a fictional blog.Built using HTML and SCSS"
            href="Blogr-landing-page"
            time="January 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortofolioCard
            src="/TodoApp.jpg"
            title="React Todo App"
            desc="A todo application with inbuilt drop n drop functionality and 
            ability to toggle between a light and dark theme. Built using React, 
            Styled-components, React-beautiful-dnd, HTML and CSS"
            href="react-todo-app"
            time="November 2021"
          />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Portfolio;
