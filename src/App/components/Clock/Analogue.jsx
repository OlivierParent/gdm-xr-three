import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const ClockAnalogue = () => {
  const clockRef = useRef();
  const handHoursRef = useRef();
  const handMinutesRef = useRef();
  const handSecondsRef = useRef();

  useFrame(() => {
    const d = new Date();
    if (handHoursRef.current) {
      handHoursRef.current.rotation.y = MathUtils.degToRad(
        (d.getHours() + d.getMinutes() / 60) * -(360 / 12)
      );
    }
    if (handMinutesRef.current) {
      handMinutesRef.current.rotation.y = MathUtils.degToRad(
        d.getMinutes() * -(360 / 60)
      );
    }
    if (handSecondsRef.current) {
      handSecondsRef.current.rotation.y = MathUtils.degToRad(
        d.getSeconds() * -(360 / 60)
      );
    }
  });

  return (
    <group ref={clockRef}>
      <Text color={0x000000} fontSize={0.2} position={[0, -0.5, 0.01]}>
        Arteveldehogeschool
      </Text>
      <mesh>
        <circleGeometry args={[1.8, 60]} />
        <meshBasicMaterial color={0x999999} />
      </mesh>
      {Array(60)
        .fill(null)
        .map((value, index) => {
          const rad = MathUtils.degToRad((360 / 60) * index);
          return (
            <group key={index} position={[0, 0, 0.005]} rotation={[0, 0, rad]}>
              <mesh position={[1.6, 0, 0]}>
                <boxGeometry args={[index % 5 ? 0.15 : 0.2, 0.02, 0.01]} />
                <meshBasicMaterial color={index % 5 ? 0x666666 : 0x000000} />
              </mesh>
            </group>
          );
        })}
      <group rotation={[90, 90, 0].map((deg) => MathUtils.degToRad(deg))}>
        <group ref={handMinutesRef}>
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[1.4, 0.01, 0.04]} />
            <meshBasicMaterial color={"green"} />
          </mesh>
        </group>
        <group ref={handHoursRef}>
          <mesh position={[0.6, 0.01, 0]}>
            <boxGeometry args={[1.2, 0.02, 0.08]} />
            <meshBasicMaterial color={"red"} />
          </mesh>
        </group>
        <group ref={handSecondsRef}>
          <mesh position={[0.8, 0.02, 0]}>
            <boxGeometry args={[1.6, 0.01, 0.02]} />
            <meshBasicMaterial color={"blue"} />
          </mesh>
        </group>
      </group>
      <mesh rotation={[90, 0, 0].map((deg) => MathUtils.degToRad(deg))}>
        <coneGeometry args={[0.1, 0.1, 36]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
};

export default ClockAnalogue;
