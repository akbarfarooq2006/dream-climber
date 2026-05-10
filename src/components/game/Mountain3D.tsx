// src/components/game/Mountain3D.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

interface Mountain3DProps {
  color?: string;
  weather?: string;
}

function MountainMesh({ color = "#2d4a7a" }: { color?: string }) {
  const geometry = useMemo(() => {
    const geo = new THREE.ConeGeometry(4, 8, 4);
    return geo;
  }, []);

  return (
    <group>
      {/* Main Mountain Body */}
      <mesh geometry={geometry} position={[0, 0, 0]} castShadow>
        <MeshDistortMaterial
          distort={0.2}
          speed={2}
          color={color}
          roughness={0.8}
        />
      </mesh>
      
      {/* Snow Peak */}
      <mesh position={[0, 2.5, 0]}>
        <coneGeometry args={[1.5, 3, 4]} />
        <meshStandardMaterial color="#e8f4f8" roughness={0.1} />
      </mesh>
      
      {/* Base details */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 1.5) * 3,
          -3.5,
          Math.cos(i * 1.5) * 3
        ]}>
          <coneGeometry args={[1, 2, 3]} />
          <meshStandardMaterial color={color} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

export default function Mountain3D({ color, weather }: Mountain3DProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={45} />
        <ambientLight intensity={weather === 'stormy' ? 0.2 : 0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffd700" castShadow />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <MountainMesh color={color} />
        </Float>
        
        {weather === 'sunrise' && (
          <mesh position={[5, 10, -20]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshBasicMaterial color="#ff8c00" />
          </mesh>
        )}

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
