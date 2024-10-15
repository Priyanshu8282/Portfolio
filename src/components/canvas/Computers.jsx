import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const [objectSettings, setObjectSettings] = useState({
    scale: 0.75,
    position: [0, -3.39, -1.5],
    rotation: [-0.01, -0.2, -0.1]
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setObjectSettings({
          scale: 0.5,
          position: [0, -2.8, -1],
          rotation: [-0.01, -0.2, -0.1]
        });
      } else {
        setObjectSettings({
          scale: 0.75,
          position: [0, -3.45, -1.5],
          rotation: [-0.01, -0.2, -0.1]
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct values

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[20, 100, 10]} angle={0.12} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
      <primitive 
        object={computer.scene} 
        scale={objectSettings.scale}
        position={objectSettings.position} 
        rotation={objectSettings.rotation} 
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  const [cameraSettings, setCameraSettings] = useState({
    position: [20, 3, 5],
    fov: 25
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraSettings({
          position: [10, 3, 5],
          fov: 35
        });
      } else {
        setCameraSettings({
          position: [20, 3, 5],
          fov: 25
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct values

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas 
      frameLoop='demand' 
      shadows 
      camera={{ position: cameraSettings.position, fov: cameraSettings.fov }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;