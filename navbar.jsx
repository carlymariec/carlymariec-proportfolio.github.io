import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import SpinningBadge from './component';

export default function NaviBar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setNavOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bento-navbar">
      <div className="navibar-container">
        <div className="navibar-logo" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
          C<span>Marie</span>
          <div className="badge-inline-wrap">
            <SpinningBadge />
          </div>
        </div>
        
        <button 
          className={`navibar-toggle ${navOpen ? 'open' : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navibar-links ${navOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavClick('about')}>About Me</button>
          <button onClick={() => handleNavClick('competencies')}>Competencies</button>
          <button onClick={() => handleNavClick('samples')}>Writing Samples</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
}
