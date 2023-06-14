import { angleToRadians } from "../utils/angle";
import { PerspectiveCamera } from "@react-three/drei";
// Utility function to rotate things AROUND the x, y or Z axis. 

function Three() {

  return ( 
  <>
  {/* Notes:
    Each "mesh" (aka thing) has two qualities: 
    1. Shape (Geometry)
    2. Material (Surface) */}

{/* Camera!  */}
  <PerspectiveCamera makeDefault position={[0, 1, 8]}/>

{/* Ball! */}
  <mesh position={[-2, 1.5, 0]}>
    <sphereGeometry args={[0.5, 32, 32]}/>
    <meshStandardMaterial color="hotpink"/>
  </mesh>

{/* Floor */}
  <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="#1ea3d8"/>
  </mesh>

{/* illuminates everything around the geometry */}
  <ambientLight args={["#7ffff", 2]}/>
  </> 
  );
}

export default Three;