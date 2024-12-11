import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function BoxElement({
  propColor,
  propWidth,
  propHeight,
  propDepth,
  propWireframeColor,
  propPosition,
}) {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <>
      <group position={propPosition} ref={mesh}>
        <mesh>
          <boxGeometry
            attach="geometry"
            args={[propWidth, propHeight, propDepth]}
          />
          <meshStandardMaterial attach="material" color={propColor} />
        </mesh>
        <mesh>
          <boxGeometry
            attach="geometry"
            args={[propWidth, propHeight, propDepth]}
          />
          <meshBasicMaterial
            attach="material"
            color={propWireframeColor}
            wireframe={true}
          />
        </mesh>
      </group>
    </>
  );
}

function BoxComponent() {
  // State to store the API response that will return an array of boxes objects
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchBoxes = async () => {
      // Make the API call using fetch
      //LINK FOR USERS "http://localhost:3000/api/users"
      //LINK FOR PRODUCTS "http://localhost:3000/api/products"
      //LINK FOR BOX CARATERISTICS "http://localhost:3000/api/boxes"
      const response = await fetch("http://localhost:3000/api/boxes");

      // Parse the JSON response
      const result = await response.json();
      //console.log(result);
      // Store the result in state
      setBoxes(result);
    };

    // Call the fetchBoxes function
    fetchBoxes();
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <>
      <div></div>
      <div></div>
      <Canvas camera={{ position: [0, 2, 9], fov: 60 }}>
        <ambientLight intensity={0.5} />

        {boxes.map((box) => {
          //console.log(box);
          return (
            <>
              <BoxElement
                propColor={box.color}
                propWidth={box.width}
                propHeight={box.height}
                propDepth={box.depth}
                propWireframeColor={box.wireframeColor}
                propPosition={box.position}
              />
              ;
            </>
          );
        })}

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxComponent;
