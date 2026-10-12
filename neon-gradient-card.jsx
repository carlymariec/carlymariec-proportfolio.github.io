import React from 'react';
import './neon-gradient-card.css';

export default function NeonGradientCard({
  children,
  className = "",
  style = {},
  borderRadius = "1rem",
  borderSize = "2px",
}) {
  return (
    <div
      className={`neon-gradient-card-wrapper ${className}`}
      style={{
        "--border-radius": borderRadius,
        "--border-size": borderSize,
        ...style,
      }}
    >
      <div className="neon-gradient-card-content">
        {children}
      </div>
    </div>
  );
}
