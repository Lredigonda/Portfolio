import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Navbar from "./app-components/navbar";
import HomePage from "./pages/home-page";
import About from "./pages/about";
import Projects from "./pages/projects";
import Curriculum from "./pages/curriculum";
import Footer from "./app-components/footer";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
