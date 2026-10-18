import React from 'react';
import './features.css';

export default function Features() {
  const competencies = [
    {
      title: "IRAC Legal Frameworks",
      desc: "Executing rigorous Issue, Rule, Application, and Conclusion analysis for civil briefs and memorandum drafting."
    },
    {
      title: "Bluebook Citation Mastery",
      desc: "Flawless formatting of case law, statutory codes, and administrative regulations conforming to 21st Edition standards."
    },
    {
      title: "Python OCR & Document Pipelines",
      desc: "Building custom automation scripts utilizing PyMuPDF, pytesseract, and Pandas to parse and index discovery documents."
    },
    {
      title: "Table of Authorities (TOA)",
      desc: "Compiling precise categorical index structures for appellate briefs, motions, and trial court filings."
    }
  ];

  return (
    <div className="bento-card-base bento-full-width">
      <h2 className="section-title">Core <span>Competencies</span></h2>
      <p className="section-subtitle">Specialized legal and technical proficiencies built for high-stakes litigation support.</p>
      <div className="section-divider"></div>

      <div className="competencies-grid">
        {competencies.map((comp, idx) => (
          <div key={idx} className="competency-card">
            <h3>{comp.title}</h3>
            <p>{comp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
