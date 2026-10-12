import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="bento-layout-container about-section">
      <div className="bento-card-base bento-full-width">
        <span className="bento-tag">Background Profile</span>
        <h2 className="section-title">About <span>CMarie</span></h2>
        <p className="section-subtitle">Detail-oriented paralegal student and software developer building precision legal tech workflows.</p>
        <div className="section-divider"></div>

        <div className="about-grid">
          <div className="about-text-content">
            <p style={{ color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Currently pursuing an Associate of Applied Science in Paralegal Studies at <strong>Rasmussen University</strong>, maintaining a <strong>3.8 GPA on the Dean's List</strong>. My professional focus centers on rigorous civil litigation support, objective legal analysis, and structured IRAC argumentation.
            </p>
            <p style={{ color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              As a self-taught software developer and technical analyst, I integrate automated document indexing pipelines, custom Python script workflows, and relational knowledge management systems to maximize accuracy and efficiency in modern legal environments.
            </p>
          </div>

          <div className="about-card-highlight" style={{ background: 'rgba(13, 17, 23, 0.65)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '0.75rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: '#d4af37', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Professional Philosophy</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', lineHeight: '1.6' }}>
              "Combining meticulous legal research, strict adherence to Bluebook citation standards, and automated software workflows to deliver rigorous, dependable analysis."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
