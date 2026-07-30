import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download, ShieldCheck, Code, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="bg-glow-orb glow-cyan"></div>
      <div className="bg-glow-orb glow-purple"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} color="var(--accent-cyan)" />
              <span>Enterprise Software Engineer & Microservices</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-subtitle">{personalInfo.subtitle}</h2>

            <p className="hero-description">{personalInfo.summary}</p>

            <div className="hero-location-wrap">
              <div className="meta-item">
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="meta-item">
                <Mail size={16} color="var(--accent-cyan)" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Get In Touch</span>
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="icon-btn" 
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="icon-btn" 
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Widget - Interactive Code & Architecture Terminal Card */}
          <div className="hero-widget">
            <div className="terminal-window glass-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">merve-architecture-core.cs</div>
                <div className="terminal-badge">
                  <Cpu size={14} color="var(--accent-cyan)" />
                  <span>Platform360 IoT</span>
                </div>
              </div>

              <div className="terminal-body">
                <pre className="code-block">
<code>{`// Enterprise IoT Microservice Controller
[ApiController]
[Route("api/v1/telemetry")]
[Authorize(Roles = "PlatformAdmin")]
public class TelemetryPipelineController : ControllerBase 
{
    private readonly ITelemetryService _telemetryService;

    public TelemetryPipelineController(ITelemetryService telemetry) {
        _telemetryService = telemetry;
    }

    [HttpPost("stream")]
    public async Task<IActionResult> ProcessTelemetry([FromBody] TelemetryBatch batch) 
    {
        // Real-time telemetry processing pipeline
        var result = await _telemetryService.IngestBatchAsync(batch);
        return Ok(new { 
            status = "SUCCESS", 
            processedCount = result.Count,
            latencyMs = result.ExecutionTimeMs 
        });
    }
}`}</code>
                </pre>
              </div>

              <div className="terminal-footer">
                <div className="tech-badge-row">
                  <span className="tech-chip">C# .NET 8</span>
                  <span className="tech-chip">Node.js</span>
                  <span className="tech-chip">Spring Boot</span>
                  <span className="tech-chip">Docker</span>
                  <span className="tech-chip">Keycloak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 9rem;
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid var(--border-active);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }

        .hero-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .hero-location-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .meta-item a:hover {
          color: var(--accent-cyan);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .icon-btn {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .icon-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px);
          background: rgba(0, 242, 254, 0.08);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-card {
          padding: 1rem;
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-cyan);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.2;
        }

        /* Terminal Window Widget */
        .terminal-window {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0b1120;
          border: 1px solid var(--border-active);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: #070a14;
          border-bottom: 1px solid var(--border-color);
        }

        .terminal-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .terminal-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .terminal-body {
          padding: 1.25rem;
          overflow-x: auto;
        }

        .code-block {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          line-height: 1.5;
          color: #a5f3fc;
        }

        .terminal-footer {
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid var(--border-color);
        }

        .tech-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
