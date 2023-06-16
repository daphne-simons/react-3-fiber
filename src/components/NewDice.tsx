import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, AnimatedValueTuple } from '@react-spring/three';


const NewDice: React.FC = () => {
  const diceRef = useRef<any>();
  const [isRotating, setIsRotating] = useState(false);

  const { rotation } = useSpring<AnimatedValueTuple<{ x: number, y: number, z: number }>>({
    from: { x: 0, y: 0, z: 0 },
    to: { x: isRotating ? Math.PI / 2 : 0, y: isRotating ? Math.PI / 2 : 0, z: isRotating ? Math.PI / 2 : 0 },
    config: { mass: 5, tension: 200, friction: 50 },
  });

  useFrame(() => {
    if (diceRef.current && isRotating) {
      diceRef.current.rotation.x += 0.01;
      diceRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <animated.mesh ref={diceRef} rotation={rotation} onClick={handleClick}>
        <icosahedronBufferGeometry args={[1, 0]} />
        <meshStandardMaterial color="orange" />
      </animated.mesh>
    </>
  );
};

export default NewDice;
