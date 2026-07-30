import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon, Menu, X, Terminal, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#about" className="brand-logo">
          <div className="logo-icon">
            <Terminal size={20} color="var(--accent-cyan)" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Merve Özdemir</span>
            <span className="logo-sub">Full-Stack Engineer</span>
          </div>
        </a>

        {/* Status Badge Desktop */}
        <div className="nav-status-badge">
          <span className="pulse-dot"></span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle Buttons */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="light"] .navbar.scrolled {
          background: rgba(248, 250, 252, 0.85);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid var(--border-active);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .nav-status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: #10b981;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--accent-cyan);
        }

        .theme-toggle-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .mobile-actions {
          display: none;
          gap: 0.5rem;
        }

        .mobile-menu-btn {
          color: var(--text-primary);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: var(--shadow-card);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .nav-status-badge {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
