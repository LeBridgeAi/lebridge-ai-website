# LeBridge.ai Website Redesign - Migration Guide

**Repo Location**: `/Users/guillaumedechalambert/lebridge-ai-website/`
**Status**: Ready to Migrate from Current Site to New Design
**Current Structure**: Static HTML + CSS (GitHub Pages)

---

## Current State Analysis

### What Exists
- `index.html` — Homepage (basic hero + 3-card grid)
- `styles.css` — Global styles (dark theme already applied)
- `pages/` — Services, About, Contact pages
- `gruau/` — Gruau Collection section (leave as-is)
- `assets/` — Images and logos
- Theme toggle (dark/light mode support)

### What Needs to Change
- Hero section (copy, layout, CTA)
- Remove feature cards (not in approved design)
- Add problem section (3 pain points)
- Add approach section (4 pillars)
- Add timeline section (engagement model)
- Update navigation
- Update footer
- Remove theme toggle (use dark-only per approved design)

---

## Migration Strategy (HTML/CSS Only)

Since this is a static HTML site, we'll:

1. **Keep the existing structure** (GitHub Pages, HTML)
2. **Replace the hero section** with new copy and layout
3. **Replace the cards section** with problem section
4. **Add new sections** (approach, timeline)
5. **Update styles.css** with approved color palette
6. **Update navigation and footer**

No React needed. Keep it simple and fast.

---

## Step-by-Step Implementation

### Phase 1: Update Color Palette (30 min)

In `styles.css`, update `:root` section:

**REPLACE THIS**:
```css
:root {
  --bg: #050608;
  --surface: #15161b;
  --surface-soft: #101116;
  --accent: #4ea3ff;
  --accent-soft: rgba(78, 163, 255, 0.14);
  --text-main: #f5f5f5;
  --text-secondary: #a5a7b3;
  --border-subtle: #262630;
  --shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  --shadow-hover: 0 22px 60px rgba(0, 0, 0, 0.65);
  --radius-lg: 18px;
}
```

**WITH THIS**:
```css
:root {
  /* Dark background */
  --bg-primary: #0f1419;
  --bg-surface: #111318;

  /* Text */
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
  --text-tertiary: #6b7280;

  /* Accents */
  --color-blue: #3b82f6;
  --color-blue-light: #60a5fa;
  --color-amber: #f59e0b;
  --color-amber-light: #fbbf24;

  /* Borders */
  --border-subtle: #1f2937;

  /* Shadows */
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.4);
  --radius-lg: 12px;
}
```

Then update body:
```css
body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}
```

---

### Phase 2: Update Hero Section (1 hour)

**Replace this HTML block** in `index.html`:

```html
<section class="hero">
  <div class="hero-kicker">AI Operations Studio</div>
  <h1 class="hero-title">LeBridge AI</h1>
  <p class="hero-subtitle">
    AI Operations, agents, and automations built with clarity and precision — from workflow design to production-ready systems.
  </p>
  <button class="btn-primary" onclick="location.href='pages/services.html'">
    Explore Services
  </button>
</section>
```

**WITH THIS**:

```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Build AI systems that scale with your operations.</h1>

    <p class="hero-subheading">We design the architecture. You own the execution.</p>

    <p class="hero-supporting">
      Most organizations treat AI as a tool problem. We treat it as a systems problem. That's why our clients end up with systems that actually scale.
    </p>

    <div class="hero-cta">
      <a href="#contact" class="btn-primary">Schedule a working session</a>
      <a href="#approach" class="btn-secondary">Explore how it works →</a>
    </div>
  </div>

  <div class="hero-visual">
    <!-- Optional: SVG architectural diagram or image -->
  </div>
</section>
```

**Update hero CSS** in `styles.css`:

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding: 96px 0;
  border-bottom: 1px solid var(--border-subtle);
}

.hero-title {
  font-size: clamp(48px, 7vw, 64px);
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 24px;
  font-weight: 600;
}

.hero-subheading {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-weight: 400;
  line-height: 1.4;
}

.hero-supporting {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 24px;
  align-items: center;
}

.hero-visual {
  min-height: 400px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-visual {
    display: none;
  }
}
```

---

### Phase 3: Replace Cards Section with Problem Section (1 hour)

**Replace this HTML block**:

```html
<section>
  <div class="cards-grid">
    <div class="card">
      <h3>AI Automation</h3>
      <p>End-to-end automation for operations, workflows, and process systems.</p>
    </div>
    <div class="card">
      <h3>Voice &amp; Agent Systems</h3>
      <p>Custom voice agents and GPT-powered toolchains built for real ROI.</p>
    </div>
    <div class="card">
      <h3>Operational Intelligence</h3>
      <p>Dashboards, data systems, and predictive intelligence workflows.</p>
    </div>
  </div>
