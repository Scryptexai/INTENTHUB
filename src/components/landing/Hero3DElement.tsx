import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Geometric Node Component
const GeometricNode = ({ position, scale = 1, color = "#FF7621" }: { position: [number, number, number], scale?: number, color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

// Wireframe Cube Component
const WireframeCube = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="#1a1a1a" wireframe />
    </mesh>
  );
};

// Connection Lines Component
const ConnectionLines = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const points = [];
    // Create connection lines between nodes
    const connections = [
      [[0, 0, 0], [2, 1.5, -1]],
      [[0, 0, 0], [-2, -1, 1]],
      [[0, 0, 0], [1.5, -1.5, -0.5]],
      [[2, 1.5, -1], [3, 0, 0]],
      [[-2, -1, 1], [-3, 0.5, -0.5]],
    ];
    
    connections.forEach(([start, end]) => {
      points.push(new THREE.Vector3(...start as [number, number, number]));
      points.push(new THREE.Vector3(...end as [number, number, number]));
    });
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#1a1a1a" opacity={0.5} transparent />
    </lineSegments>
  );
};

// Floating Particles
const Particles = ({ count = 50 }: { count?: number }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      ];
      const scale = Math.random() * 0.05 + 0.02;
      temp.push({ position, scale });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        const matrix = new THREE.Matrix4();
        const y = particle.position[1] + Math.sin(state.clock.elapsedTime + i) * 0.02;
        matrix.setPosition(
          particle.position[0],
          y,
          particle.position[2]
        );
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
        mesh.current!.setMatrixAt(i, matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#FF7621" />
    </instancedMesh>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF7621" />
      
      {/* Central geometric cluster */}
      <group position={[0, 0, 0]}>
        <GeometricNode position={[0, 0, 0]} scale={1.2} color="#FF7621" />
        <GeometricNode position={[2, 1.5, -1]} scale={0.6} color="#1a1a1a" />
        <GeometricNode position={[-2, -1, 1]} scale={0.5} color="#FF7621" />
        <GeometricNode position={[1.5, -1.5, -0.5]} scale={0.4} color="#1a1a1a" />
        <GeometricNode position={[3, 0, 0]} scale={0.3} color="#FF7621" />
        <GeometricNode position={[-3, 0.5, -0.5]} scale={0.35} color="#1a1a1a" />
        
        {/* Wireframe cubes */}
        <WireframeCube position={[4, 2, -2]} scale={0.5} />
        <WireframeCube position={[-4, -2, 1]} scale={0.4} />
        
        {/* Connection lines */}
        <ConnectionLines />
        
        {/* Particles */}
        <Particles count={30} />
      </group>
    </>
  );
};

// Exported Component
const Hero3DElement = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DElement;
