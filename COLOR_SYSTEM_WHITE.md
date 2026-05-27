/* ===== COLOR SYSTEM — WHITE MODERN ===== */

/* ── DEFAULT: White / Light ────────────────────────────────── */
:root, [data-theme="light"] {
  --bg:           #ffffff;
  --surface:      #f8f7f4;
  --surface2:     #f0ede6;
  --border:       #e5e2db;
  --accent:       #191714;        /* deep warm charcoal — bold on white */
  --accent2:      #c9952f;        /* warm gold pop                       */
  --text:         #0f0e0d;
  --muted:        #9d978f;
  --faint:        #f4f2ec;
  --nav-bg:       rgba(255,255,255,0.94);
  --card-hover:   #f6f4ef;
  --text-soft:    rgba(15,14,13,0.55);

  /* ── Modern depth ── */
  --shadow-sm:    0 1px 4px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.03);
  --shadow-md:    0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  --shadow-lg:    0 12px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05);

  /* ── Hardcoded rgba replacements ── */
  --ring-color-1: rgba(25,23,20,0.10);
  --ring-color-2: rgba(25,23,20,0.06);
  --ring-color-3: rgba(25,23,20,0.04);
  --dot-glow:     rgba(25,23,20,0.18);
  --badge-border: rgba(25,23,20,0.18);
}

/* ── DARK THEME ─────────────────────────────────────────────── */
[data-theme="dark"] {
  --bg:           #0a0a0a;
  --surface:      #111111;
  --surface2:     #1a1a1a;
  --border:       #222222;
  --accent:       #c8a96e;
  --accent2:      #7eb8c8;
  --text:         #e8e2d9;
  --muted:        #666666;
  --faint:        #2a2a2a;
  --nav-bg:       rgba(10,10,10,0.95);
  --card-hover:   #1a1a1a;
  --text-soft:    rgba(232,226,217,0.7);

  --shadow-sm:    0 1px 4px rgba(0,0,0,0.4);
  --shadow-md:    0 4px 20px rgba(0,0,0,0.6);
  --shadow-lg:    0 12px 48px rgba(0,0,0,0.8);

  --ring-color-1: rgba(200,169,110,0.15);
  --ring-color-2: rgba(126,184,200,0.10);
  --ring-color-3: rgba(200,169,110,0.07);
  --dot-glow:     rgba(200,169,110,0.50);
  --badge-border: rgba(200,169,110,0.30);
}


/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px;
  line-height: 1.7;
  overflow-x: hidden;
  cursor: none;
  transition: background 0.5s ease, color 0.5s ease;
}

/* Noise overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9997;
  opacity: 0.25;   /* lighter on white */
}
[data-theme="dark"] body::before { opacity: 0.6; }


/* ===== CUSTOM CURSOR ===== */
.cursor {
  position: fixed; width: 10px; height: 10px;
  background: var(--accent); border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  mix-blend-mode: multiply;  /* works beautifully on white */
}
[data-theme="dark"] .cursor { mix-blend-mode: difference; }
.cursor-ring {
  position: fixed; width: 36px; height: 36px;
  border: 1px solid var(--accent); border-radius: 50%;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  opacity: 0.4;
}
.cursor.hover { width: 18px; height: 18px; }
.cursor-ring.hover { width: 60px; height: 60px; opacity: 0.15; }


/* ===== PAGE LOADER ===== */
.page-loader {
  position: fixed; inset: 0;
  background: var(--bg); z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 1.5rem;
}
.loader-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem; color: var(--accent);
  letter-spacing: 0.15em;
  opacity: 0;
  animation: loaderFadeIn 0.6s ease 0.2s forwards;
}
.loader-bar {
  width: 120px; height: 2px;
  background: var(--border); border-radius: 1px;
  overflow: hidden; opacity: 0;
  animation: loaderFadeIn 0.4s ease 0.5s forwards;
}
.loader-bar-inner {
  width: 0; height: 100%;
  background: var(--accent);
  animation: loaderFill 0.8s ease 0.6s forwards;
}
.page-loader.exit {
  animation: loaderSlideUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}
@keyframes loaderFadeIn { to { opacity: 1; } }
@keyframes loaderFill { to { width: 100%; } }
@keyframes loaderSlideUp { to { transform: translateY(-100%); } }


