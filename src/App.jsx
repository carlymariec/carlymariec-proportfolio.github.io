import React from 'react';
import Home from './pages/home';
import ParticlesBackground from './components/ParticlesBackground';
import './app.css';

export default function App() {
  return (
    <div className="bento-app-container">
      {/* Fixed WebGL Floating Particles Layer */}
      <ParticlesBackground />

      {/* Main Portfolio Content */}
      <main className="bento-main-content">
        <Home />
      </main>

      <footer className="bento-footer">
        <p>© 2026 Carly Marie Cheney · Document Preparation &amp; Legal Tech</p>
      </footer>
    </div>
  );
}
