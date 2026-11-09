import React from 'react';
import Particles from './Particles';

export default function ParticlesBackground() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <Particles
        particleColors={["#008b91", "#d4af37", "#4c1d95"]}
        particleCount={2300}
        particleSpread={16.5}
        speed={0.13}
        particleBaseSize={140}
        glow={0.8}
        twinkle={0.5}
        moveParticlesOnHover
        hoverEffect="parallax"
        sizeRandomness={1.3}
        shape="circle"
        depthOfField={0.4}
        connections={false}
        connectionDistance={110}
        particleHoverFactor={1}
        hoverRadius={140}
        drift="forward"
        driftSpeed={1.35}
        alphaParticles={false}
        disableRotation={false}
        cameraDistance={27}
        variation={5}
        opacity={0.7}
        clickBurst
        intro
        lightMode={false}
      />
    </div>
  );
}
