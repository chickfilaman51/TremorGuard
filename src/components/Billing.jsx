import { Suspense } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import modelPath from "../assets/TremorGuard.glb";
import CanvasLoader from "../Loader";
import React from 'react';
import styles, { layout } from "../style";

const Model = ({ scene }) => {
  return (
    <primitive 
      object={scene} 
      scale={[0.1, 0.1, 0.1]} // Keeping the model smaller
      position={[3.5, -1, 0]}  // Move the model rightward (X=1)
      rotation={[0, 0, 0]}
    />
  );
};

const Billing = () => {
  const { scene } = useGLTF(modelPath);

  return (
    <section id="product" className="flex flex-col md:flex-row items-center justify-between min-h-screen py-16 px-8">
      
      <div className="w-full md:w-3/5 h-[600px] relative flex justify-start mr-20"> {/* Increased margin-left to move canvas further left */}
        <Canvas 
          className="w-full h-full rounded-xl shadow-2xl"
          style={{ background: 'transparent' }}  // Make the background transparent
          camera={{ position: [0, 1, 5], fov: 50 }}  // Adjusted camera position for better zoom-out
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1} />
            <spotLight 
              position={[5, 5, 5]} 
              angle={0.4} 
              penumbra={1} 
              intensity={1.5} 
              castShadow 
            />
            <directionalLight
              position={[-5, 5, -5]}
              intensity={0.8}
              castShadow
            />
            
            <Model scene={scene} />
            
            <OrbitControls
              enableZoom={false}  // Disable zooming
              enablePan={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={10}  // Allow camera to move back more for zoom-out
              dampingFactor={0.05}
              autoRotate={false}  // Disabled camera rotation
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Section on the right */}
      <div className={`${layout.sectionInfo} w-1/2 ml-8`}> {/* Adjusted margin for the text */}
        <h2 className={styles.heading2}>The Design</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The stabilizer is a glove that has a spinning gyroscope directly on top of the hand. This is powered by a Raspberry Pi Pico, which uses an additional gyrosensor when the electrodes and the gyroscope are activated.<br></br><br></br>Try rotating the model on the right!
        </p>
      </div>
    </section>
  );
};

export default Billing;
