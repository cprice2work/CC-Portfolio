import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/layout/NavBar";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { TopBanner } from "./components/layout/TopBanner";
import { HeroSection } from "./components/sections/HeroSection";
import { Container } from "./components/styles/common/Container.styled";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection";

const App = () => {

  const theme = {
      colors: {
        white: "rgba(240, 247, 255, 1)", //rgba(240, 247, 255, 1)
        navyBlue: "rgba(2, 12, 27, 1)", // rgba(2, 12, 27, 1)
        lightNavyBlue: "rgba(4, 22, 48, 1)",  //rgba(4, 22, 48, 1)
        green: "rgba(0, 206, 158, 1)",  //rgba(0, 206, 158, 1)
        orange: "rgba(249, 105, 14, 1)",  //rgba(249, 105, 14, 1)
        purple: "rgba(102, 51, 152, 1)",  //rgba(102, 51, 152, 1)
        
      },
      mobile: "768px",
      transition: "all 650ms ease-in-out",
    };


  return (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <TopBanner/>
      <NavBar/>
      <HeroSection/>
      <Container>
        <AboutSection/>
        <ProjectsSection/>
        <ServicesSection/>
        <ContactSection/>
      </Container>
    </ThemeProvider>
   
    </>
  );
} 

export default App;
