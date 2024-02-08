import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { TechStack } from "./components/TechStack"
import { Canvas } from "react-three-fiber"
import { Projects } from "./components/Projects"
import { ContactForm } from "./components/ContactForm"
import StarsCanvas from "./components/canvas/Stars"

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <StarsCanvas />
      </div>
      <div className="Content">
        <NavBar />
        <Banner />
        <TechStack />
        <Projects />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
