import React from 'react';
import './component.css';
import { motion } from 'framer-motion';

export default function SpinningBadge({ text = "• LEGAL TECH • PARALEGAL • AUTOMATION •" }) {
  return (
    <div className="spinning-badge-wrapper">
      <div className="badge-glass-orb" />
      <motion.svg
        className="badge-svg-ring"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <defs>
          <path
            id="bentoCirclePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="badge-ring-text">
          <textPath href="#bentoCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>
      <div className="badge-turquoise-core">
        <span>⚖️</span>
      </div>
    </div>
  );
}
