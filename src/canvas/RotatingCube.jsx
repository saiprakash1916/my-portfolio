import { useMemo } from "react";

function DesktopSetup() {
  const deskMaterial = useMemo(() => ({ color: "#1f2937" }), []);
  const monitorMaterial = useMemo(() => ({ color: "#111827" }), []);
  const screenMaterial = useMemo(() => ({ color: "#0f172a" }), []);

  return (
    <group>
      <mesh position={[0, -1.2, 0]} receiveShadow>
        <boxGeometry args={[8, 0.3, 4]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>

      <mesh position={[0, -0.75, -0.2]} receiveShadow>
        <boxGeometry args={[7.2, 0.15, 3.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      <mesh position={[-2.1, 0.4, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.6, 0.1]} />
        <meshStandardMaterial color={deskMaterial.color} />
      </mesh>
      <mesh position={[-2.1, 0.4, 0.25]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.4, 0.05]} />
        <meshStandardMaterial color={screenMaterial.color} />
      </mesh>

      <mesh position={[2.1, 0.4, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.6, 0.1]} />
        <meshStandardMaterial color={monitorMaterial.color} />
      </mesh>
      <mesh position={[2.1, 0.4, 0.25]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.4, 0.05]} />
        <meshStandardMaterial color={screenMaterial.color} />
      </mesh>

      <mesh position={[-2.1, -0.55, 0.6]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[2.1, -0.55, 0.6]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[0, -0.4, 0.9]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.3, 1.6]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
      <mesh position={[0, -0.9, 1.1]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.8, 0.2]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>
      <mesh position={[0.8, -1.0, 0.95]} castShadow receiveShadow>
        <boxGeometry args={[0.25, 0.35, 0.25]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[-0.8, -1.0, 0.95]} castShadow receiveShadow>
        <boxGeometry args={[0.25, 0.35, 0.25]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      <mesh position={[0, -0.35, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.4, 1.4]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
    </group>
  );
}

export default DesktopSetup;
