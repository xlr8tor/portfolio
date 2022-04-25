import { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualificaton from "./Components/Qualification/Qualification";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { darkTheme, lightTheme } from "./Theme";
import { ThemeProvider } from "styled-components";

function App() {
  const getMode = () => {
    const savedmode = JSON.parse(localStorage.getItem("theme"));
    return savedmode || "light";
  };

  const [theme, setTheme] = useState(getMode);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Header theme={theme} themeToggler={themeToggler} />
        <Home />
        <About />
        <Skills />
        <Qualificaton />
        <Services />
        <Portfolio />
        <Project />
        <Contact />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
