"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";

const animations = [
  "Walking",
  "HappyIdle",
  "MaleStandingPose",
];

const RenderModel = ({}) => {
  const [currentAnimation, setCurrentAnimation] = useState("Walking");

  return (
    <div className="h-screen fixed w-full">
      <div className="absolute top-4 left-4 z-10">
        <select
          value={currentAnimation}
          onChange={(e) => setCurrentAnimation(e.target.value)}
          className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-4 py-2 outline-none"
        >
          {animations.map((anim) => (
            <option key={anim} value={anim}>
              {anim}
            </option>
          ))}
        </select>
      </div>
      <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
        <group position={[0, -1, 0]}>
          <Avatar animation={currentAnimation} />
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
