import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useSpring, animated } from '@react-spring/three'; // Import animated from react-spring

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  const groupRef = useRef(); // Reference for the group containing the model

  // Spring animation for scale
  const { scale } = useSpring({
    from: { scale: [0, 0, 0] }, // Start from zero scale
    to: { scale: [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1, isMobile ? 0.7 : 1] }, // Target scale based on isMobile
    config: { duration: 1000 }, // Duration of animation (1000ms = 1 second)
  });

  return (
    <animated.group ref={groupRef} scale={scale} position={[0, -0.25, 0]} rotation={[0, 0, 0]}>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </animated.group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{ position: [20, 3, 5], fov: 12 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
