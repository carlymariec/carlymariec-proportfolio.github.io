import React from 'react';
import Home from './pages/home';
import Galaxy from './components/Galaxy';
import './app.css';

export default function App() {
  return (
    <div className="bento-app-container">
      {/* Interactive Galaxy Background Canvas */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
        <Galaxy
          density={1}
          glowIntensity={0.3}
          flareIntensity={1}
          starSpeed={0.15}
          mouseRepulsion
          clickWarp
          starColors={["#a855f7", "#06b6d4", "#c9aa4b"]}
        />
      </div>

      {/* Foreground Portfolio Content */}
      <main className="bento-main-content">
        <Home />
      </main>

      <footer className="bento-footer">
        <p>© 2026 Carly Marie Cheney • Paralegal Studies &amp; Legal Tech Automation</p>
      </footer>
    </div>
  );
}
