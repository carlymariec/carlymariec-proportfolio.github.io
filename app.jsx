import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './app.css';
import Background from './background';
import NaviBar from './navbar';
import Home from './home';
import PrivacyPolicy from './privacypolicy';

const resumePdf = new URL('./resume.pdf', import.meta.url).href;

export default function App() {
  return (
    <HashRouter>
      <div className="bento-app-container">
        <Background />
        <NaviBar />
        
        <main className="bento-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <footer className="bento-footer">
          <p>&copy; 2026 CMarie. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy &amp; Safety Policy</Link>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">Download Full Resume PDF</a>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
