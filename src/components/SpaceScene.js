import React, { useRef, useMemo } from "react"
import { useFrame } from "react-three-fiber"
import * as THREE from "three"

const SpaceScene = () => {
  const group = useRef()

  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()

    const starsVertices = []

    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000

      starsVertices.push(x, y, z)
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    )

    return geometry
  }, [])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.0001
      group.current.rotation.y += 0.0001
    }
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry attach="geometry" {...starsGeometry} />
        <pointsMaterial size={2.5} color="white" sizeAttenuation={false} />
      </points>
    </group>
  )
}

export default SpaceScene
