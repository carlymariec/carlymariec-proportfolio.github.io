import React from 'react';
import badgeImg from '../assets/badges/IMG_1548.png';
import './deanslistbadge.css';

export default function DeansListBadge() {
  return (
    <div className="deans-list-badge-container">
      <div className="deans-badge-image-frame">
        <img 
          src={badgeImg} 
          alt="Rasmussen University Dean's List Seal" 
          className="deans-badge-img"
        />
      </div>
      <div className="deans-badge-meta-text">
        <span className="deans-badge-title">Academic Distinction</span>
        <span className="deans-badge-gpa">Dean's List • 3.8 GPA</span>
        <span className="deans-badge-school">School of Justice Studies</span>
        <span className="deans-badge-term">Winter Quarter 2026</span>
      </div>
    </div>
  );
}