</section>
```

**WITH THIS**:

```html
<section class="section section-problem" id="problem">
  <h2>Why most AI implementations fail at scale</h2>

  <div class="problems-grid">
    <div class="problem-item">
      <h3>Ad-hoc automation</h3>
      <p>Tools picked for features, not architecture. Gaps emerge. Redundancy grows. Chaos accelerates.</p>
    </div>

    <div class="problem-item">
      <h3>Execution drift</h3>
      <p>Plans don't match reality. Systems drift. Teams lose shared mental models. Decisions become scattered.</p>
    </div>

    <div class="problem-item">
      <h3>Team friction</h3>
      <p>No unified approach. Different teams, different tools, different understandings. Costly integration work. Constant rework.</p>
    </div>
  </div>
</section>
```

**Add CSS**:

```css
.section {
  padding: 64px 0;
  border-bottom: 1px solid var(--border-subtle);
}

.section h2 {
  font-size: clamp(32px, 5vw, 40px);
  margin-bottom: 48px;
  text-align: center;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.problem-item {
  padding: 32px;
}

.problem-item h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.problem-item p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .problems-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### Phase 4: Add Approach Section (1.5 hours)

**Add this new section** after the problem section:

```html
<section class="section section-approach" id="approach">
  <h2>Our approach: Systems-first AI</h2>

  <div class="pillars-grid">
    <div class="pillar">
      <h3>Architectural Precision</h3>
      <p class="pillar-subtitle">Design before execution</p>
      <p>We map your operations first. Then we design the AI system architecture. Then you execute. Not the reverse.</p>
    </div>

    <div class="pillar">
      <h3>Operational Alignment</h3>
      <p class="pillar-subtitle">Every decision tied to context</p>
      <p>Your business context is everything. We don't import generic AI playbooks. We build specific systems for your operations.</p>
    </div>

    <div class="pillar">
      <h3>Executive Clarity</h3>
      <p class="pillar-subtitle">Defensible decisions</p>
      <p>You own the system. You need to understand every decision. We design for clarity, not clever complexity.</p>
    </div>

    <div class="pillar">
      <h3>Deliberate Scaling</h3>
      <p class="pillar-subtitle">Repeatable, auditable, sustainable</p>
      <p>Every system we design can scale from pilot to full deployment. You can audit every decision. No black boxes.</p>
    </div>
  </div>
</section>
```

**Add CSS**:

```css
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}

.pillar {
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.pillar:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.pillar h3 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.pillar-subtitle {
  font-size: 12px;
  color: var(--color-amber);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.pillar p {
  color: var(--text-secondary);
  font-size: 15px;
}

/* Responsive */
@media (max-width: 1024px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### Phase 5: Add Timeline Section (1.5 hours)

**Add this new section**:

```html
<section class="section section-timeline" id="timeline">
  <h2>How we work with you</h2>

  <div class="timeline">
    <div class="timeline-stage">
      <div class="stage-number">1</div>
      <h3>Map your operations</h3>
      <p class="stage-duration">Week 1-2</p>
      <ul class="stage-items">
        <li>Understand your business context</li>
        <li>Identify bottlenecks and opportunities</li>
        <li>Document current workflows</li>
      </ul>
      <p class="stage-output">Output: Operations map</p>
    </div>

    <div class="timeline-stage">
      <div class="stage-number">2</div>
      <h3>Design your system</h3>
      <p class="stage-duration">Week 2-3</p>
      <ul class="stage-items">
        <li>Design AI system architecture</li>
        <li>Identify integration points</li>
        <li>Plan execution phases</li>
      </ul>
      <p class="stage-output">Output: System design document</p>
    </div>

    <div class="timeline-stage">
      <div class="stage-number">3</div>
      <h3>Execute deliberately</h3>
      <p class="stage-duration">Week 4+</p>
      <ul class="stage-items">
        <li>Build and integrate</li>
        <li>Train your team</li>
        <li>Hand off ownership</li>
      </ul>
      <p class="stage-output">Output: Live, owned system</p>
    </div>
  </div>
</section>
```

**Add CSS**:

```css
.timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
}

.timeline-stage {
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.02);
  border-left: 2px solid var(--color-blue);
  border-radius: 8px;
}

.stage-number {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-blue);
  margin-bottom: 16px;
}

.timeline-stage h3 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.stage-duration {
  font-size: 12px;
  color: var(--color-amber);
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.stage-items {
  list-style: none;
  margin: 24px 0;
}

.stage-items li {
  font-size: 14px;
  color: var(--text-secondary);
  padding: 8px 0 8px 24px;
  position: relative;
}

.stage-items li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-blue);
}

.stage-output {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-subtle);
}

