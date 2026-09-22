import { resume } from "@/data/resume";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="icon">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="icon">
      <path d="M8 2v11M4 9l4 4 4-4" />
    </svg>
  );
}

function ProjectVisual({
  accent,
  index
}: {
  accent: "coral" | "mint";
  index: number;
}) {
  return (
    <div className={`project-visual visual-${accent}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-toolbar">
          <span />
          <span />
          <span />
          <b>{index === 1 ? "vault / overview" : "best pick / compare"}</b>
        </div>
        <div className="visual-content">
          {index === 1 ? (
            <>
              <div className="visual-sidebar">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="visual-main">
                <strong>Good data, clear mind.</strong>
                <div className="visual-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="visual-cards">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </>
          ) : (
            <div className="visual-recommendation">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <b>why this one?</b>
              <span>matches your priorities</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Mithun Nagaraj home">
          MN<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-availability" href="#contact">
          <span className="status-dot" />
          Let&apos;s talk
        </a>
        <ThemeToggle />
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m Mithun</p>
          <h1>
            Making complex things feel <em>simple.</em>
          </h1>
          <p className="hero-intro">{resume.intro}</p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-coral" href="#projects">
              See my work <ArrowUpRight />
            </a>
            <a className="button button-coral" href="#about">
              More about me <ArrowDown />
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="hero-circle circle-large" />
          <div className="hero-circle circle-small" />
          <span className="hero-mark-label">curious<br />by default</span>
        </div>
        <div className="hero-bottom">
          <span>Based in {resume.location}</span>
          <span>Currently crafting full-stack AI products</span>
          <span className="scroll-note">Scroll to explore <ArrowDown /></span>
        </div>
      </section>

      <section className="about section-shell section-grid" id="about">
        <div className="section-label"><span>About</span></div>
        <div className="about-content">
          <h2>
            Technology is most powerful when it feels <em>human.</em>
          </h2>
          <div className="about-columns">
            {resume.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <a className="inline-link" href={`mailto:${resume.email}`}>
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="work section-shell section-grid" id="work">
        <div className="section-label"><span>Experience</span></div>
        <div className="timeline">
          {resume.experience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-marker">
                <i />
              </div>
              <div className="timeline-detail">
                <div className="timeline-heading">
                  <div>
                    <p className="muted">{item.period} · {item.location}</p>
                    <h3>{item.company}</h3>
                    <p className="role">{item.role}</p>
                  </div>
                  <span className="timeline-arrow">↗</span>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell section-grid" id="projects">
        <div className="section-label"><span>Selected projects</span></div>
        <div className="projects-content">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Built from curiosity</p>
              <h2>A few things I&apos;ve <em>made.</em></h2>
            </div>
            <p>Small, thoughtful experiments and products built around real questions.</p>
          </div>
          <div className="project-list">
            {resume.projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <ProjectVisual accent={project.accent} index={index + 1} />
                <div className="project-info">
                  <div>
                    <p className="project-label">{project.label}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                      Explore <ArrowUpRight />
                    </a>
                  ) : <span className="project-status">In the lab</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills section-shell section-grid" id="skills">
        <div className="section-label"><span>Toolkit</span></div>
        <div className="skills-content">
          <h2>Tools are just tools.<br /><em>Curiosity is the real skill.</em></h2>
          <div className="skill-list">
            {resume.skills.map((skill, index) => (
              <span key={skill}><b>{String(index + 1).padStart(2, "0")}</b>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials section-shell section-grid">
        <div className="section-label"><span>Credentials</span></div>
        <div className="credentials-content">
          <div className="credential-block">
            <p className="eyebrow">Certifications</p>
            {resume.certifications.map((cert) => (
              <div className="credential-row" key={cert.title}>
                <div><h3>{cert.title}</h3><p>{cert.issuer}</p></div>
                <span>{cert.year}</span>
              </div>
            ))}
          </div>
          <div className="credential-block education-block">
            <p className="eyebrow">Education</p>
            <div className="credential-row">
              <div><h3>{resume.education.degree}</h3><p>{resume.education.school}</p></div>
              <span>{resume.education.year}</span>
            </div>
            <div className="credential-row">
              <div><h3>{resume.secondEducation.degree}</h3><p>{resume.secondEducation.school}</p></div>
              <span>{resume.secondEducation.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Have a good idea?</p>
          <h2>Let&apos;s make it<br /><em>real.</em></h2>
          <div className="contact-details">
            <a className="contact-email" href={`mailto:${resume.email}`}>{resume.email}<ArrowUpRight /></a>
            <a className="contact-phone" href="tel:+16474590647">+1.647.459.0647</a>
          </div>
          <div className="contact-orbit orbit-large" aria-hidden="true" />
          <div className="contact-orbit orbit-small" aria-hidden="true" />
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="wordmark" href="#top">MN<span>.</span></a>
        <p>© {new Date().getFullYear()} Mithun Nagaraj. Engineering thoughtful digital experiences.</p>
        <div className="social-links">
          <a href={resume.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href={resume.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
