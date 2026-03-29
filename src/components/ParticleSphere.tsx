"use client";

import { useMemo, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleSphere() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const count = 2600;
    const points = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 1.45 + Math.random() * 0.55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const baseIndex = index * 3;
      points[baseIndex] = x;
      points[baseIndex + 1] = y;
      points[baseIndex + 2] = z;
    }

    return points;
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();

    group.rotation.y += delta * 0.08;
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      state.pointer.y * 0.18,
      0.04,
    );
    group.rotation.z = THREE.MathUtils.lerp(
      group.rotation.z,
      -state.pointer.x * 0.14,
      0.04,
    );
    group.position.y = Math.sin(elapsed * 0.6) * 0.08;
    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      state.pointer.x * 0.1,
      0.025,
    );
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}