/* ===== NAV ===== */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.5rem 4rem;
  background: linear-gradient(to bottom, var(--nav-bg), transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);     /* ← modern depth */
  transition: background 0.5s ease, box-shadow 0.3s ease;
}
.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem; letter-spacing: 0.15em; color: var(--accent);
}
.nav-right { display: flex; align-items: center; gap: 2.5rem; }
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color 0.3s; position: relative;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1px; background: var(--accent);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { width: 100%; }

/* Theme toggle */
.theme-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  background: transparent; border: 1px solid var(--border);
  color: var(--accent); cursor: none;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; transition: all 0.3s ease;
}
.theme-toggle:hover {
  background: var(--accent); color: var(--bg);
  border-color: var(--accent); transform: rotate(180deg);
}


/* ===== HERO ===== */
#hero {
  min-height: 100vh; display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative; overflow: hidden;
}
.hero-left {
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 8rem 4rem 6rem;
  position: relative; z-index: 2;
}
.hero-eyebrow {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--accent2); margin-bottom: 1.5rem;  /* warm gold for eyebrow */
  opacity: 0; animation: fadeUp 0.8s ease 0.3s forwards;
}
.hero-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(5rem, 9vw, 9rem);
  line-height: 0.9; letter-spacing: 0.02em;
  color: var(--text);
  opacity: 0; animation: fadeUp 0.8s ease 0.5s forwards;
}
.hero-name em {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-weight: 300; color: var(--accent2);
}
.hero-role {
  font-size: 1.1rem; font-weight: 300; font-style: italic;
  color: var(--muted); margin-top: 1.5rem;
  opacity: 0; animation: fadeUp 0.8s ease 0.7s forwards;
}
.hero-cta {
  margin-top: 3rem; display: flex; gap: 1.5rem; align-items: center;
  opacity: 0; animation: fadeUp 0.8s ease 0.9s forwards;
}
.btn-primary {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--bg); background: var(--accent);
  border: none; padding: 1rem 2.2rem;
  text-decoration: none;
  box-shadow: var(--shadow-md);     /* ← modern lift */
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
}
.btn-primary:hover {
  background: var(--accent2); box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
.btn-ghost {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  display: flex; align-items: center; gap: 0.5rem;
  transition: color 0.3s;
}
.btn-ghost:hover { color: var(--text); }
.btn-ghost::after { content: '→'; transition: transform 0.3s; }
.btn-ghost:hover::after { transform: translateX(4px); }

.hero-right { position: relative; overflow: hidden; }
.hero-image-block {
  position: absolute; inset: 0; background: var(--surface);
}
.hero-image-block::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--surface2) 0%, var(--surface) 50%, var(--bg) 100%);
}
.hero-abstract {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.abstract-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid; animation: slowRotate 20s linear infinite;
}
/* Use CSS variables instead of hardcoded rgba gold */
.abstract-ring:nth-child(1) { width: 300px; height: 300px; border-color: var(--ring-color-1); animation-duration: 30s; }
.abstract-ring:nth-child(2) { width: 200px; height: 200px; border-color: var(--ring-color-2); animation-duration: 20s; animation-direction: reverse; }
.abstract-ring:nth-child(3) { width: 420px; height: 420px; border-color: var(--ring-color-3); animation-duration: 45s; }
.abstract-dot {
  width: 6px; height: 6px; background: var(--accent);
  border-radius: 50%; box-shadow: 0 0 20px var(--dot-glow);
}
.hero-scroll-hint {
  position: absolute; bottom: 3rem; left: 4rem;
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--muted); display: flex; align-items: center; gap: 1rem;
  opacity: 0; animation: fadeUp 0.8s ease 1.2s forwards;
}
.hero-scroll-hint::before { content: ''; width: 40px; height: 1px; background: var(--border); }
.hero-number {
  position: absolute; bottom: 6rem; right: 4rem;
  font-family: 'Bebas Neue', sans-serif; font-size: 10rem;
  color: var(--faint); line-height: 1; user-select: none; z-index: 1;
}


/* ===== ABOUT ===== */
#about {
  display: grid; grid-template-columns: 1fr 2fr;
  gap: 6rem; padding: 10rem 4rem;
  border-top: 1px solid var(--border); position: relative;
}
.section-label {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--accent2); position: sticky; top: 8rem; height: fit-content;
}
.section-label span { display: block; color: var(--muted); margin-top: 0.5rem; }
.about-content h2 {
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  font-weight: 300; line-height: 1.2; margin-bottom: 2rem;
}
.about-content h2 em { font-style: italic; color: var(--accent2); }
.about-content p {
  font-size: 1.05rem; color: var(--text-soft);
  margin-bottom: 1.5rem; font-weight: 300;
}
.about-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2rem; margin-top: 4rem; padding-top: 3rem;
  border-top: 1px solid var(--border);
}
.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem; color: var(--accent); line-height: 1;
}
.stat-label {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); margin-top: 0.3rem;
}


