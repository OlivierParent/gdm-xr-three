import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";

const LightingThreePointGui = () => {
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

  const backLight = useControls("Lightings", {
    "Back Light": folder({
      color: { label: "Color", value: "hsl(0, 0%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.05,
        value: 0.75,
      },
    }),
  });
  const fillLight = useControls("Lightings", {
    "Fill Light": folder({
      color: { label: "Color", value: "hsl(210, 100%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.05,
        value: 0.75,
      },
    }),
  });
  const keyLight = useControls("Lightings", {
    "Key Light": folder({
      color: { label: "Color", value: "hsl(30, 100%, 70%)" },
      intensity: {
        label: "Intensity",
        max: 5,
        min: 0,
        step: 0.05,
        value: 0.75,
      },
    }),
  });

  const backLightRef = useRef();
  const fillLightRef = useRef();
  const keyLightRef = useRef();

  useHelper(backLightRef, SpotLightHelper, backLight.color);
  useHelper(fillLightRef, SpotLightHelper, fillLight.color);
  useHelper(keyLightRef, SpotLightHelper, keyLight.color);

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <spotLight
        castShadow={true}
        color={backLight.color}
        intensity={backLight.intensity}
        position={[4, 2, -4]}
        ref={backLightRef}
      />
      <spotLight
        castShadow={true}
        color={fillLight.color}
        intensity={fillLight.intensity}
        position={[-4, 2, 4]}
        ref={fillLightRef}
      />
      <spotLight
        castShadow={true}
        color={keyLight.color}
        intensity={keyLight.intensity}
        position={[4, 2, 4]}
        ref={keyLightRef}
      />
    </>
  );
};

export default LightingThreePointGui;
