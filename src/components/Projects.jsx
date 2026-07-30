import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Github, Layers, Star, Check } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'Backend', 'Mobile', 'Mobile & IoT'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Software Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Enterprise backend systems, multithreaded engines, full-stack web platforms, and mobile apps.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
              <span className="count-pill">
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid-3 projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-header">
                <div className="project-cat-badge">
                  <Layers size={12} />
                  <span>{project.category}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge" title="Featured Core Project">
                    <Star size={12} fill="#ffbd2e" color="#ffbd2e" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-features">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feature-bullet">
                    <Check size={14} color="var(--accent-cyan)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="project-footer">
                <div className="tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-icon-link"
                    title="View Source on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="details-btn"
                  >
                    <span>Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="tech-chip" style={{ color: 'var(--accent-cyan)' }}>{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.description}</p>
              
              <h4 className="modal-subtitle">Key Features & Architecture:</h4>
              <ul className="modal-list">
                {selectedProject.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4 className="modal-subtitle">Technologies Used:</h4>
              <div className="tech-tags" style={{ marginBottom: '1.5rem' }}>
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
              >
                <Github size={18} />
                <span>Open Repository</span>
              </a>
              <button onClick={() => setSelectedProject(null)} className="btn btn-outline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          position: relative;
        }

        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--border-active);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: #040914;
          font-weight: 700;
        }

        .count-pill {
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          color: inherit;
        }

        .projects-grid {
          gap: 1.75rem;
        }

        .project-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .project-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .project-cat-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .featured-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ffbd2e;
          background: rgba(255, 189, 46, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .project-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .project-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .project-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .action-icon-link {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .action-icon-link:hover {
          color: var(--accent-cyan);
        }

        .details-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .details-btn:hover {
          text-decoration: underline;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-active);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-top: 0.25rem;
        }

        .modal-close {
          font-size: 1.8rem;
          color: var(--text-muted);
          line-height: 1;
        }

        .modal-close:hover {
          color: var(--text-primary);
        }

        .modal-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .modal-subtitle {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .modal-list {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }
      `}</style>
    </section>
  );
}
