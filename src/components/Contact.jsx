import React, { useState } from 'react';
import { personalInfo, references } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for backend, microservice engineering, and full-stack software development discussions.
          </p>
        </div>

        <div className="grid-2 contact-grid">
          {/* Contact Direct Info & References */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h3 className="info-card-title">Contact Channels</h3>
              
              <div className="contact-links-list">
                <a href={`mailto:${personalInfo.email}`} className="contact-link-item">
                  <div className="link-icon">
                    <Mail size={18} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <span className="link-label">Email Address</span>
                    <span className="link-val">{personalInfo.email}</span>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-link-item">
                  <div className="link-icon">
                    <Phone size={18} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <span className="link-label">Phone</span>
                    <span className="link-val">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="contact-link-item">
                  <div className="link-icon">
                    <MapPin size={18} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <span className="link-label">Location</span>
                    <span className="link-val">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="social-links-row">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* References Section */}
            <div className="references-wrap">
              <h4 className="ref-heading">
                <UserCheck size={18} color="var(--accent-cyan)" />
                <span>Professional References</span>
              </h4>

              <div className="ref-list">
                {references.map((ref, idx) => (
                  <div key={idx} className="ref-card glass-card">
                    <div className="ref-info">
                      <span className="ref-name">{ref.name}</span>
                      <span className="ref-title">{ref.title} • <span className="ref-comp">{ref.company}</span></span>
                    </div>
                    <a href={`mailto:${ref.email}`} className="ref-email">{ref.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Direct Message</h3>

              {submitted ? (
                <div className="success-toast">
                  <CheckCircle2 size={28} color="var(--accent-emerald)" />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmet Yılmaz"
                      className="form-input"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ahmet@company.com"
                      className="form-input"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Software Engineering Opportunity"
                      className="form-input"
                      value={formState.subject}
                      onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your inquiry or project scope..."
                      className="form-input"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: rgba(15, 23, 42, 0.4);
        }

        .contact-grid {
          gap: 2.5rem;
        }

        .info-card {
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .info-card-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .link-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid var(--border-active);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .link-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .link-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .social-links-row {
          display: flex;
          gap: 1rem;
        }

        .references-wrap {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ref-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ref-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ref-card {
          padding: 1rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ref-name {
          display: block;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .ref-title {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .ref-comp {
          color: var(--accent-cyan);
        }

        .ref-email {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        /* Form */
        .contact-form {
          padding: 2.25rem;
        }

        .form-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .success-toast {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
