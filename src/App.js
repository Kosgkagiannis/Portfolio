import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Canvas } from "react-three-fiber"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Canvas
        style={{
          position: "absolute",
          width: "100%",
          height: "65%",
          zIndex: -1,
        }}
      ></Canvas>
    </div>
  )
}

export default App
