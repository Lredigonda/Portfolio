import Navbar from "./app-components/navbar";
import Homepage from "./pages/home-page";

import "./App.scss";
import Footer from "./app-components/footer";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
