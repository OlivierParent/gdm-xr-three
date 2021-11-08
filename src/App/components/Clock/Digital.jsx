import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const ClockDigital = () => {
  const clockRef = useRef();

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.rotation.x = MathUtils.degToRad(-30);
    }
  }, []);

  useFrame(() => {
    if (clockRef.current) {
      clockRef.current.text = new Date().toLocaleTimeString();
    }
  });

  return <Text ref={clockRef}>Digital Clock</Text>;
};

export default ClockDigital;
