"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingMap() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Charge le motif de map (svg as texture)
  const texture = useLoader(THREE.TextureLoader, "/assets/map-pattern.svg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.05; // Rotation lente
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
      <circleGeometry args={[5, 64]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={0.4} 
        color="#E94B2B" 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function OrbitalMap() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <RotatingMap />
      </Canvas>
    </div>
  );
}
