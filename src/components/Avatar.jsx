import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Avatar(props) {
  const avatar = useRef();
  const { scene } = useGLTF("/models/avatar-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { animations: SwaggerWalk } = useFBX("/models/SwaggerWalk.fbx");
  const { animations: HappyIdle } = useFBX("/models/HappyIdle.fbx");
  const { animations: StopWalking } = useFBX("/models/StopWalking.fbx");
  const { animations: MaleStandingPose } = useFBX("/models/MaleStandingPose.fbx");

  

  HappyIdle[0].name = "HappyIdle";

  SwaggerWalk[0].name = "SwaggerWalk";

  StopWalking[0].name = "StopWalking";

  MaleStandingPose[0].name = "MaleStandingPose";

  const { actions } = useAnimations([HappyIdle[0], SwaggerWalk[0], StopWalking[0], MaleStandingPose[0]], avatar);

  useEffect(() => {
    actions["SwaggerWalk"].reset().play();
  }, []);

  const { nodes, materials } = useGraph(clone);
  return (
    <group {...props} ref={avatar} dispose={null}>
      <group rotation-x={4.7}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials["Wolf3D_Body.002"]}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials["Wolf3D_Hair.002"]}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials["Wolf3D_Outfit_Bottom.002"]}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials["Wolf3D_Outfit_Footwear.002"]}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials["Wolf3D_Outfit_Top.002"]}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials["Wolf3D_Eye.002"]}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials["Wolf3D_Eye.002"]}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials["Wolf3D_Skin.002"]}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials["Wolf3D_Teeth.002"]}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/avatar-transformed.glb");
