"use client";

import { Canvas } from "@react-three/fiber";

import { Avatar } from "./Avatar";

const RenderModel = ({  }) => {
  return (
    <div className="h-screen fixed w-full">
    <Canvas camera={{ position: [0, 2, 4], fov: 30 }}>
        <group position-y={-1} position-x={-1}>
          <Avatar />
        </group>
      
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[1, 2, 5]}
        castShadow
        intensity={3}
        color={"0xffffff"}
      />
    </Canvas>
    </div>
  );
};

export default RenderModel;
