import { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Router } from "wouter";
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
  Lighting,
  LoremIpsum,
  Suzanne,
  Wouter,
  WouterPathRouter,
  WouterPathWouter,
} from "./components";

const currentLocation = () => window.location.hash.replace("#", "") || "/";
const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLocation(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to) => (window.location.hash = to), []);
  return [location, navigate];
};

const COMPONENT = Object.freeze({
  Animation: "Animation",
  Button: "Button",
  Clock: "Clock",
  Cube: "Cube",
  Cube_Positioned: "Cube_Positioned",
  None: "None",
  LoremIpsum: "LoremIpsum",
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
        "None                  ": COMPONENT.None,
        "Button                ": COMPONENT.Button,
        "Clock                 ": COMPONENT.Clock,
        "Cube                  ": COMPONENT.Cube,
        "Cube (positioned)     ": COMPONENT.Cube_Positioned,
        "Lorem Ipsum           ": COMPONENT.LoremIpsum,
        "Suzanne               ": COMPONENT.Suzanne,
        "Wouter (Router)       ": COMPONENT.Wouter,
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
    <Router base={process.env.PUBLIC_URL} hook={useHashLocation}>
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
        <Suspense fallback={null}>
          {enableComponent(COMPONENT.Clock) && <Clock />}
          {enableComponent(COMPONENT.LoremIpsum) && <LoremIpsum />}
          {enableComponent(COMPONENT.Suzanne) && <Suzanne />}
        </Suspense>
        {enableComponent(COMPONENT.Wouter) && <Wouter />}
      </>
      <Route component={WouterPathRouter} path="/router" />
      <Route component={WouterPathWouter} path="/wouter" />
    </Router>
  );
};

export default Content;
