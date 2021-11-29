import { MathUtils } from "three";
import { Plane, useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";

import suzanneGlb from "./suzanne.glb";

const SuzanneStandardMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  const { color, dithering, opacity, transparent } = useControls("Components", {
    Materials: folder({
      Material: folder({
        dithering: { label: "Dithering", value: false },
        opacity: { label: "Opacity", max: 1, min: 0, value: 1 },
        transparent: { label: "Transparent", value: false },
      }),
      "Standard Material": folder({
        color: { label: "Color", value: "#ffffff" },
      }),
    }),
  });

  return (
    <>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshStandardMaterial
          color={color}
          dithering={dithering}
          opacity={opacity}
          transparent={transparent}
        />
      </mesh>
      <Plane
        args={[2, 2]}
        position={[0, 0, -1]}
        rotation={[0, 0, 45].map((deg) => MathUtils.degToRad(deg))}
      />
    </>
  );
};

export default SuzanneStandardMaterial;
