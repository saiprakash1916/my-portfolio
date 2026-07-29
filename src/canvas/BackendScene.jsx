import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles, RoundedBox, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

const CYAN = "#22d3ee";
const SLATE = "#1e293b";

// A labelled infrastructure node (rounded box with emissive rim).
function Node({ position, size = [1.4, 0.7, 1.4], color = CYAN, intensity = 0.6 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.material.emissiveIntensity =
      intensity + Math.sin(t * 2 + position[0]) * 0.15;
  });
  return (
    <RoundedBox ref={ref} args={size} radius={0.08} smoothness={4} position={position}>
      <meshStandardMaterial
        color={SLATE}
        emissive={color}
        emissiveIntensity={intensity}
        metalness={0.85}
        roughness={0.25}
      />
    </RoundedBox>
  );
}

// Stacked server rack made of thin glowing slabs.
function ServerRack({ position }) {
  return (
    <group position={position}>
      {[0, 1, 2, 3].map((i) => (
        <RoundedBox key={i} args={[1.5, 0.22, 1.1]} radius={0.04} smoothness={3} position={[0, i * 0.32 - 0.5, 0]}>
          <meshStandardMaterial color="#0f172a" emissive={CYAN} emissiveIntensity={0.35} metalness={0.9} roughness={0.3} />
        </RoundedBox>
      ))}
    </group>
  );
}

// Database cylinder.
function Database({ position }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.55, 0.55, 1, 48]} />
      <meshStandardMaterial color={SLATE} emissive={CYAN} emissiveIntensity={0.4} metalness={0.8} roughness={0.3} />
    </mesh>
  );
}

// A packet that races along a path, looping continuously.
function Packet({ path, speed = 0.35, offset = 0 }) {
  const ref = useRef();
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(path.map((p) => new THREE.Vector3(...p))),
    [path]
  );
  useFrame((state) => {
    const t = (state.clock.elapsedTime * speed + offset) % 1;
    const p = curve.getPointAt(t);
    if (ref.current) ref.current.position.copy(p);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={3} toneMapped={false} />
    </mesh>
  );
}

function Connection({ from, to }) {
  return <Line points={[from, to]} color={CYAN} lineWidth={1} transparent opacity={0.28} />;
}

function Infrastructure() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    // Subtle mouse-driven parallax tilt.
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.2, 0.04);
  });

  const cloud = [0, 3, 0];
  const gateway = [0, 1.2, 0];
  const services = [[-2.2, -0.6, 0], [0, -0.6, 0], [2.2, -0.6, 0]];
  const dbs = [[-1.3, -2.7, 0], [1.3, -2.7, 0]];

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        {/* Cloud */}
        <Node position={cloud} size={[2, 0.6, 1.4]} intensity={0.7} />
        {/* Gateway */}
        <Node position={gateway} size={[1.6, 0.7, 1.2]} intensity={0.9} />
        {/* Services as server racks */}
        {services.map((p, i) => (
          <ServerRack key={i} position={p} />
        ))}
        {/* Databases */}
        {dbs.map((p, i) => (
          <Database key={i} position={p} />
        ))}

        {/* Connections */}
        <Connection from={cloud} to={gateway} />
        {services.map((p, i) => (
          <Connection key={`gs${i}`} from={gateway} to={[p[0], p[1] + 0.5, p[2]]} />
        ))}
        {services.map((p, i) =>
          dbs.map((d, j) => (
            <Connection key={`sd${i}${j}`} from={[p[0], p[1] - 0.5, p[2]]} to={[d[0], d[1] + 0.5, d[2]]} />
          ))
        )}

        {/* Request packets */}
        <Packet path={[cloud, gateway, services[0], dbs[0]]} speed={0.22} offset={0} />
        <Packet path={[cloud, gateway, services[1], dbs[1]]} speed={0.18} offset={0.4} />
        <Packet path={[cloud, gateway, services[2], dbs[0]]} speed={0.26} offset={0.7} />
        <Packet path={[dbs[1], services[1], gateway, cloud]} speed={0.2} offset={0.2} />

        <Sparkles count={60} scale={9} size={2} speed={0.3} color={CYAN} opacity={0.5} />
      </Float>
    </group>
  );
}

export default function BackendScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      data-testid="hero-canvas"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 6]} intensity={40} color={CYAN} />
        <pointLight position={[-6, -3, 4]} intensity={20} color="#3b82f6" />
        <Environment preset="night" />
        <Infrastructure />
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur radius={0.7} />
          <Vignette eskil={false} offset={0.2} darkness={0.9} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
