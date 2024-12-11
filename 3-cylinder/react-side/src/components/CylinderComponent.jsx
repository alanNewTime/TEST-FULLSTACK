import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CylinderElement({
  radiusTopProp,
  radiusBottomProp,
  heightProp,
  radialSegmentsProp,
  heightSegmentsProp,
}) {
  return (
    <>
      <group>
        <mesh>
          <cylinderGeometry
            attach="geometry"
            args={[
              radiusTopProp,
              radiusBottomProp,
              heightProp,
              radialSegmentsProp,
              heightSegmentsProp,
            ]}
          />
          <meshStandardMaterial attach="material" color="green" />
        </mesh>

        <mesh>
          <cylinderGeometry
            attach="geometry"
            args={[
              radiusTopProp,
              radiusBottomProp,
              heightProp,
              radialSegmentsProp,
              heightSegmentsProp,
            ]}
          />
          <meshBasicMaterial attach="material" color="white" wireframe={true} />
        </mesh>
      </group>
    </>
  );
}

function CylinderComponent() {
  // State to store the API response that will return an array of Cylinders objects
  const [cylinders, setCylinders] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchCylinders = async () => {
      // Make the API call using fetch
      const response = await fetch("http://localhost:3000/api/cylinders");

      // Parse the JSON response
      const result = await response.json();
      console.log(result);
      // Store the result in state
      setCylinders(result);
    };

    // Call the fetchCylinders function
    fetchCylinders();
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <>
      <div>
        <Canvas camera={{ position: [-5, 2, 9], fov: 80 }}>
          <ambientLight />
          {cylinders.map((cylinder) => {
            return (
              <>
                <CylinderElement
                  radiusTopProp={cylinder.radiusTop}
                  radiusBottomProp={cylinder.radiusBottom}
                  heightProp={cylinder.height}
                  radialSegmentsProp={cylinder.radialSegments}
                  heightSegmentsProp={cylinder.heightSegments}
                />
              </>
            );
          })}

          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default CylinderComponent;
