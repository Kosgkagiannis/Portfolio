import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

const RotatingPlanet = ({ isMobile }) => {
  const computer = useGLTF(`${process.env.PUBLIC_URL}/planet/scene2.gltf`)

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 1.55}
        position={isMobile ? [1, 1, -1.5] : [1, 1, -2.5]}
        rotation={[-0.01, -1.2, -0.1]}
      />
    </mesh>
  )
}

const RotatingPlanetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 975px)")
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        zIndex: 1000,
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%",
          height: "500px",
          zIndex: 1000,
          pointerEvents: "none",
        }}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <Suspense>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={4}
          />
          <RotatingPlanet isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default RotatingPlanetCanvas
