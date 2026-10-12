import React from 'react';
import './features.css';

export default function Features() {
  const competencies = [
    {
      tag: "Legal Analysis",
      title: "Structured IRAC Methodology",
      description: "Rigorous analytical framework breaking down issue, rule, application, and conclusion to evaluate liability and parse complex statutory language."
    },
    {
      tag: "Legal Technology",
      title: "Python OCR & Data Pipelines",
      description: "Automated document ingestion and data extraction using PyMuPDF, pdfplumber, and custom OCR scripts to index case records efficiently."
    },
    {
      tag: "Research & Standards",
      title: "Bluebook Citation & Authorities",
      description: "Flawless adherence to Bluebook citation formatting, statutory interpretation doctrines, and comprehensive Table of Authorities assembly."
    }
  ];

  return (
    <div className="bento-layout-container features-section">
      <div className="bento-card-base bento-full-width">
        <span className="bento-tag">Core Competencies</span>
        <h2 className="section-title">Legal &amp; Technical <span>Expertise</span></h2>
        <p className="section-subtitle">Bridging traditional paralegal methodology with modern software development and workflow automation.</p>
        <div className="section-divider"></div>

        <div className="features-grid">
          {competencies.map((item, index) => (
            <div key={index} className="feature-card">
              <span className="feature-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
