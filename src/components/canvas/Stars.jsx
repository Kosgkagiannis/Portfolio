import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

const Stars = (props) => {
  const ref = useRef()
  const [positions] = useState(() => {
    const count = 10000
    const radius = 1.2
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const x = Math.random() * radius * 2 - radius
      const y = Math.random() * radius * 2 - radius
      const z = Math.random() * radius * 2 - radius

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 80
    ref.current.rotation.y -= delta / 80
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas style={{ height: "1000px" }} camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
