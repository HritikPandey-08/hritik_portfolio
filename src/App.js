import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
// import ResumeDetails from "./components/Resume/ResumeDetails"
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectExp from "./components/ProjectExp/ProjectExp";
import Footer from "./components/Footer/Footer";
import Languages from "./components/Languages/Language";
import ContactMe from "./components/ContactMe/ContactMe";
// import ResumeContent from "./components/Sidebar/ResumeContent";
// import CollapsibleContent from "./components/Sidebar/collapsible";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      {/* <ResumeContent/> */}
      {/* <ResumeDetails/> */}
      {/* <CollapsibleContent/> */}
      <ProjectExp />
      <Languages />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
