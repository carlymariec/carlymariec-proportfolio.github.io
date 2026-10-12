import React from 'react';
import './home.css';
import About from './about.jsx';
import Features from './features.jsx';
import Contact from './contact';
import SpinningBadge from './component';
import { WordRotate } from './wordrotate';
import { writingSamples } from './projects';
import NeonGradientCard from './neon-gradient-card';
import DeansListBadge from './deanslistbadge';

// Distinct asset references using Vite's reliable new URL bundling
const resumePdf = new URL('./resume.pdf', import.meta.url).href;
const certificateImg = new URL('./IMG_1554.jpeg', import.meta.url).href;

export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const coreRoles = [
    "Paralegal Studies Student (3.8 GPA)",
    "Legal Tech Automation Specialist",
    "IRAC Legal Analysis Expert",
    "Bluebook Citation Master",
    "Python OCR Pipeline Developer"
  ];

  return (
    <div className="home-bento-wrapper">
      <div className="floating-badge-container">
        <SpinningBadge />
      </div>

      {/* 1. Hero Section (Cleaned of redundant resume links) */}
      <section id="hero" className="bento-layout-container hero-bento-grid">
        <div className="bento-card-base hero-main-card bg-legalOffwhite border border-legalPurple/30 shadow-lg text-legalCharcoal">
          <span className="hero-eyebrow">Detail-Oriented &amp; Tech-Forward</span>
          <h1 className="hero-title">C<span>Marie</span></h1>
          <div className="hero-subtitle-wrapper text-xl mt-2 flex items-center gap-2 flex-wrap">
            <span>I am a</span>
            <span className="text-[#008b91] font-semibold">
              <WordRotate words={coreRoles} duration={3500} />
            </span>
          </div>
          <div className="hero-btn-row">
            <button onClick={() => scrollToSection('samples')} className="bento-primary-btn">
              View Writing Samples ➔
            </button>
            <button onClick={() => scrollToSection('resume-centerpiece')} className="bento-gold-btn" style={{ cursor: 'pointer' }}>
              View Credentials &amp; Resume 📄
            </button>
          </div>
        </div>
      </section>

      {/* 2. RESUME CENTERPIECE & FEATURED ARTIFACT HUB */}
      <section id="resume-centerpiece" className="bento-layout-container resume-centerpiece-section" style={{ marginTop: '2rem' }}>
        <NeonGradientCard>
          
          {/* Featured Academic Badge & Certificate Action */}
          <div className="artifact-showcase-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <DeansListBadge />
            <div className="artifact-action-box" style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href={certificateImg} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bento-gold-btn" 
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
              >
                View Official Certificate 📜
              </a>
            </div>
          </div>

          {/* Resume Overview Content */}
          <h2 className="section-title" style={{ fontSize: '2rem', marginTop: '0.5rem' }}>
            Sanitized Professional <span>Resume</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Rasmussen University • Associate of Applied Science in Paralegal Studies
          </p>

          <div className="resume-centerpiece-grid">
            <div className="resume-highlight-box">
              <h3>Academic Standing &amp; Focus</h3>
              <p>Maintaining a <strong>3.8 GPA</strong> on the Dean's List (School of Justice Studies), with specialized coursework focusing on civil litigation, statutory interpretation, liability, and proximate cause analysis.</p>
            </div>
            <div className="resume-highlight-box">
              <h3>Core Technical &amp; Legal Skills</h3>
              <p>Advanced proficiency in structured <strong>IRAC legal analysis</strong>, Bluebook citation standards, Table of Authorities assembly, and automated Python OCR document extraction pipelines.</p>
            </div>
          </div>

          <div className="resume-action-row" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bento-primary-btn" 
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
            >
              Download PDF Resume 📥
            </a>
          </div>

        </NeonGradientCard>
      </section>

      {/* 3. About Section */}
      <section id="about">
        <About />
      </section>

      {/* 4. Core Competencies & Legal Tech */}
      <section id="competencies">
        <Features />
      </section>

      {/* 5. Writing Samples Section */}
      <section id="samples" className="bento-layout-container samples-section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="bento-card-base bento-full-width bg-white/90 border border-legalPurple/20 rounded-2xl shadow-sm text-legalCharcoal">
          <h2 className="section-title">Writing <span>Samples</span></h2>
          <p className="section-subtitle">Academic and professional legal works demonstrating structured IRAC reasoning, statutory analysis, and Bluebook standards.</p>
          <div className="section-divider"></div>

          <div className="projects-grid">
            {writingSamples.map((sample) => (
              <div 
                key={sample.id} 
                className={`project-card ${sample.featured ? 'featured-card' : ''}`}
              >
                <div>
                  <span className={`project-tag ${sample.featured ? 'featured-tag' : ''}`}>
                    {sample.tag}
                  </span>
                  <h3>{sample.title}</h3>
                  <p>{sample.description}</p>
                </div>
                <a 
                  href={sample.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Preview PDF Document ➔
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Form */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
