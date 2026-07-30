import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  const selectedExperience = experiences.find(e => e.id === activeExp) || experiences[0];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Enterprise & Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development at leading corporate IoT platforms and defense technology firms.
          </p>
        </div>

        <div className="experience-layout">
          {/* Left Side Navigation List */}
          <div className="exp-sidebar">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`exp-nav-item glass-card ${activeExp === exp.id ? 'active' : ''}`}
              >
                <div className="exp-nav-icon" style={{ borderColor: exp.color }}>
                  <Building2 size={18} color={exp.color} />
                </div>
                <div className="exp-nav-info">
                  <span className="exp-nav-company">{exp.company}</span>
                  <span className="exp-nav-role">{exp.role}</span>
                  <span className="exp-nav-period">{exp.period}</span>
                </div>
                <ChevronRight size={16} className="exp-arrow" />
              </button>
            ))}
          </div>

          {/* Right Side Experience Detail View */}
          <div className="exp-detail-view glass-card">
            <div className="exp-header">
              <div>
                <span className="exp-badge" style={{ background: `${selectedExperience.color}20`, color: selectedExperience.color, borderColor: `${selectedExperience.color}50` }}>
                  {selectedExperience.type}
                </span>
                <h3 className="exp-role">{selectedExperience.role}</h3>
                <h4 className="exp-company">{selectedExperience.company}</h4>
              </div>

              <div className="exp-meta">
                <div className="meta-badge">
                  <Calendar size={14} />
                  <span>{selectedExperience.period}</span>
                </div>
                <div className="meta-badge">
                  <MapPin size={14} />
                  <span>{selectedExperience.location}</span>
                </div>
              </div>
            </div>

            <div className="exp-divider"></div>

            <h5 className="highlights-title">Key Responsibilities & Engineering Achievements</h5>

            <ul className="highlights-list">
              {selectedExperience.highlights.map((bullet, idx) => (
                <li key={idx} className="highlight-item">
                  <CheckCircle2 size={18} color="var(--accent-cyan)" className="check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="exp-footer">
              <span className="skills-label">Technologies & Frameworks Applied:</span>
              <div className="exp-skills-row">
                {selectedExperience.skills.map((skill, idx) => (
                  <span key={idx} className="tech-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background: rgba(15, 23, 42, 0.4);
        }

        .experience-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .exp-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          text-align: left;
          width: 100%;
          cursor: pointer;
          position: relative;
        }

        .exp-nav-item.active {
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.06);
        }

        .exp-nav-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-nav-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .exp-nav-company {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .exp-nav-role {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .exp-nav-period {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-top: 0.15rem;
        }

        .exp-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .exp-nav-item.active .exp-arrow {
          color: var(--accent-cyan);
          transform: translateX(4px);
        }

        /* Detail View */
        .exp-detail-view {
          padding: 2.5rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .exp-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid;
          margin-bottom: 0.5rem;
        }

        .exp-role {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .exp-company {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-top: 0.25rem;
        }

        .exp-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .exp-divider {
          height: 1px;
          background: var(--border-color);
          margin: 1.75rem 0;
        }

        .highlights-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .check-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .exp-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .skills-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .exp-skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 992px) {
          .experience-layout {
            grid-template-columns: 1fr;
          }
          .exp-sidebar {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          .exp-nav-item {
            min-width: 260px;
          }
        }
      `}</style>
    </section>
  );
}
