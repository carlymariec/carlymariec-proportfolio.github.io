import React from 'react';
import MagicParticles from './particles.jsx';
import './background.css';

export default function Background() {
  return (
    <div className="bento-background-container">
      {/* Ambient Gradient Glows */}
      <div className="ambient-orb purple-orb" />
      <div className="ambient-orb turquoise-orb" />
      <div className="ambient-orb gold-orb" />

      {/* Floating 3D Particles */}
      <MagicParticles />
    </div>
  );
}