/* ===== SKILLS ===== */
#skills {
  padding: 8rem 4rem;
  border-top: 1px solid var(--border);
  background: var(--surface);
  transition: background 0.5s ease;
}
.skills-header {
  display: flex; justify-content: space-between;
  align-items: flex-end; margin-bottom: 5rem;
}
.skills-header h2 { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 300; }
.skills-header h2 em { font-style: italic; color: var(--accent2); }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.skill-card {
  background: var(--bg); padding: 2.5rem;
  border: 1px solid var(--border); position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);     /* ← subtle card lift */
  transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
}
.skill-card::before {
  content: ''; position: absolute; top: 0; left: 0;
  width: 100%; height: 2px; background: var(--accent);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s ease;
}
.skill-card:hover {
  background: var(--card-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.skill-card:hover::before { transform: scaleX(1); }
.skill-icon { font-size: 1.5rem; margin-bottom: 1.5rem; display: block; }
.skill-card h3 { font-size: 1.3rem; font-weight: 400; margin-bottom: 1rem; }
.skill-card p { font-size: 0.9rem; color: var(--muted); font-weight: 300; line-height: 1.7; }

/* Progress bars */
.skill-bars { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
.skill-bar-item { display: flex; flex-direction: column; gap: 0.3rem; }
.skill-bar-label {
  display: flex; justify-content: space-between;
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.1em; color: var(--accent2);
}
.skill-bar-track { width: 100%; height: 2px; background: var(--border); border-radius: 1px; }
.skill-bar-fill {
  height: 100%; width: 0; background: var(--accent);
  border-radius: 1px; transition: width 1.2s ease-out;
}


/* ===== WORK ===== */
#work { padding: 8rem 4rem; border-top: 1px solid var(--border); }
.work-header {
  display: flex; justify-content: space-between;
  align-items: flex-end; margin-bottom: 5rem;
}
.work-header h2 { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 300; }
.work-header h2 em { font-style: italic; color: var(--accent2); }
.work-index {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  color: var(--muted); letter-spacing: 0.15em;
}
.project-list { display: flex; flex-direction: column; }
.project-item {
  display: grid; grid-template-columns: 80px 1fr auto 120px;
  align-items: center; gap: 2rem; padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none; color: var(--text);
  position: relative; transition: padding-left 0.3s ease; overflow: hidden;
}
.project-item::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px; background: var(--accent);
  transform: scaleY(0); transition: transform 0.3s ease;
}
.project-item:hover { padding-left: 1.5rem; }
.project-item:hover::before { transform: scaleY(1); }
.project-num {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  color: var(--muted); letter-spacing: 0.1em;
}
.project-info h3 { font-size: 1.4rem; font-weight: 400; margin-bottom: 0.3rem; transition: color 0.3s; }
.project-item:hover h3 { color: var(--accent2); }
.project-info p { font-size: 0.85rem; color: var(--muted); font-weight: 300; }
.project-year {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  color: var(--muted); justify-self: center;
}
.project-category {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--accent2); border: 1px solid var(--badge-border);  /* ← CSS var */
  padding: 0.3rem 0.8rem; text-align: center;
}
.project-arrow {
  position: absolute; right: 0; font-size: 1.2rem;
  color: var(--muted); transition: transform 0.3s ease, color 0.3s;
}
.project-item:hover .project-arrow { transform: translateX(-8px); color: var(--accent); }


/* ===== TESTIMONIALS ===== */
#testimonials {
  padding: 8rem 4rem; border-top: 1px solid var(--border);
  background: var(--surface); transition: background 0.5s ease;
}
.testimonials-header { margin-bottom: 5rem; }
.testimonials-header h2 { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 300; }
.testimonials-header h2 em { font-style: italic; color: var(--accent2); }
.testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
.testimonial-card {
  background: var(--bg); padding: 3rem;
  border: 1px solid var(--border); position: relative;
  box-shadow: var(--shadow-sm);     /* ← modern lift */
  transition: background 0.5s ease, box-shadow 0.4s ease;
}
.testimonial-card:hover { box-shadow: var(--shadow-md); }
.quote-mark {
  font-family: 'Bebas Neue', sans-serif; font-size: 5rem;
  color: var(--accent2); opacity: 0.2; line-height: 0.8; margin-bottom: 1rem;
}
.testimonial-card blockquote {
  font-size: 1.05rem; font-weight: 300; font-style: italic;
  color: var(--text-soft); line-height: 1.8; margin-bottom: 2rem;
}
.testimonial-author { display: flex; align-items: center; gap: 1rem; }
.author-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--faint); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--accent2);
}
.author-info strong { display: block; font-size: 0.9rem; font-weight: 600; }
.author-info span {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  color: var(--muted); letter-spacing: 0.1em;
}


