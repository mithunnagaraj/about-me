import { resume } from "@/data/resume";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
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

const companies = ["Bosch", "GE Healthcare", "Philips", "Scotiabank", "BMO", "Mobile Fringe"] as const;
type Company = (typeof companies)[number];

const companyLogoDetails: Record<Company, { className: string; initials: string }> = {
  Bosch: { className: "company-bosch", initials: "B" },
  "GE Healthcare": { className: "company-ge", initials: "GE" },
  Philips: { className: "company-philips", initials: "P" },
  Scotiabank: { className: "company-scotia", initials: "S" },
  BMO: { className: "company-bmo", initials: "M" },
  "Mobile Fringe": { className: "company-mobile-fringe", initials: "MF" }
};

function CompanyLogo({ company }: { company: Company }) {
  const { className, initials } = companyLogoDetails[company];

  return (
    <div className={`company-logo ${className}`} role="img" aria-label={company}>
      {company === "Bosch" ? (
        <Image className="company-bosch-image" src="/bosch.svg" alt="" aria-hidden="true" width={433} height={97} />
      ) : company === "BMO" ? (
        <Image className="company-bmo-image" src="/bmo.svg" alt="" aria-hidden="true" width={144} height={50} />
      ) : company === "Scotiabank" ? (
        <Image className="company-scotia-image" src="/scotiabank.svg" alt="" aria-hidden="true" width={272} height={40} />
      ) : company === "GE Healthcare" ? (
        <Image
          className="company-ge-image"
          src="/ge-healthcare.svg"
          alt=""
          aria-hidden="true"
          width={144}
          height={32}
        />
      ) : company === "Philips" ? (
        <Image className="company-philips-image" src="/philips.svg" alt="" aria-hidden="true" width={48} height={48} />
      ) : company === "Mobile Fringe" ? (
        <svg className="company-mobile-fringe-mark" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 2 96 28v44L50 98 4 72V28L50 2Z" fill="currentColor" />
          <path d="m27 73 9-45 14 27 14-27 9 45H61l-3-22-8 17-8-17-3 22H27Z" fill="#fff" />
        </svg>
      ) : (
        <span className="company-logo-mark" aria-hidden="true">{initials}</span>
      )}
      {company !== "Bosch" && company !== "GE Healthcare" && company !== "BMO" && company !== "Scotiabank" && (
        <span className="company-logo-name">{company}</span>
      )}
    </div>
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
  const impactHighlights = [
    { value: "16+", label: "years building software" },
    { value: "8", label: "engineers led" },
    { value: "30%+", label: "increase in self-serve education" },
    { value: "~40%", label: "fewer AI tokens used" }
  ];
  const credentialsByYear = [
    ...resume.certifications.map((certification) => ({
      year: certification.year,
      type: "Certification",
      title: certification.title,
      detail: certification.issuer
    })),
    ...[resume.education, resume.secondEducation].map((education) => ({
      year: education.year,
      type: "Graduation",
      title: education.degree,
      detail: education.school.split(" · ")[0]
    }))
  ].reduce<Record<string, { type: string; title: string; detail: string }[]>>((milestones, item) => {
    milestones[item.year] = [...(milestones[item.year] ?? []), item];
    return milestones;
  }, {});
  const credentialMilestones = Object.entries(credentialsByYear)
    .sort(([yearA], [yearB]) => Number(yearA) - Number(yearB));
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Mithun Nagaraj home">
          {resume.name}<span>.</span>
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
        <MobileNav />
      </nav>

      <section className="company-strip" aria-label="Companies I've worked with">
        <div className="company-strip-inner section-shell">
          <p className="company-strip-label">Worked with</p>
          <div className="company-marquee">
            <div className="company-track">
              {[0, 1].map((copy) => (
                <div className="company-group" key={copy} aria-hidden={copy === 1}>
                  {companies.map((company) => <CompanyLogo company={company} key={company} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero section-shell" id="top">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-name">{resume.name}</p>
            <p className="eyebrow">{resume.role} <span>·</span> {resume.location}</p>
            <h1>
              Making complex technology feel <em>simple.</em>
            </h1>
            <p className="hero-intro">{resume.intro}</p>
            <div className="hero-actions" aria-label="Hero actions">
              <a className="button button-coral" href="#projects">
                Explore my work <ArrowUpRight />
              </a>
              <a className="button button-outline" href="#about">
                About me <ArrowDown />
              </a>
            </div>
          </div>
          <aside className="hero-proof" aria-label="Career highlights">
            <div className="hero-proof-heading">
              <p className="section-kicker">Impact, in practice</p>
              <span className="status-dot" aria-hidden="true" />
            </div>
            <div className="hero-metrics">
              {impactHighlights.map((highlight) => (
                <div className="hero-metric" key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
            <p className="hero-proof-note">Engineering leadership grounded in thoughtful product outcomes.</p>
          </aside>
        </div>
        <div className="hero-bottom">
          <span>Based in {resume.location}</span>
          <span>Building reliable, human-centered AI experiences</span>
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
          <a className="inline-link" href="#contact">
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
          <div className="skills-heading">
            <h2>Tools are just tools.<br /><em>Curiosity is the real skill.</em></h2>
            <p>From shaping ideas to supporting production software, I bring a broad toolkit and a practical, end-to-end engineering mindset.</p>
          </div>
          <div className="skill-groups">
            {resume.skillGroups.map((group) => (
              <article className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials section-shell section-grid">
        <div className="section-label"><span>Credentials</span></div>
        <div className="credentials-content">
          <div className="credential-chart">
            <div className="credential-chart-heading">
              <div>
                <p className="eyebrow">Education &amp; certifications</p>
                <h3 id="credential-chart-title">Milestones through the years</h3>
              </div>
            </div>
            <ol className="credential-fishbone" aria-labelledby="credential-chart-title">
              {credentialMilestones.map(([year, milestones], index) => (
                <li
                  className={`credential-milestone ${index % 2 === 0 ? "milestone-above" : "milestone-below"}`}
                  key={year}
                >
                  <span className="credential-milestone-stem" aria-hidden="true" />
                  <span className="credential-milestone-year">{year}</span>
                  <div className="credential-milestone-card">
                    {milestones.map((milestone) => (
                      <div className="credential-event" key={`${milestone.type}-${milestone.title}`}>
                        <span>{milestone.type}</span>
                        <h4>{milestone.title}</h4>
                        <p>{milestone.detail}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Have a good idea?</p>
          <h2>Let&apos;s make it<br /><em>real.</em></h2>
          <div className="contact-details">
            <a className="contact-email" href={`mailto:${resume.email}`}>{resume.email}<ArrowUpRight /></a>
            <a className="contact-email" href={`${resume.social.linkedin}`} target="_blank" rel="noreferrer">Mithun Nagaraj<ArrowUpRight /></a>
            <a className="contact-phone" href="tel:+16474590647">+1.647.459.0647</a>
          </div>
          <div className="contact-orbit orbit-large" aria-hidden="true" />
          <div className="contact-orbit orbit-small" aria-hidden="true" />
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="wordmark" href="#top">{resume.name}<span>.</span></a>
        <p>© {new Date().getFullYear()} Mithun Nagaraj. Engineering thoughtful digital experiences.</p>
        <div className="social-links">
          <a href={resume.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href={resume.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
