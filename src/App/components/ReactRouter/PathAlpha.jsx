import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";

const ReactRouterPathAlpha = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Text
      color={hover ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
      fontSize={0.5}
      onClick={() => navigate("/omega")}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      position={[0, 2, 0]}
      text="Path Alpha"
    />
  );
};

export default ReactRouterPathAlpha;
