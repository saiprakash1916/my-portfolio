import ServiceNode from "./ServiceNode";

function MicroserviceScene() {
    return (
        <>
            <ServiceNode position={[0, 2, 0]} />

            <ServiceNode position={[-2, 0, 0]} />

            <ServiceNode position={[0, 0, 0]} />

            <ServiceNode position={[2, 0, 0]} />

            <ServiceNode position={[-1, -2, 0]} />

            <ServiceNode position={[1, -2, 0]} />
        </>
    );
}

export default MicroserviceScene;