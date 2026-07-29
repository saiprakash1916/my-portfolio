import { useMemo } from "react";
import * as THREE from "three";
import PcCase from "./PcCase";

/* ---------- robust curved screen geometry (no cylinder-arc bugs) ---------- */
function useCurvedPlaneGeometry(width, height, curveRadius, segments = 64) {
  return useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segments, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const angle = x / curveRadius;
      const newX = Math.sin(angle) * curveRadius;
      const newZ = Math.cos(angle) * curveRadius - curveRadius;
      pos.setX(i, newX);
      pos.setZ(i, newZ);
    }
    geo.computeVertexNormals();
    return geo;
  }, [width, height, curveRadius, segments]);
}

function Desk() {
  return (
    <mesh receiveShadow position={[0, -0.075, 0]}>
      <boxGeometry args={[6.6, 0.15, 2.7]} />
      <meshPhysicalMaterial color="#1a1d24" metalness={0.25} roughness={0.65} clearcoat={0.2} />
    </mesh>
  );
}

function CurvedMonitor({ position }) {
  const chassisGeo = useCurvedPlaneGeometry(4.75, 1.65, 6.5, 64);
  const screenGeo = useCurvedPlaneGeometry(4.5, 1.4, 6.5, 64);

  return (
    <group position={position}>
      {/* chassis backing, sits slightly behind the screen */}
      <mesh geometry={chassisGeo} position={[0, 0, -0.06]} castShadow receiveShadow>
        <meshPhysicalMaterial color="#1c1f27" metalness={0.8} roughness={0.3} clearcoat={0.4} side={2} />
      </mesh>

      {/* black inactive screen */}
      <mesh geometry={screenGeo} position={[0, 0, 0.01]}>
        <meshPhysicalMaterial
          color="#050608"
          metalness={0.2}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* aluminum stand pole */}
      <mesh position={[0, -1.15, -0.25]} castShadow>
        <cylinderGeometry args={[0.055, 0.08, 0.7, 20]} />
        <meshStandardMaterial color="#8b93a1" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* stand foot */}
      <mesh position={[0, -1.48, -0.15]} castShadow>
        <boxGeometry args={[1.1, 0.05, 0.55]} />
        <meshStandardMaterial color="#8b93a1" metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );
}

function Keyboard({ position }) {
  const keyColors = ["#2a2f3a", "#242832"];
  const keyPositions = useMemo(() => {
    const rows = 5;
    const cols = 14;
    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        arr.push([-0.75 + c * 0.11, 0.045, -0.19 + r * 0.1]);
      }
    }
    return arr;
  }, []);

  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.08, 0.55]} />
        <meshPhysicalMaterial color="#20242e" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.035, 0]}>
        <boxGeometry args={[1.6, 0.02, 0.46]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.9} toneMapped={false} transparent opacity={0.55} />
      </mesh>
      {keyPositions.map((p, i) => (
        <mesh key={i} position={p} castShadow>
          <boxGeometry args={[0.09, 0.03, 0.09]} />
          <meshStandardMaterial color={keyColors[i % 2]} roughness={0.55} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function MousePad({ position }) {
  return (
    <mesh position={position} receiveShadow>
      <boxGeometry args={[1.0, 0.015, 0.7]} />
      <meshStandardMaterial color="#1a1024" emissive="#7c3aed" emissiveIntensity={0.4} roughness={0.5} />
    </mesh>
  );
}

function Mouse({ position }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]} castShadow>
      <capsuleGeometry args={[0.06, 0.1, 8, 16]} />
      <meshPhysicalMaterial color="#22262f" metalness={0.5} roughness={0.3} clearcoat={0.6} />
    </mesh>
  );
}

function StudioSpeaker({ position }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.32, 0.55, 0.3]} />
        <meshPhysicalMaterial color="#20232b" metalness={0.4} roughness={0.4} clearcoat={0.3} />
      </mesh>
      <mesh position={[0, 0.1, 0.16]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial color="#111318" roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.12, 0.16]}>
        <circleGeometry args={[0.06, 32]} />
        <meshStandardMaterial color="#111318" roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.28, 0.16]}>
        <circleGeometry args={[0.015, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.2} toneMapped={false} />
      </mesh>
    </group>
  );
}

function WorkstationModel() {
  return (
    <group position={[0, -0.5, 0]}>
      <Desk />
      <CurvedMonitor position={[0, 1.45, -1.0]} />
      <Keyboard position={[0, 0.04, 1.0]} />
      <MousePad position={[1.4, 0.008, 1.05]} />
      <Mouse position={[1.4, 0.06, 1.05]} />
      <StudioSpeaker position={[-2.6, 0.275, 0.7]} />
      <StudioSpeaker position={[2.6, 0.275, 0.7]} />
      <PcCase position={[2.9, 0.775, 0.0]} />
    </group>
  );
}

export default WorkstationModel;