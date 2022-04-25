import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 3rem;

    /* ========== Colors ==========*/
    /* Change favorite color */
    --hue-color: 250; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

     
    
    /* ========== Fonts and Typography ==========*/
    --body-font: "Poppins", sans-serif;

    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /* ========== Fonts Weights ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;

    /* ========== Margin Bottoms ==========*/
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /* ========== Z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /* ========== BASE STYLES ==========*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 var(--header-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.textColor};
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.titleColor};
    font-weight: var(--font-semi-bold);
  }

  ul {
      list-style: none;
  }

  a {
      text-decoration: none;
  }

  img {
      display: block;
      max-width: 100%;
      height: auto;
  }

  button {
    border: none;
    outline: none;
    font-size: inherit
  }

  textarea {
    height: 8em
  }


  @media screen and (min-width: 968px) {
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }

  /* ============ Reuseable Classes ============ */
  .section {
      padding: 2rem 0 4rem;
  }

  .section__title {
      font-size: var(--h1-font-size);
  }

  .section__subtitle {
      display: block;
      font-size: var(--small-font-size);
      margin-bottom: var(--mb-3);
  }

  .section__title,
  .section__subtitle {
      text-align: center;
  }

/* ============ Layout ============ */
  .container {
      max-width: 768px;
      margin-left: var(--mb-1-5);
      margin-right: var(--mb-1-5);
  }

  .grid {
      display: grid;
      gap: 1.5rem;
  }

  .flex {
       display: flex;
      align-items: center;
      }
      
  }

/* ============ Button ============ */
  .button {
    display: inline-block;
    background-color: ${(props) => props.theme.firstColor};
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
  }

  .button--blue {
    background-color: hsl(230,69%,61%);
  }

  .button:hover {
    background-color: ${(props) => props.theme.firstColorAlt};
    cursor: pointer;
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
  }

  .button--small {
    padding: .75rem 1rem;
  }

  .button--link {
    padding: 0;
    background-color: transparent;
    color:  ${(props) => props.theme.firstColor};
  }

  .button--link:hover {
    background-color: transparent;
    color: ${(props) => props.theme.firstColorAlt};
  }
  
  svg.button__icon {
    vertical-align: middle;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
  }

  .button--white {
    background-color: #fff;
    color:${(props) => props.theme.firstColor};
  }
  
  .button--white:hover {
    background-color: #fff;
  }


  @media (min-width: 768px){
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    body {
      margin: 0;
    }

    .section {
      padding: 6rem 2rem;
    }

    .section__subtitle {
      margin-bottom: 4rem;
    }
  }

   
    @media (max-width: 350px){
    .container {
      margin-left: var(--mb-1);
      margin-right: var(--mb-1);
    }
    }
`;
