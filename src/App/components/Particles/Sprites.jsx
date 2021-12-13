import { folder, useControls } from "leva";
import { useTexture } from "@react-three/drei";

import particleImage from "./assets/Arteveldehogeschool_favicon.png";

const ParticlesSprites = () => {
  const { color, complexity, opacity, radius, size, transparent } = useControls(
    "Components",
    {
      Icosahedron: folder({
        complexity: {
          label: "Complexity",
          max: 50,
          min: 0,
          step: 1,
          value: 0,
        },
        radius: {
          label: "Radius",
          max: 3,
          min: 0.5,
          step: 0.1,
          value: 2,
        },
      }),
      Material: folder({
        color: {
          label: "Color",
          value: "hsl(30, 100%, 70%)",
        },
        opacity: {
          label: "Opacity",
          hint: "`transparent` must be `true`",
          max: 1,
          min: 0,
          step: 0.01,
          value: 1,
        },
        size: {
          label: "Size",
          max: 2,
          min: 0.05,
          step: 0.01,
          value: 1,
        },
        transparent: {
          label: "Transparent",
          value: true,
        },
      }),
    }
  );

  const sprite = useTexture(particleImage, true);

  return (
    <points>
      <icosahedronGeometry args={[radius, complexity]} />
      <pointsMaterial
        color={color}
        map={sprite}
        opacity={opacity}
        size={size}
        transparent={transparent}
      />
    </points>
  );
};

export default ParticlesSprites;