/* Responsive */
@media (max-width: 1024px) {
  .timeline {
    grid-template-columns: 1fr;
  }
}
```

---

### Phase 6: Add CTA Section (30 min)

**Add this new section**:

```html
<section class="section section-cta" id="contact">
  <div class="cta-container">
    <h2>Ready to build AI infrastructure that scales?</h2>
    <p>Let's talk about your operations and design the system that moves you forward.</p>

    <div class="cta-actions">
      <a href="mailto:hello@lebridge.ai" class="btn-primary">Schedule a working session</a>
      <a href="#approach" class="btn-secondary">View our system design approach →</a>
    </div>
  </div>
</section>
```

**Add CSS**:

```css
.cta-container {
  text-align: center;
  padding: 64px 32px;
}

.cta-container h2 {
  max-width: 600px;
  margin: 0 auto 24px;
}

.cta-container p {
  max-width: 600px;
  margin: 0 auto 48px;
  font-size: 18px;
}

.cta-actions {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
```

---

### Phase 7: Update Navigation & Buttons (30 min)

**Update nav links** to remove unused pages:

```html
<nav class="nav-links">
  <a href="index.html" class="active">Home</a>
  <a href="#approach">Methodology</a>
  <a href="pages/about.html">About</a>
  <a href="mailto:hello@lebridge.ai">Contact</a>
</nav>
```

**Remove theme toggle**:
```html
<!-- Remove this line -->
<!-- <button id="themeToggle" class="theme-toggle">🌙</button> -->
```

**Update button styles**:

```css
.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--color-blue);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--color-blue-light);
  transform: translateY(-2px);
}

.btn-secondary {
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--color-blue);
  border: 1px solid var(--color-blue);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background-color: rgba(59, 130, 246, 0.1);
  border-color: var(--color-blue-light);
  color: var(--color-blue-light);
}
```

---

### Phase 8: Update Footer (15 min)

**Replace footer**:

```html
<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h4>LeBridge</h4>
      <p>Operational systems for AI-driven organizations.</p>
    </div>
    <div class="footer-section">
      <h4>Resources</h4>
      <ul>
        <li><a href="#approach">Methodology</a></li>
        <li><a href="pages/about.html">About</a></li>
        <li><a href="https://arkitek.lebridge.ai" target="_blank" rel="noopener">Arkitek Studio</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:hello@lebridge.ai">hello@lebridge.ai</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2026 LeBridge AI. All rights reserved.</p>
  </div>
</footer>
```

**Add CSS**:

```css
footer {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 64px 0;
  margin-top: 96px;
}

.footer-content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 48px;
}

.footer-section h4 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.footer-section p {
  font-size: 14px;
  color: var(--text-secondary);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 16px;
}

.footer-section ul li a {
  font-size: 14px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--color-blue);
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid var(--border-subtle);
  max-width: 1120px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.footer-bottom p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
```

---

## Implementation Timeline

| Phase | Task | Duration | File |
|-------|------|----------|------|
| **1** | Update color palette | 30 min | styles.css |
| **2** | Update hero section | 1 hour | index.html + styles.css |
| **3** | Replace cards with problem section | 1 hour | index.html + styles.css |
| **4** | Add approach section | 1.5 hours | index.html + styles.css |
| **5** | Add timeline section | 1.5 hours | index.html + styles.css |
| **6** | Add CTA section | 30 min | index.html + styles.css |
| **7** | Update nav & buttons | 30 min | index.html + styles.css |
| **8** | Update footer | 15 min | index.html + styles.css |
| **Total** | Complete redesign | ~6.5 hours | Both files |

---

## What to Do Right Now

1. **Open the repo locally**:
   ```bash
   cd /Users/guillaumedechalambert/lebridge-ai-website
   code .  # or open in your editor
   ```

2. **Start with Phase 1**: Update the color palette in `styles.css`

3. **Then proceed through Phases 2-8** in order

4. **Test locally**: Open `index.html` in a browser, see changes in real-time

5. **Git commit after each phase**:
   ```bash
   git add index.html styles.css
   git commit -m "Phase 2: Update hero section with new copy and layout"
   git push
   ```

6. **Deploy**: GitHub Pages will auto-deploy from main branch

---

## Quality Checklist

Before pushing each phase:

- [ ] Mobile layout works (use browser DevTools)
- [ ] Links are correct
- [ ] Colors match approved palette
- [ ] Typography is readable
- [ ] No console errors

---

## Questions During Implementation?

Reference these approved documents:

- **Copy/content**: See LEBRIDGE_APPROVED_DIRECTION.md
- **Design/colors**: See LEBRIDGE_VISUAL_DESIGN_SPEC.md
- **Hero rationale**: See LEBRIDGE_WEBSITE_REDESIGN_PROPOSAL.md

---

**Ready to start? Begin with Phase 1!**

