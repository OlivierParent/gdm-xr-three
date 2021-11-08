import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

const Suzanne = () => {
  const { nodes, materials } = useGLTF(suzanneGlb, true);

  return (
    <mesh geometry={nodes.Suzanne.geometry} material={materials["Paars"]} />
  );
};

export default Suzanne;
