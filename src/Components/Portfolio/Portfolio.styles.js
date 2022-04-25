import styled from "styled-components";

export const Wrapper = styled.section`
  .portfolio__container {
    overflow: initial;
  }

  .swiper-button-prev {
    content: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236e57e0'><path d='M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z'></path></svg>") !important;
  }

  .swiper-button-next {
    content: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236e57e0'><path d='M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z'></path></svg>") !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    transform: scale(1.5);
  }

  .swiper-button-prev {
    left: -0.5rem;
  }

  .swiper-button-next {
    right: -0.5rem;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }

  .swiper-horizontal > .swiper-pagination-bullets {
    bottom: -2.5rem;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.firstColor};
  }

  @media (min-width: 568px){
    .portfolio__content {
      grid-template-columns: repeat(2,1fr);
    }

  @media (min-width: 1024px) {

    .swiper-button-prev,
    .swiper-button-next {
    transform: scale(3);
    }

    .swiper-button-prev {
    left: -3.5rem;
    }

    .swiper-button-next {
    right: -3.5rem;
    }

    .swiper-horizontal > .swiper-pagination-bullets {
    bottom: -4.5rem;
  }

  }
`;
