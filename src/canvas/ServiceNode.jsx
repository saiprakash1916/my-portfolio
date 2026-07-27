function ServiceNode({ position }) {
    return (
        <mesh position={position}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#22d3ee" />
        </mesh>
    );
}

export default ServiceNode;