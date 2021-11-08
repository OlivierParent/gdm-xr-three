import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

const LightingGui = () => {
  const { scene } = useThree();
  const targetObject = new Object3D();
  scene.add(targetObject);

  const { ambientLightColor, ambientLightIntensity } = useControls(
    "Lighting - Ambient",
    {
      ambientLightColor: { label: "Color", value: "#ffffff" },
      ambientLightIntensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.1,
      },
    }
  );
  const { directionalLightColor, directionalLightIntensity } = useControls(
    "Lighting - Directional",
    {
      directionalLightColor: { label: "Color", value: "#ffffff" },
      directionalLightIntensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.1,
      },
    }
  );
  const { pointLightColor, pointLightIntensity } = useControls(
    "Lighting - Point",
    {
      pointLightColor: { label: "Color", value: "#ffcc77" },
      pointLightIntensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.5,
      },
    }
  );
  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPenumbra,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spot", {
    spotLightColor: { label: "Color", value: "#ffcc77" },
    spotLightIntensity: {
      label: "Intensity",
      max: 5,
      min: 0,
      step: 0.1,
      value: 0.5,
    },
    spotLightPenumbra: {
      label: "Penumbra",
      max: 1,
      min: 0,
      step: 0.1,
      value: 0.5,
    },
    spotLightPosition: {
      label: "Position",
      step: 0.5,
      value: { x: 0, y: 4, z: 0 },
    },
    spotLightTarget: {
      label: "Target",
      step: 0.5,
      value: { x: 0, y: 0, z: 0 },
    },
  });
  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();

  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor);
  useHelper(spotLightRef, SpotLightHelper, spotLightColor);

  useEffect(() => {
    targetObject.position.x = spotLightTarget.x;
    targetObject.position.y = spotLightTarget.y;
    targetObject.position.z = spotLightTarget.z;
  });

  return (
    <>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[4, 4, 1]}
        ref={directionalLightRef}
      />
      <pointLight
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[-4, 1, -4]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={spotLightPenumbra}
        position={[
          spotLightPosition.x,
          spotLightPosition.y,
          spotLightPosition.z,
        ]}
        ref={spotLightRef}
        target={targetObject}
      />
    </>
  );
};

export default LightingGui;