/* ===== CONTACT ===== */
#contact {
  padding: 10rem 4rem; border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 1fr; gap: 8rem;
}
.contact-left h2 {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 300; line-height: 1.15; margin-bottom: 2rem;
}
.contact-left h2 em { font-style: italic; color: var(--accent2); }
.contact-left p { font-size: 1rem; color: var(--muted); font-weight: 300; margin-bottom: 3rem; }
.contact-links { display: flex; flex-direction: column; gap: 1rem; }
.contact-link {
  display: flex; align-items: center; gap: 1rem;
  font-family: 'DM Mono', monospace; font-size: 0.75rem;
  letter-spacing: 0.1em; color: var(--muted);
  text-decoration: none; transition: color 0.3s;
  padding: 0.8rem 0; border-bottom: 1px solid var(--border);
}
.contact-link:hover { color: var(--accent); }
.contact-link span { color: var(--accent2); opacity: 0.5; }
.contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-group label {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--muted); display: block; margin-bottom: 0.5rem;
}
.form-group input, .form-group textarea {
  width: 100%; background: var(--surface);
  border: 1px solid var(--border); color: var(--text);
  font-family: 'Cormorant Garamond', serif; font-size: 1rem;
  padding: 0.9rem 1rem;
  box-shadow: var(--shadow-sm);     /* ← subtle input depth */
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none; resize: none;
}
.form-group input:focus, .form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(25,23,20,0.06);
}
[data-theme="dark"] .form-group input:focus,
[data-theme="dark"] .form-group textarea:focus {
  box-shadow: 0 0 0 3px rgba(200,169,110,0.10);
}
.form-group textarea { height: 120px; }
.btn-send {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  background: transparent; color: var(--text);
  border: 1px solid var(--border); padding: 1.1rem 2rem;
  cursor: none; transition: background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
  align-self: flex-start;
}
.btn-send:hover {
  background: var(--accent); color: var(--bg);
  border-color: var(--accent); box-shadow: var(--shadow-md);
}
.form-success {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  color: var(--accent2); margin-top: 0.5rem; opacity: 0;
  transition: opacity 0.4s ease;
}
.form-success.show { opacity: 1; }


/* ===== FOOTER ===== */
footer {
  padding: 3rem 4rem; border-top: 1px solid var(--border);
  display: flex; justify-content: space-between; align-items: center;
}
.footer-logo {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem;
  letter-spacing: 0.15em; color: var(--accent);
}
.footer-copy {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  color: var(--muted); letter-spacing: 0.1em;
}
.footer-socials { display: flex; gap: 1.5rem; }
.footer-socials a {
  font-family: 'DM Mono', monospace; font-size: 0.6rem;
  letter-spacing: 0.15em; color: var(--muted);
  text-decoration: none; text-transform: uppercase; transition: color 0.3s;
}
.footer-socials a:hover { color: var(--accent); }


/* ===== ANIMATIONS ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.reveal {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }


/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  nav { padding: 1.2rem 2rem; }
  .nav-links { gap: 1.5rem; }
  #hero { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .hero-left { padding: 8rem 2rem 5rem; }
  #about { grid-template-columns: 1fr; gap: 3rem; padding: 6rem 2rem; }
  .section-label { position: static; }
  #skills, #work, #testimonials, #contact { padding: 6rem 2rem; }
  .skills-grid { grid-template-columns: 1fr; }
  .project-item { grid-template-columns: 60px 1fr; }
  .project-year, .project-category { display: none; }
  .testimonials-grid { grid-template-columns: 1fr; }
  #contact { grid-template-columns: 1fr; gap: 4rem; }
  footer { flex-direction: column; gap: 1rem; text-align: center; }
  body { cursor: auto; }
  .cursor, .cursor-ring { display: none; }
}
