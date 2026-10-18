import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="bento-card-base bento-full-width">
      <h2 className="section-title">About <span>Carly Marie</span></h2>
      <p className="section-subtitle">Bridging rigorous legal analysis with modern technological efficiency.</p>
      <div className="section-divider"></div>

      <div className="about-content-grid">
        <div className="about-text-block">
          <p>
            As an Associate of Applied Science student in Paralegal Studies at <strong>Rasmussen University</strong> maintaining a <strong>3.8 GPA</strong> on the Dean's List, I combine formal legal training in civil litigation, statutory interpretation, and evidence rules with advanced self-taught technical capabilities.
          </p>
          <p>
            My work focuses on transforming unstructured legal workflows into streamlined digital pipelines—leveraging Python OCR extraction, Bluebook-compliant citation generation, and structured IRAC frameworks to elevate legal document accuracy and delivery.
          </p>
        </div>
        <div className="about-stats-block">
          <div className="stat-item">
            <span className="stat-number">3.8</span>
            <span className="stat-label">Cumulative GPA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Bluebook Accuracy</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2026</span>
            <span className="stat-label">Dean's List Honors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
