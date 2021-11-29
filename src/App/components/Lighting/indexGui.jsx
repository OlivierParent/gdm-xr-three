import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useThree } from "@react-three/fiber";

const LightingGui = () => {
  const { scene } = useThree();
  const targetObject = new Object3D();
  scene.add(targetObject);

  const ambientLight = useControls("Lightings", {
    "Ambient Light": folder({
      color: { label: "Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.1,
      },
    }),
  });
  const directionalLight = useControls("Lightings", {
    "Directional Light": folder({
      color: { label: "Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.1,
      },
    }),
  });
  const hemisphereLight = useControls("Lightings", {
    "Hemisphere Light": folder({
      color: { label: "Color", value: "#ffffff" },
      groundColor: { label: "Ground Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.1,
      },
    }),
  });
  const pointLight = useControls("Lightings", {
    Point: folder({
      color: { label: "Color", value: "#ffcc77" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.5,
      },
    }),
  });
  const spotLight = useControls("Lightings", {
    Spotlight: folder({
      color: { label: "Color", value: "#ffcc77" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.5,
      },
      penumbra: {
        label: "Penumbra",
        max: 1,
        min: 0,
        step: 0.1,
        value: 0.5,
      },
      position: {
        label: "Position",
        step: 0.5,
        value: { x: 0, y: 4, z: 0 },
      },
      target: {
        label: "Target",
        step: 0.5,
        value: { x: 0, y: 0, z: 0 },
      },
    }),
  });
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();

  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLight.color
  );
  useHelper(hemisphereLightRef, HemisphereLightHelper, helperSize);
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLight.color);
  useHelper(spotLightRef, SpotLightHelper, spotLight.color);

  useEffect(() => {
    targetObject.position.x = spotLight.target.x;
    targetObject.position.y = spotLight.target.y;
    targetObject.position.z = spotLight.target.z;
  });

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <directionalLight
        color={directionalLight.color}
        intensity={directionalLight.intensity}
        position={[4, 4, 1]}
        ref={directionalLightRef}
      />
      <hemisphereLight
        color={hemisphereLight.color}
        groundColor={hemisphereLight.groundColor}
        intensity={hemisphereLight.intensity}
        position={[0, 1, 0]}
        ref={hemisphereLightRef}
      />
      <pointLight
        color={pointLight.color}
        intensity={pointLight.intensity}
        position={[-4, 1, -4]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        color={spotLight.color}
        intensity={spotLight.intensity}
        penumbra={spotLight.penumbra}
        position={[
          spotLight.position.x,
          spotLight.position.y,
          spotLight.position.z,
        ]}
        ref={spotLightRef}
        target={targetObject}
      />
    </>
  );
};

export default LightingGui;
