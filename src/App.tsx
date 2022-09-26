import Navbar from "./app-components/navbar";
import "./App.scss";
import Homepage from "./pages/home-page";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Navbar />
      </div>
      <div className="app__wrapper__content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
