import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Fan({ position, color }) {
  const bladeRef = useRef(null);
  useFrame((_, delta) => {
    if (bladeRef.current) bladeRef.current.rotation.z += delta * 3.2;
  });

  return (
    <group position={position}>
      <mesh>
        <torusGeometry args={[0.16, 0.014, 12, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.1} toneMapped={false} />
      </mesh>
      <group ref={bladeRef}>
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <mesh key={deg} rotation={[0, 0, (deg * Math.PI) / 180]}>
            <boxGeometry args={[0.13, 0.02, 0.008]} />
            <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function LiquidCoolingTube({ start, end, color }) {
  const mid = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2];
  const length = Math.abs(end[1] - start[1]);

  return (
    <mesh position={mid}>
      <cylinderGeometry args={[0.017, 0.017, length, 12]} />
      <meshPhysicalMaterial
        color="#0f172a"
        emissive={color}
        emissiveIntensity={0.7}
        transmission={0.3}
        thickness={0.4}
        roughness={0.1}
        toneMapped={false}
      />
    </mesh>
  );
}

// Standing PC case. Height 1.55 → pass position.y = 0.775 from parent so it rests on desk (y=0).
function PcCase({ position }) {
  return (
    <group position={position}>
      {/* solid chassis (back/sides/top/bottom) */}
      <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
        <boxGeometry args={[0.85, 1.55, 0.55]} />
        <meshStandardMaterial color="#08090d" metalness={0.7} roughness={0.35} />
      </mesh>

      {/* tempered glass front panel, faces camera */}
      <mesh position={[0, 0, 0.28]}>
        <planeGeometry args={[0.8, 1.5]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          transmission={0.9}
          thickness={0.3}
          roughness={0.05}
          transparent
          opacity={0.22}
          side={2}
        />
      </mesh>

      {/* motherboard plate */}
      <mesh position={[-0.15, 0.15, -0.15]}>
        <boxGeometry args={[0.5, 0.9, 0.02]} />
        <meshStandardMaterial color="#0f172a" emissive="#164e63" emissiveIntensity={0.3} roughness={0.5} />
      </mesh>

      {/* GPU */}
      <mesh position={[-0.1, -0.25, 0.0]} castShadow>
        <boxGeometry args={[0.55, 0.14, 0.3]} />
        <meshStandardMaterial color="#111827" metalness={0.75} roughness={0.25} />
      </mesh>
      <mesh position={[-0.1, -0.25, 0.16]}>
        <circleGeometry args={[0.06, 24]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.85} toneMapped={false} />
      </mesh>

      {/* liquid cooling loop */}
      <LiquidCoolingTube start={[0.15, 0.55, 0.15]} end={[0.15, 0.15, 0.15]} color="#22d3ee" />
      <LiquidCoolingTube start={[0.15, 0.15, 0.15]} end={[0.15, -0.15, 0.15]} color="#a855f7" />

      {/* RGB fans behind the glass */}
      <Fan position={[0.18, 0.5, 0.15]} color="#22d3ee" />
      <Fan position={[0.18, 0.0, 0.15]} color="#a855f7" />
      <Fan position={[0.18, -0.5, 0.15]} color="#22d3ee" />

      {/* front IO strip */}
      <mesh position={[0, -0.77, 0.3]}>
        <boxGeometry args={[0.7, 0.018, 0.018]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.9} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default PcCase;