import { folder, useControls } from "leva";

const ParticlesDefault = () => {
  const { color, complexity, radius, size } = useControls("Components", {
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
      size: {
        label: "Size",
        max: 2,
        min: 0.05,
        step: 0.01,
        value: 1,
      },
    }),
  });

  return (
    <points>
      <icosahedronGeometry args={[radius, complexity]} />
      <pointsMaterial color={color} size={size} />
    </points>
  );
};

export default ParticlesDefault;
