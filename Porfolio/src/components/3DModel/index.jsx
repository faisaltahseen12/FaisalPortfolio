import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './styles.css';

const CubeModel = () => {
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#4f46e5"
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
};

export const ModelViewer = () => {
  return (
    <Canvas className="model-canvas">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CubeModel />
    </Canvas>
  );
}; 