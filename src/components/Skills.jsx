import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Server, Code2, Layout, Database, CheckCircle } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch(iconName) {
      case 'Server': return <Server size={20} color="var(--accent-cyan)" />;
      case 'Code2': return <Code2 size={20} color="var(--accent-cyan)" />;
      case 'Layout': return <Layout size={20} color="var(--accent-cyan)" />;
      case 'Database': return <Database size={20} color="var(--accent-cyan)" />;
      default: return <Cpu size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Tech Stack Matrix</span>
          </h2>
          <p className="section-subtitle">
            Core competence across enterprise backend microservices, real-time data processing, and full-stack web solutions.
          </p>
        </div>

        <div className="grid-2 skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-header">
                <div className="skill-cat-icon">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">
                        <CheckCircle size={14} color="var(--accent-cyan)" />
                        {skill.name}
                      </span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Specialty Banner */}
        <div className="specialty-banner glass-card">
          <div className="banner-content">
            <h4 className="banner-title">Architectural & Process Expertise</h4>
            <p className="banner-text">
              RESTful APIs • Microservices Architecture • Real-Time Telemetry Data Processing • OAuth2 & Keycloak Authentication • Agile Sprints • Test-Driven Development Exposure
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          background: rgba(15, 23, 42, 0.4);
        }

        .skills-grid {
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-card {
          padding: 2rem;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .skill-cat-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid var(--border-active);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-cat-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .skill-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        .skill-bar-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 1s ease-in-out;
        }

        .specialty-banner {
          padding: 1.75rem 2.5rem;
          text-align: center;
          border-color: var(--border-active);
          background: rgba(0, 242, 254, 0.03);
        }

        .banner-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
        }

        .banner-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
