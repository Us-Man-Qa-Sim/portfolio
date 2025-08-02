import { useGSAP } from '@gsap/react';
import { Center } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef, useMemo } from 'react';
import * as THREE from 'three';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // Create modern holographic materials for each ring
  const ringMaterials = useMemo(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    return colors.map(
      (color) =>
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          metalness: 0.8,
          roughness: 0.2,
          transparent: true,
          opacity: 0.7,
          emissive: new THREE.Color(color),
          emissiveIntensity: 0.3,
        }),
    );
  }, []);

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <primitive object={ringMaterials[index]} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
