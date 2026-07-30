import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <Terminal size={18} color="var(--accent-cyan)" />
              </div>
              <span className="logo-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Software Engineer • Microservices • IoT Platforms
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #060911;
          border-top: 1px solid var(--border-color);
          padding: 3.5rem 0 2rem 0;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .scroll-top-btn {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .built-with {
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
      `}</style>
    </footer>
  );
}
