import PageEffects from "@/components/PageEffects";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import TypingTestModal from "@/components/TypingTestModal";

export default function Home() {
  return (
    <>
      <PageEffects />

      <div className="page-loader" id="pageLoader">
        <div className="loader-logo">VS.</div>
        <div className="loader-bar">
          <div className="loader-bar-inner"></div>
        </div>
      </div>

      <nav className="sidebar">
        <div className="nav-logo">VS.</div>
        <ul className="nav-links">
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-bottom-actions">
          <div className="theme-dot"></div>
        </div>
      </nav>

      <main className="content-area">
        <section id="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Quezon City · Available for work</p>
            <h1 className="hero-name">VINCE STEPHEN</h1>
            <hr className="hero-divider" />
            <div className="hero-byline">
              <p className="hero-role">System Engineer &amp; Full-Stack Developer</p>
              <div className="hero-cta">
                <a href="#work" className="btn-primary">View Work</a>
                <a href="#contact" className="btn-ghost">Let&apos;s Talk</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="section-label">
            About<br />
            <span>01 / 04</span>
          </div>
          <div className="about-content reveal">
            <h2>
              Architecting <em>scalable solutions</em> and automating enterprise workflows.
            </h2>
            <p>
              I build web and desktop applications with Laravel, Python, and .NET — and I get a specific kind of
              satisfaction from taking a messy legacy codebase and making it fast and boring (in a good way). At
              Denso Ten, that&apos;s meant automating workflows that used to eat hours of manual work every week.
            </p>
            <p>
              Outside of client work, I compete — recently placed Top 10 at the World Student Pitch and 3rd at
              PUP&apos;s Undergrad Thesis Competition, both built around AI-driven science and tech.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-num">3+</div>
                <div className="stat-label">Years of coding</div>
              </div>
              <div>
                <div className="stat-num">3</div>
                <div className="stat-label">Professional Roles</div>
              </div>
              <div>
                <div className="stat-num">Top 10</div>
                <div className="stat-label">World Pitch Finalist</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="section-label">
            Skills<br />
            <span>02 / 04</span>
          </div>
          <div className="skills-content reveal">
            <h2>What I <em>do</em></h2>
            <div className="skills-grid">
              <div className="skill-card">
                <span className="skill-icon">◈</span>
                <h3>Full-Stack Development</h3>
                <p>
                  Building robust applications from the ground up using modern frameworks and reliable backend
                  architectures.
                </p>
                <ul className="skill-evidence">
                  <li>
                    <strong>PHP & Laravel</strong> — Built and maintained production web applications at Denso Ten
                    Solutions, handling backend logic and database architecture for internal enterprise tools.
                  </li>
                  <li>
                    <strong>.NET (C#, VB.NET, ASP.NET, WPF)</strong> — Developed desktop and web applications as
                    part of core system engineering work, including VSTO add-ins for workflow integration.
                  </li>
                  <li>
                    <strong>MySQL, XAMPP, Pentaho</strong> — Designed and managed databases powering internal
                    reporting and automation systems.
                  </li>
                  <li>
                    <strong>Web Development & FTP</strong> — Deployed and maintained live web applications, managing
                    hosting and file transfer for production environments.
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <span className="skill-icon">◉</span>
                <h3>System Engineering</h3>
                <p>Streamlining enterprise operations through strategic workflow automation and platform integration.</p>
                <ul className="skill-evidence">
                  <li>
                    <strong>Power Apps & Power Automate</strong> — Automated enterprise workflows at Denso Ten,
                    cutting manual process time across operations and engineering teams.
                  </li>
                  <li>
                    <strong>VSTO Add-ins & Visual Studio</strong> — Built custom Office integrations to streamline
                    day-to-day operational tasks.
                  </li>
                  <li>
                    <strong>SDLC</strong> — Applied structured development lifecycle practices across intern and
                    full-time engineering roles at Denso Ten.
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <span className="skill-icon">◎</span>
                <h3>QA & Testing</h3>
                <p>Ensuring software reliability and optimizing legacy codebases through rigorous testing methodologies.</p>
                <ul className="skill-evidence">
                  <li>
                    <strong>System Testing</strong> — Led testing cycles during QA internship at Denso Ten,
                    identifying and documenting defects before release.
                  </li>
                  <li>
                    <strong>Unit Testing</strong> — Wrote and maintained unit tests to catch regressions in legacy
                    codebases.
                  </li>
                  <li>
                    <strong>Test Cases</strong> — Designed structured test cases as part of formal QA process during
                    Denso Ten internship.
                  </li>
                  <li>
                    <strong>Quality Assurance</strong> — Owned QA sign-off for workflow automation systems during
                    Software Developer internship.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TechStack />

        <section id="work">
          <div className="section-label">
            Work<br />
            <span>03 / 04</span>
          </div>
          <div className="work-content reveal">
            <h2>Professional <em>Experience</em></h2>
            <div className="project-list">
              <a href="#" className="project-item">
                <span className="project-num">001</span>
                <div className="project-info">
                  <h3>System Engineer</h3>
                  <p>Denso Ten Solutions Phil Corp</p>
                </div>
                <span className="project-year">2025 - Present</span>
                <span className="project-category">Full-Time</span>
                <span className="project-arrow">→</span>
              </a>
              <a href="#" className="project-item">
                <span className="project-num">002</span>
                <div className="project-info">
                  <h3>Software Developer | QA &amp; Testing</h3>
                  <p>Denso Ten Solutions Phil Corp</p>
                </div>
                <span className="project-year">Mar - May 2025</span>
                <span className="project-category">Intern</span>
                <span className="project-arrow">→</span>
              </a>
              <a href="#" className="project-item">
                <span className="project-num">003</span>
                <div className="project-info">
                  <h3>Software Developer</h3>
                  <p>Denso Ten Solutions Phil Corp</p>
                </div>
                <span className="project-year">Jul - Sep 2024</span>
                <span className="project-category">Intern</span>
                <span className="project-arrow">→</span>
              </a>
              <a href="#" className="project-item">
                <span className="project-num">004</span>
                <div className="project-info">
                  <h3>Computer Engineering Technology</h3>
                  <p>Polytechnic University of the Philippines</p>
                </div>
                <span className="project-year">2022 - 2025</span>
                <span className="project-category">Education</span>
                <span className="project-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="section-label">Awards</div>
          <div className="testimonials-content reveal">
            <h2>Honors & <em>Awards</em></h2>
            <div className="testimonials-grid">
              <div className="award-card">
                <div className="award-header-row">
                  <div className="award-badge">WP</div>
                  <span className="award-date">August 2025</span>
                </div>
                <h3 className="award-title">Top 10 Finalist</h3>
                <p className="award-competition">The World Student Pitch 2025</p>
                <p className="award-desc">
                  Recognized globally for innovative, AI-driven science and technology solution among student
                  entrepreneurs worldwide.
                </p>
              </div>
              <div className="award-card">
                <div className="award-header-row">
                  <div className="award-badge">PUP</div>
                  <span className="award-date">July 2025</span>
                </div>
                <h3 className="award-title">3rd Place</h3>
                <p className="award-competition">PUP Undergrad Thesis Competition</p>
                <p className="award-desc">
                  Awarded by the Research Institute for Science & Technology for outstanding undergraduate research
                  in advanced tech applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-label">
            Contact<br />
            <span>04 / 04</span>
          </div>
          <div className="contact-content reveal">
            <div className="contact-grid">
              <div className="contact-left">
                <h2>Let&apos;s build something <em>remarkable</em> together.</h2>
                <p>Open to select freelance projects and full-time opportunities. Response within 24 hours.</p>
                <div className="contact-links">
                  <a href="mailto:sabanganvince6@gmail.com" className="contact-link">
                    <span>✉</span> Email me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vince-stephen-sabangan-0b5ab7329"
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>in</span> LinkedIn
                  </a>
                  <span className="contact-link"><span>lc</span> Quezon City, PH</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-logo">VS.</div>
          <div className="footer-copy">© 2026 Vince Stephen Sabangan. All rights reserved.</div>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/vince-stephen-sabangan-0b5ab7329"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:sabanganvince6@gmail.com">Email</a>
            <TypingTestModal />
          </div>
        </footer>
      </main>
    </>
  );
}
