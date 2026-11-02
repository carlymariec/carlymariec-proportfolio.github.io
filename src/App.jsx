import React from 'react';
import Home from './pages/home';
import Galaxy from './components/Galaxy';
import './app.css';

export default function App() {
  return (
    <div className="bento-app-container">
      {/* Interactive Galaxy Background Canvas */}
      <div className="galaxy-background">
        <Galaxy
          density={1.15}
          glowIntensity={0.42}
          flareIntensity={1.25}
          starSpeed={0.18}
          layers={5}
          saturation={1}
          mouseRepulsion
          clickWarp
          starColors={['#4c1d95', '#c4b5fd', '#d4af37', '#14b8a6']}
        />
      </div>

      {/* Foreground Portfolio Content */}
      <main className="bento-main-content">
        <Home />
      </main>

      <footer className="bento-footer">
        <p>© 2026 Carly Marie Cheney · Document Preparation &amp; Legal Tech</p>
      </footer>
    </div>
  );
}
