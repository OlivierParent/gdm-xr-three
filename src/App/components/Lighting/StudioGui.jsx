import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";

const LightingStudioGui = () => {
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

  const frontLight = useControls("Lightings", {
    "Front Light": folder({
      color: { label: "Color", value: "hsl(0, 0%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 0.4,
      },
    }),
  });
  const leftLight = useControls("Lightings", {
    "Left Light": folder({
      color: { label: "Color", value: "hsl(210, 100%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 1,
      },
    }),
  });
  const rightLight = useControls("Lightings", {
    "Right Light": folder({
      color: { label: "Color", value: "hsl(30, 100%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.1,
        value: 1,
      },
    }),
  });

  const frontLightRef = useRef();
  const leftLightRef = useRef();
  const rightLightRef = useRef();

  const helperSize = 0.5;

  useHelper(
    frontLightRef,
    DirectionalLightHelper,
    helperSize,
    frontLight.color
  );
  useHelper(leftLightRef, DirectionalLightHelper, helperSize, leftLight.color);
  useHelper(
    rightLightRef,
    DirectionalLightHelper,
    helperSize,
    rightLight.color
  );

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <directionalLight
        castShadow={true}
        color={frontLight.color}
        intensity={frontLight.intensity}
        position={[0, 2, 4]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={true}
        color={leftLight.color}
        intensity={leftLight.intensity}
        position={[-4, 0, 0]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={true}
        color={rightLight.color}
        intensity={rightLight.intensity}
        position={[4, 0, 0]}
        ref={rightLightRef}
      />
    </>
  );
};

export default LightingStudioGui;
