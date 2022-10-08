import AboutMe from "../app-components/about-me";
import Contact from "../app-components/contact";
import HomePanel from "../app-components/home-panel";
import "./home-page.scss";

function HomePage() {
  return (
    <div className="home-page">
      <HomePanel />
      <AboutMe />
      <Contact />
    </div>
  );
}
export default HomePage;
