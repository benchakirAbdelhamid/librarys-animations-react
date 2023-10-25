import "./App.css";
import GsapPage from "./components/GsapPage";
import FramerMotion from "./components/FramerMotion";
function App() {
  return (
    <div className="App">
      {/* ================================= gsap scroll trigger ================================= */}
      <GsapPage/>
      {/* ================================= gsap scroll trigger ================================= */}
      {/* ================================= framer motion ================================= */}
      <FramerMotion/>
      {/* ================================= framer motion ================================= */}
    </div>
  );
}

export default App;
