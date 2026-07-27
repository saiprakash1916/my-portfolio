import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import DesktopSetup from "./RotatingCube";

function HeroCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas shadows camera={{ position: [0, 0, 9], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={1.3} castShadow />
        <pointLight position={[-3, 2, 3]} intensity={0.7} color="#38bdf8" />
        <DesktopSetup />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
