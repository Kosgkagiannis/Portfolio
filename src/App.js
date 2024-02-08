import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { TechStack } from "./components/TechStack"
import { Canvas } from "react-three-fiber"
import { Projects } from "./components/Projects"
import { ContactForm } from "./components/ContactForm"
import SpaceScene from "./components/SpaceScene"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <TechStack />
      <Projects />
      <ContactForm />
    </div>
  )
}

export default App
