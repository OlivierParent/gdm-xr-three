import { useState } from "react";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

const Spring = () => {
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { opacity, rotation, scale } = useSpring({
    opacity: toggle ? 0.5 : 0.2,
    rotation: toggle
      ? [-45, 0, 0].map((deg) => MathUtils.degToRad(deg))
      : [0, 0, 0],
    scale: hover ? [1.5, 1.25, 1] : [1, 1, 1],
  });

  return (
    <animated.group
      onClick={() => setToggle(!toggle)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      rotation={rotation}
    >
      <animated.mesh scale={scale}>
        <planeGeometry args={[1, 0.5]} />
        <animated.meshBasicMaterial
          color={0xff0000}
          opacity={opacity}
          transparent={true}
        />
      </animated.mesh>
      <Text fontSize={0.2} position={[0, 0, 0.01]}>
        Click Me!
      </Text>
    </animated.group>
  );
};

export default Spring;