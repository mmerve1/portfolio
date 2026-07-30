import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Users } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Professional Training</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Strong foundation in Computer Engineering, peer-learning algorithms, and continuous training.
          </p>
        </div>

        <div className="grid-2 edu-grid">
          {/* Left Side Education List */}
          <div className="edu-col">
            <h3 className="col-heading">
              <GraduationCap size={20} color="var(--accent-cyan)" />
              <span>Higher Education & Programs</span>
            </h3>

            <div className="edu-cards-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-card glass-card">
                  <div className="edu-card-header">
                    <div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <h5 className="edu-inst">{edu.institution}</h5>
                    </div>
                    <span className="gpa-badge">{edu.gpa}</span>
                  </div>

                  <div className="edu-meta">
                    <span className="meta-tag">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="meta-tag">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Certifications & Activities */}
          <div className="cert-col">
            <h3 className="col-heading">
              <Award size={20} color="var(--accent-cyan)" />
              <span>Certifications & Leadership</span>
            </h3>

            <div className="cert-cards-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card glass-card">
                  <div className="cert-header">
                    <div className="cert-icon">
                      <Award size={18} color="var(--accent-cyan)" />
                    </div>
                    <div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-issuer">{cert.issuer} • {cert.year}</span>
                    </div>
                  </div>
                  <p className="cert-topic">{cert.topic}</p>
                </div>
              ))}

              <div className="activity-card glass-card">
                <div className="cert-header">
                  <div className="cert-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                    <Users size={18} color="var(--accent-purple)" />
                  </div>
                  <div>
                    <h4 className="cert-title">IEEE Computer Society Türkiye</h4>
                    <span className="cert-issuer">Student Activities Team Member (2024 – 2025)</span>
                  </div>
                </div>
                <p className="cert-topic">Active involvement in national student developer summits, workshops, and community events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .edu-grid {
          gap: 2.5rem;
        }

        .col-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .edu-cards-list, .cert-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .edu-card, .cert-card, .activity-card {
          padding: 1.75rem;
        }

        .edu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .edu-degree {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .edu-inst {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-top: 0.15rem;
        }

        .gpa-badge {
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid var(--border-active);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .edu-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .meta-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .edu-details {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cert-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .cert-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid var(--border-active);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cert-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cert-issuer {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .cert-topic {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
