import { useState } from "react";
import { animated, useSpring } from "@react-spring/three";

const Cube = () => {
  const [toggle, setToggle] = useState(true);
  const { position } = useSpring({
    position: toggle ? [0, 0, 0] : getPosition(),
  });

  function getPosition() {
    return [4, 4, 0].map((value) => (Math.random() * 2 - 1) * value);
  }

  return (
    <animated.mesh onClick={() => setToggle(!toggle)} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xffffff * Math.random()} />
    </animated.mesh>
  );
};

export default Cube;
