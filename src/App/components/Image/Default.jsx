import { DoubleSide } from "three";
import { useTexture, Plane } from "@react-three/drei";

import UV_Grid_Sm from "./assets/UV_Grid_Sm.jpg";

const ImageDefault = () => {
  const texture = useTexture(UV_Grid_Sm);

  return (
    <Plane args={[1, 1]}>
      <meshStandardMaterial center map={texture} side={DoubleSide} />
    </Plane>
  );
};

export default ImageDefault;
