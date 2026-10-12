import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bento-layout-container projects-page">
      <div className="bento-card-base bento-full-width" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ background: 'transparent', border: 'none', color: '#d4af37', cursor: 'pointer', fontFamily: 'monospace', marginBottom: '1.5rem' }}
        >
          ← Back to Main Page
        </button>

        <h2 className="section-title">Privacy <span>Policy</span></h2>
        <div className="section-divider"></div>

        <div className="privacy-content fade-in" style={{ marginTop: '2rem', color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontStyle: 'italic', color: '#8b949e', marginBottom: '1rem' }}>
            Last updated: October 2026
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>1. Introduction</h3>
          <p>Welcome to the portfolio website of <strong>CMarie</strong> ("I," "me," or "my"). This Privacy Policy explains how I handle information in connection with this website (<strong>proportfolio</strong>). I am committed to protecting your privacy and being transparent about how any information shared through this site is used.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>2. Information I Collect</h3>
          <p>This is a static portfolio website. I do not use cookies, analytics trackers, or any third-party data-collection services. The only information I may receive is what you <strong>voluntarily submit</strong> through the contact form, which may include:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Your name or organization name</li>
            <li>Your email address</li>
            <li>The content of your message or request</li>
          </ul>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>3. How I Use Your Information</h3>
          <p>Any information you submit via the contact form is used solely to:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Respond to your inquiry or request</li>
            <li>Provide you with requested documents or contact details</li>
          </ul>
          <p>I will never sell, rent, or share your information with third parties for marketing purposes.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>4. Data Retention</h3>
          <p>Contact form submissions are retained only as long as necessary to respond to your inquiry. I do not maintain a permanent database of submissions.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>5. Personal Safety &amp; Alias Notice</h3>
          <p>For my personal safety, certain identifying details have been intentionally redacted from this public portfolio. I operate under the alias <strong>CMarie</strong>. Full, unredacted personal details are available upon request by a credible and reputable entity.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>6. Third-Party Links</h3>
          <p>This website may contain links to PDF documents or external resources. I am not responsible for the privacy practices of any third-party websites. I encourage you to review the privacy policies of any external sites you visit.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>7. Security</h3>
          <p>I take reasonable precautions to protect any information you share with me. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>8. Children's Privacy</h3>
          <p>This website is not directed at children under the age of 13, and I do not knowingly collect personal information from children.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>9. Changes to This Policy</h3>
          <p>I may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised "Last updated" date.</p>

          <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginTop: '0.5rem' }}>10. Contact</h3>
          <p>If you have any questions about this Privacy Policy, please use the <button onClick={() => navigate('/')} style={{ background: 'transparent', border: 'none', color: '#40e0d0', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}>Contact form</button> on the main page.</p>
        </div>
      </div>
    </div>
  );
}
