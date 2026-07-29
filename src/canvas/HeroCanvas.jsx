import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import WorkstationModel from "./WorkstationModel";

function HeroCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        camera={{ position: [0, 0.3, 8.5], fov: 38 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0.3, 8.5]} fov={38} />

        {/* fill: soft sky/ground light so nothing collapses to pure black */}
        <hemisphereLight args={["#8fb8ff", "#0a0a12", 0.65]} />

        {/* key light */}
        <directionalLight position={[3, 6, 6]} intensity={2.2} castShadow />

        {/* rim light from behind, separates silhouette from background */}
        <directionalLight position={[-2, 3, -5]} intensity={1.1} color="#93c5fd" />

        {/* accent colors */}
        <pointLight position={[-3.5, 1.5, 3]} intensity={1.1} color="#22d3ee" />
        <pointLight position={[3.2, 1.2, 2.5]} intensity={0.8} color="#a855f7" />

        {/* soft front fill so the desk/keyboard face isn't underexposed */}
        <pointLight position={[0, 1, 6]} intensity={0.6} color="#ffffff" />

        <WorkstationModel />

        <EffectComposer>
          <Bloom intensity={0.4} luminanceThreshold={0.55} luminanceSmoothing={0.85} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default HeroCanvas;