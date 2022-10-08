import AboutMe from "../app-components/about-me";
import HomePanel from "../app-components/home-panel";
import "./home-page.scss";

function HomePage() {
  return (
    <div className="home-page">
      <HomePanel />
      <AboutMe />
    </div>
  );
}
export default HomePage;
