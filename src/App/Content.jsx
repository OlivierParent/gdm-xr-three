import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Route, Router } from "wouter";

import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";

import Button from "./components/Button";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";
import Cube from "./components/Cube";
import Suzanne from "./components/Suzanne";

const components = [
  "Button",
  "Clock (analogue)",
  "Clock (digital)",
  "Cube",
  "Suzanne",
];

const lightings = ["Default"];

const Content = () => {
  const { enableOrbitControls } = useControls("Controls", {
    enableOrbitControls: {
      label: "Orbit Controls",
      value: true,
    },
  });
  const { showAxesHelper, showGridHelper } = useControls("Helpers", {
    showAxesHelper: { label: "Axes", value: false },
    showGridHelper: { label: "Grid", value: false },
  });
  const { useComponent } = useControls("General", {
    useComponent: {
      label: "Component",
      options: components,
      value: "Cube",
    },
  });
  const { showGui, useLighting } = useControls("Lighting", {
    useLighting: {
      label: "Lighting",
      options: lightings,
      value: "Default",
    },
    showGui: { label: "GUI", value: false },
  });

  function showComponent(name) {
    return useComponent === name;
  }

  function showLighting(name) {
    return useLighting === name;
  }

  return (
    <>
      <>
        {showAxesHelper && <axesHelper />}
        {showGridHelper && <gridHelper />}
        {enableOrbitControls && <OrbitControls />}
      </>
      {showComponent("Button") && <Button />}
      {showComponent("Clock (analogue)") && <ClockAnalogue />}
      {showComponent("Clock (digital)") && <ClockDigital />}
      {showComponent("Cube") && <Cube />}
      <Suspense fallback={null}>
        {showComponent("Suzanne") && <Suzanne />}
      </Suspense>
      {showLighting("Default") && !showGui && <Lighting />}
      {showLighting("Default") && showGui && <LightingGui />}
      {/* <Router>
                <Route component={} path="" />
            </Router> */}
    </>
  );
};

export default Content;
