import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Stand pole */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.2, 12]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.06, 24]} />
        <meshStandardMaterial color="#777777" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Outer red ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.12, 16, 64]} />
        <meshStandardMaterial color="#cc2200" />
      </mesh>
      {/* Middle white ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.32, 0.1, 16, 64]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Inner red bullseye */}
      <mesh position={[0, 0, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial color="#cc2200" />
      </mesh>
      {/* Target face backing */}
      <mesh position={[0, 0, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.64, 32]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  );
};

export default Target;
