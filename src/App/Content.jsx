import { Suspense } from "react";
import { HashRouter as Router, Navigate, Routes, Route } from "react-router-dom"
import { MathUtils } from "three";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
  TrackballControls,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  Button,
  Clock,
  Cube,
  Image,
  Lighting,
  LoremIpsum,
  Particles,
  ReactRouter,
  ReactRouterPathAlpha,
  ReactRouterPathOmega,
  Suzanne,
} from "./components";

const COMPONENT = Object.freeze({
  Animation: "Animation",
  Button: "Button",
  Clock: "Clock",
  Cube: "Cube",
  Cube_Positioned: "Cube_Positioned",
  None: "None",
  LoremIpsum: "LoremIpsum",
  Particles: "Particles",
  ReactRouter: "ReactRouter",
  Suzanne: "Suzanne",
});

const CONTROLS = Object.freeze({
  Orbit: "Orbit",
  Trackball: "Trackball",
});

const Content = () => {
  const {
    enableAxesHelper,
    enableEffects,
    enableGizmoHelper,
    enableGridHelper,
    enableStats,
    useInputControls,
  } = useControls("General", {
    enableEffects: { label: "Effects", value: false },
    enableStats: { label: "Stats", value: false },
    Helpers: folder({
      enableAxesHelper: { label: "Axes", value: false },
      enableGizmoHelper: { label: "Gizmo", value: true },
      enableGridHelper: { label: "Grid", value: false },
    }),
    "Input Controls": folder({
      useInputControls: {
        label: "Controls",
        options: CONTROLS,
        value: CONTROLS.Orbit,
      },
    }),
  });

  const { useComponent } = useControls("Components", {
    useComponent: {
      label: "Component",
      options: {
        "None             ": COMPONENT.None,
        "Button           ": COMPONENT.Button,
        "Clock            ": COMPONENT.Clock,
        "Cube             ": COMPONENT.Cube,
        "Cube (positioned)": COMPONENT.Cube_Positioned,
        "Image            ": COMPONENT.Image,
        "Lorem Ipsum      ": COMPONENT.LoremIpsum,
        "Particles        ": COMPONENT.Particles,
        "React Router     ": COMPONENT.ReactRouter,
        "Suzanne          ": COMPONENT.Suzanne,
      },
      value: COMPONENT.Suzanne,
    },
  });

  function enableInputControls(name) {
    return useInputControls === name;
  }

  function enableComponent(name) {
    return useComponent === name;
  }

  return (
    <>
      <>
        {enableInputControls(CONTROLS.Orbit) && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {enableInputControls(CONTROLS.Trackball) && <TrackballControls />}
      </>
      <>
        {enableAxesHelper && <axesHelper />}
        {enableGizmoHelper && (
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={[
                "hsl(0, 100%, 50%)",
                "hsl(120, 100%, 50%)",
                "hsl(240, 100%, 50%)",
              ]}
              labelColor="black"
            />
          </GizmoHelper>
        )}
        {enableGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
        {enableStats && <Stats />}
      </>
      {enableEffects && (
        <EffectComposer>
          <Bloom height={500} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      )}
      <Lighting />
      <Router>
      <>
        {enableComponent(COMPONENT.Button) && <Button />}
        {enableComponent(COMPONENT.Cube) && <Cube />}
        {enableComponent(COMPONENT.Cube_Positioned) && (
          <Cube
            position={[1, 1, 1]}
            rotation={[45, 45, 45].map((degrees) =>
              MathUtils.degToRad(degrees)
            )}
          />
        )}
        {enableComponent(COMPONENT.ReactRouter) && <ReactRouter />}
        <Suspense fallback={null}>
          {enableComponent(COMPONENT.Clock) && <Clock />}
          {enableComponent(COMPONENT.Image) && <Image />}
          {enableComponent(COMPONENT.LoremIpsum) && <LoremIpsum />}
          {enableComponent(COMPONENT.Particles) && <Particles />}
          {enableComponent(COMPONENT.Suzanne) && <Suzanne />}
        </Suspense>
      </>
      
        <Routes>
          <Route element={<Navigate to="/" />} path="*" />
          <Route element={<ReactRouterPathAlpha />} path="alpha" />
          <Route element={<ReactRouterPathOmega />} path="omega" />
          <Route element={<></>} path="/" />
        </Routes>
      </Router>
   </>
  );
};

export default Content;
