import "./App.css";
import RevealPage from "./components/RevealPage";
import GsapPage from "./components/GsapPage";
import FramerMotion from "./components/FramerMotion";
function App() {
  return (
    <div className="App">
      {/* ================================= react-reveal ================================= */}
      <RevealPage />
      {/* ================================= react-reveal ================================= */}
      {/* ================================= gsap scroll trigger ================================= */}
      {/* <GsapPage/> */}
      {/* ================================= gsap scroll trigger ================================= */}
      {/* ================================= framer motion ================================= */}
      {/* <FramerMotion/> */}
      {/* ================================= framer motion ================================= */}
    </div>
  );
}

export default App;
