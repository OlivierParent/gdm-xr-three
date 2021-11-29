import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Route, Router } from "wouter";

import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";
import LightingStudio from "./components/Lighting/Studio";
import LightingStudioGui from "./components/Lighting/StudioGui";
import LightingThreePoint from "./components/Lighting/ThreePoint";
import LightingThreePointGui from "./components/Lighting/ThreePointGui";

import Button from "./components/Button";
import ButtonSpring from "./components/Button/Spring";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";
import Cube from "./components/Cube";
import Suzanne from "./components/Suzanne";
import SuzanneStandardMaterial from "./components/Suzanne/StandardMaterial";

const components = [
  "Button",
  "ButtonSpring",
  "Clock (analogue)",
  "Clock (digital)",
  "Cube",
  "Suzanne",
  "Suzanne (Standard)",
];

const lightings = ["Default", "Studio", "ThreePoint"];

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
  const { showGui, useLighting } = useControls("Lightings", {
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
      {showComponent("ButtonSpring") && <ButtonSpring />}
      {showComponent("Clock (analogue)") && <ClockAnalogue />}
      {showComponent("Clock (digital)") && <ClockDigital />}
      {showComponent("Cube") && <Cube />}
      <Suspense fallback={null}>
        {showComponent("Suzanne") && <Suzanne />}
        {showComponent("Suzanne (Standard)") && <SuzanneStandardMaterial />}
      </Suspense>
      {showLighting("Default") && !showGui && <Lighting />}
      {showLighting("Default") && showGui && <LightingGui />}
      {showLighting("Studio") && !showGui && <LightingStudio />}
      {showLighting("Studio") && showGui && <LightingStudioGui />}
      {showLighting("ThreePoint") && !showGui && <LightingThreePoint />}
      {showLighting("ThreePoint") && showGui && <LightingThreePointGui />}
      {/* <Router>
                <Route component={} path="" />
            </Router> */}
    </>
  );
};

export default Content;
