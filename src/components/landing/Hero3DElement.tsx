import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated Cursor Component
const AnimatedCursor = ({ targetPosition }: { targetPosition: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<THREE.Vector3[]>([]);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth cursor movement
      const time = state.clock.elapsedTime;
      const x = targetPosition[0] + Math.sin(time * 0.5) * 0.5;
      const y = targetPosition[1] + Math.cos(time * 0.7) * 0.3;
      const z = targetPosition[2];
      
      meshRef.current.position.set(x, y, z);
      
      // Create trail effect
      const newPos = new THREE.Vector3(x, y, z);
      setPositions(prev => {
        const updated = [newPos, ...prev];
        return updated.slice(0, 10); // Keep last 10 positions
      });
    }
  });

  return (
    <group>
      {/* Cursor pointer */}
      <mesh ref={meshRef}>
        <coneGeometry args={[0.05, 0.15, 8]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
    </group>
  );
};

// Particle Wave Component (Main Animation)
const ParticleWave = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const gridWidth = 120; // More particles for smoother wave
    const gridDepth = 40;
    const particleCount = gridWidth * gridDepth;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Orange to Maroon gradient colors
    const colorStart = new THREE.Color("#3B82F6"); // Orange
    const colorMid = new THREE.Color("#4A90FF"); // Light Orange
    const colorEnd = new THREE.Color("#000080"); // Maroon
    
    let i = 0;
    for (let z = 0; z < gridDepth; z++) {
      for (let x = 0; x < gridWidth; x++) {
        // Spread particles across bottom of screen
        positions[i * 3 + 0] = (x / gridWidth) * 20 - 10; // X: -10 to 10
        positions[i * 3 + 1] = -3; // Y: Start at bottom
        positions[i * 3 + 2] = (z / gridDepth) * 8 - 4; // Z: -4 to 4
        
        // Color gradient based on depth
        const depthRatio = z / gridDepth;
        let color;
        if (depthRatio < 0.5) {
          color = colorStart.clone().lerp(colorMid, depthRatio * 2);
        } else {
          color = colorMid.clone().lerp(colorEnd, (depthRatio - 0.5) * 2);
        }
        
        colors[i * 3 + 0] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        i++;
      }
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      const gridWidth = 120;
      const gridDepth = 40;
      
      for (let i = 0; i < positionArray.length / 3; i++) {
        const x = positionArray[i * 3 + 0];
        const z = positionArray[i * 3 + 2];
        
        // Create flowing wave pattern (like reference image)
        const wave1 = Math.sin(x * 0.5 + time * 1.5) * 0.8;
        const wave2 = Math.sin(z * 0.8 + time * 1.2) * 0.5;
        const wave3 = Math.sin((x + z) * 0.3 + time * 0.8) * 0.6;
        
        // Combine waves for complex motion
        const y = wave1 + wave2 + wave3 - 2;
        
        positionArray[i * 3 + 1] = y;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Slight rotation for dynamic feel
      pointsRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Ambient Particles (Background depth effect)
const AmbientParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#3B82F6"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      {/* Ambient lighting for subtle depth */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#3B82F6" />
      <pointLight position={[0, -5, -5]} intensity={0.5} color="#000080" />
      
      {/* Main particle wave */}
      <ParticleWave />
      
      {/* Ambient background particles */}
      <AmbientParticles />
      
      {/* Animated cursor elements */}
      <AnimatedCursor targetPosition={[-3, 1, 2]} />
      <AnimatedCursor targetPosition={[4, 0.5, 1]} />
    </>
  );
};

// Exported Component
const Hero3DElement = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[60vh] pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DElement;