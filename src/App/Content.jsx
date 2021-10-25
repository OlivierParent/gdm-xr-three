import { OrbitControls } from "@react-three/drei";
import { Route, Router } from "wouter";
import { useControls } from "leva";

import Button from "./components/Button";
import Cube from "./components/Cube";

const components = ["Button", "Cube"];

const Content = () => {
  const { enableOrbitControls } = useControls("Controls", {
    enableOrbitControls: {
      label: "Orbit Controls",
      value: true,
    },
  });
  const { useComponent } = useControls("General", {
    useComponent: {
      label: "Component",
      options: components,
      value: "Cube",
    },
  });

  function showComponent(name) {
    return useComponent === name;
  }

  return (
    <>
      {enableOrbitControls && <OrbitControls />}
      {showComponent("Button") && <Button />}
      {showComponent("Cube") && <Cube />}
      {/* <Router>
                <Route component={} path="" />
            </Router> */}
    </>
  );
};

export default Content;
