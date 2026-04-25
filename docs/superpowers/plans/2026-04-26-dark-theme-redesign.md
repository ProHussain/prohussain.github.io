# Dark Theme Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the neumorphic light theme with a dark Android-native aesthetic (dark bg + Android green accent) across all 8 sections, and update content to match the LinkedIn profile.

**Architecture:** All changes are confined to existing CSS files and `index.html` — no new files, no build tools. CSS variables are rewritten in `global.css` as the single source of truth; all other files consume those variables. `index.html` receives structural changes only in the hero and experience sections.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript (no changes to JS). Verify with `python3 -m http.server 8000` after each task.

---

## File Map

| File | What changes |
|------|-------------|
| `css/global.css` | Full token rewrite; body bg; headings; shared components (social links, buttons, separator, scroll-to-top) |
| `css/styles.css` | Header, sidebar, hero layout (`.hero--image-box` → `.hero--terminal`) |
| `css/impact-metrics.css` | Full rewrite: grid → horizontal flex strip |
| `css/principal-enhancements.css` | Skills cards, project cards, timeline, blog cards, features, education |
| `css/queries.css` | Replace `.hero--image-box` refs with `.hero--terminal`; remove hardcoded colors |
| `css/animations.css` | Add `@keyframes blink` for terminal cursor; no other changes needed (keyframes are transform/opacity only) |
| `css/services-contact.css` | Dark surface/border treatment |
| `index.html` | Hero: replace image box with terminal window div, update role text, update bio. Skills: add Cross-Platform + iOS cards, update Languages + Monetization. Experience: restructure all 4 companies with accurate LinkedIn data. |

---

## Task 1: CSS Token Foundation

**Files:**
- Modify: `css/global.css`

- [ ] **Step 1: Replace the `:root` block**

Open `css/global.css`. Replace the entire `:root { ... }` block (lines 23–38) with:

```css
:root {
  --color-bg:           #0d1117;
  --color-surface:      #161b22;
  --color-surface-2:    #21262d;
  --color-border:       #30363d;
  --color-border-muted: #21262d;
  --color-text:         #e6edf3;
  --color-text-muted:   #8b949e;
  --color-accent:       #3DDC84;
  --color-accent-dark:  #1B5E20;
  --color-accent-dim:   rgba(61, 220, 132, 0.1);
}
```

- [ ] **Step 2: Update body background and text color**

Find the `body { ... }` block and replace it:

```css
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

- [ ] **Step 3: Update the separator**

Find `.seperator { ... }` and replace it:

```css
.seperator {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--color-border);
}
```

- [ ] **Step 4: Update heading colors**

Find and update each heading rule:

```css
.heading-sub {
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-accent);
}

.heading-primary {
  font-size: 6.2rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 2rem;
  margin-top: 1.4rem;
  color: var(--color-text);
}

.heading-primary span {
  color: var(--color-accent);
}

.heading-secondary {
  font-size: 4.4rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 0.5px;
  margin-bottom: 3.2rem;
}

.heading-tertiary {
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.5px;
  margin-bottom: 2.4rem;
  transition: color 0.3s linear;
}
```

- [ ] **Step 5: Update social links**

Find and replace the social link styles:

```css
.social-link {
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 9px;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.social-link:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-dim);
  transform: none;
}

.social-icon {
  font-size: 2rem;
  color: var(--color-accent);
}
```

- [ ] **Step 6: Update the scroll-to-top button**

Find `.to-up-btn` and `.to-up-arrow` and replace:

```css
.to-up-btn {
  position: fixed;
  bottom: 3.2rem;
  right: 3.2rem;
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s;
}

.to-up-btn:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-dim);
}

.to-up-btn.show {
  opacity: 1;
  visibility: visible;
}

.to-up-arrow {
  font-size: 2.4rem;
  color: var(--color-accent);
  transition: all 0.4s;
}
```

- [ ] **Step 7: Update the generic `.btn` component**

```css
.btn {
  display: block;
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 1.6rem 2.4rem;
  background: var(--color-surface);
  border-radius: 9px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.btn:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-dim);
}

.btn span,
.btn i {
  position: relative;
  font-size: 1.6rem;
  color: var(--color-accent);
}

.btn span {
  left: -0.2rem;
  font-weight: 500;
  transition: all 0.4s;
}

.btn i {
  top: 2px;
  left: 0.2rem;
  transition: all 0.4s;
}
```

- [ ] **Step 8: Verify in browser**

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Expected: page background is `#0d1117` (near-black). All text visible in white/light. Separator lines are thin `#30363d` lines instead of a thick grey block. Headings are white. Social icons are green. Scroll-to-top button (visible after scrolling) is dark with green arrow.

- [ ] **Step 9: Commit**

```bash
git add css/global.css
git commit -m "feat: rewrite CSS token system for dark Android theme"
```

---

## Task 2: Header & Sidebar

**Files:**
- Modify: `css/styles.css`

- [ ] **Step 1: Update header background**

Find `.main-header { ... }` and add background and border:

```css
.main-header {
  height: 9.6rem;
  padding: 0 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}
```

- [ ] **Step 2: Update logo color**

Find `.header-title` (if not present, add it) — the `<h1 class="header-title">` gets:

```css
.header-title {
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.4rem;
  font-weight: 700;
}
```

- [ ] **Step 3: Update nav link color**

Find `.nav-link { ... }` and replace color-related properties:

```css
.nav-link {
  display: inline-block;
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-link:hover {
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: calc(1.2rem - 1px);
}
```

- [ ] **Step 4: Remove `.nav-btn` neumorphic styles** (no nav-btn in HTML, but clean up the CSS)

Delete or comment out the entire `.nav-btn { ... }` and `.nav-btn:hover { ... }` blocks.

- [ ] **Step 5: Update sidebar buttons**

Find `.sidebar--close-btn, .sidebar--open-btn { ... }` and replace:

```css
.sidebar--close-btn,
.sidebar--open-btn {
  width: 4.4rem;
  height: 4.4rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.sidebar--close-btn:hover,
.sidebar--open-btn:hover {
  border-color: var(--color-accent);
}

.sidebar--close-icon,
.sidebar--open-icon {
  font-size: 2rem;
  color: var(--color-accent);
}
```

- [ ] **Step 6: Update sidebar panel**

Find `.sidebar { ... }` and change `background-color`:

```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 375px;
  max-width: 100%;
  height: 100%;
  padding: 3.2rem 3.2rem;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform 0.4s, visibility 0.4s;
}
```

- [ ] **Step 7: Update sidebar overlay opacity**

Find `.sidebar--overlay { ... }` and update background:

```css
.sidebar--overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s, visibility 0.4s;
}
```

- [ ] **Step 8: Update sidebar description text**

```css
.sidebar--desc {
  font-size: 1.6rem;
  line-height: 1.8;
  margin-bottom: 6.4rem;
  color: var(--color-text-muted);
}
```

- [ ] **Step 9: Verify in browser**

```bash
# server already running at http://localhost:8000
```

Expected: header is dark with a `#30363d` bottom border. Logo "Portfolio" text is green. Nav links are muted grey, turn green on hover. Open the sidebar (hamburger) — sidebar panel is `#161b22` dark, close button is dark circle with green X.

- [ ] **Step 10: Commit**

```bash
git add css/styles.css
git commit -m "feat: dark header, nav, and sidebar"
```

---

## Task 3: Hero HTML Restructure

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update the hero role tag and bio**

Find in `index.html`:
```html
<span class="heading-sub">Principal Software Engineer - Android</span>
<h1 class="heading-primary">
  Hi, I'm <span>Ghulam Hussain</span>
</h1>
<p class="hero--text-desc">
  Principal Android Engineer specializing in scalable mobile architecture, Kotlin-first development, and
  system-level optimization. Proven track record of delivering high-scale apps used by 1M–20M users with 99.9%
  crash-free performance. Experienced technical leader driving monetization growth, performance improvements, and
  cross-team engineering alignment.
</p>
```

Replace with:
```html
<span class="heading-sub">Full-Stack Mobile Developer · Android · Flutter · iOS · KMP</span>
<h1 class="heading-primary">
  Hi, I'm <span>Ghulam Hussain</span>
</h1>
<p class="hero--text-desc">
  6+ years building high-performance apps across Android, Flutter, iOS, and KMP.
  Clean Architecture, monetization strategy, and 20M+ users reached.
</p>
```

- [ ] **Step 2: Replace the hero image box with the terminal window**

Find the entire `<div class="hero--image-box">` block:
```html
<div class="hero--image-box">
  <img src="images/mine.png" alt="Inbio Picture" class="hero--inbio-image" />
</div>
```

Replace it with:
```html
<div class="hero--terminal">
  <div class="terminal-titlebar">
    <span class="terminal-dot terminal-dot--red"></span>
    <span class="terminal-dot terminal-dot--yellow"></span>
    <span class="terminal-dot terminal-dot--green"></span>
    <span class="terminal-label">ghulam@android ~ </span>
  </div>
  <div class="terminal-body">
    <div><span class="terminal-prompt">❯</span> <span class="terminal-cmd">cat profile.json</span></div>
    <div class="terminal-bracket">{</div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"platforms"</span><span class="terminal-bracket">: </span><span class="terminal-val">"Android · Flutter · iOS · KMP"</span><span class="terminal-bracket">,</span></div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"users_reached"</span><span class="terminal-bracket">: </span><span class="terminal-val">"20M+"</span><span class="terminal-bracket">,</span></div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"crash_free"</span><span class="terminal-bracket">: </span><span class="terminal-val">"99.9%"</span><span class="terminal-bracket">,</span></div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"revenue_growth"</span><span class="terminal-bracket">: </span><span class="terminal-val">"+30%"</span><span class="terminal-bracket">,</span></div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"apps_built"</span><span class="terminal-bracket">: </span><span class="terminal-val">"15+"</span><span class="terminal-bracket">,</span></div>
    <div class="terminal-line">&nbsp;&nbsp;<span class="terminal-key">"experience"</span><span class="terminal-bracket">: </span><span class="terminal-val">"6 years"</span></div>
    <div class="terminal-bracket">}</div>
    <div><span class="terminal-prompt">❯</span> <span class="terminal-cursor">&nbsp;</span></div>
  </div>
</div>
```

- [ ] **Step 3: Update sidebar description to match new title**

Find in the sidebar:
```html
<p class="sidebar--desc">
  Principal Android Engineer specializing in scalable mobile architecture, Kotlin-first development, and
  system-level optimization.
</p>
```

Replace with:
```html
<p class="sidebar--desc">
  Full-Stack Mobile Developer across Android, Flutter, iOS, and KMP. Clean Architecture, monetization, and 20M+ users reached.
</p>
```

- [ ] **Step 4: Verify HTML is valid**

```bash
# open http://localhost:8000
```

Expected: hero shows text on left, a broken/unstyled box on right (the terminal div has no CSS yet — that's fine). No console errors. Page structure intact.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: restructure hero — terminal window replaces image, update bio and title"
```

---

## Task 4: Hero CSS (Split Layout + Terminal Window)

**Files:**
- Modify: `css/styles.css`

- [ ] **Step 1: Update hero layout to split**

Find `.hero { ... }` and replace:

```css
.hero {
  padding: 6.4rem 16rem;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  min-height: 80vh;
}
```

- [ ] **Step 2: Update hero text box**

Find `.hero--text-box { ... }` and replace:

```css
.hero--text-box {
  flex: 1.2;
  display: flex;
  flex-direction: column;
}
```

- [ ] **Step 3: Update hero text description**

Find `.hero--text-desc { ... }` and replace:

```css
.hero--text-desc {
  font-size: 1.6rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  max-width: 48rem;
  margin-bottom: 3.2rem;
}
```

- [ ] **Step 4: Update hero social spacing**

Find `.hero--social { ... }` and replace:

```css
.hero--social {
  margin-top: 3.2rem;
  display: flex;
}

.hero--social .social-media {
  flex: 1;
}
```

- [ ] **Step 5: Remove the old hero image box styles and add terminal styles**

Delete the entire `.hero--image-box { ... }`, `.hero--image-box::before { ... }`, and `.hero--inbio-image { ... }` blocks.

Then add the terminal window styles after `.hero--social`:

```css
/* Terminal Window */
.hero--terminal {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  min-height: 28rem;
}

.terminal-titlebar {
  background: var(--color-surface-2);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.terminal-dot {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  display: inline-block;
}

.terminal-dot--red    { background: #ff5f57; }
.terminal-dot--yellow { background: #febc2e; }
.terminal-dot--green  { background: #28c840; }

.terminal-label {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  font-family: monospace;
  margin-left: 0.8rem;
}

.terminal-body {
  padding: 2rem 2.4rem;
  font-family: monospace;
  font-size: 1.3rem;
  line-height: 1.9;
}

.terminal-prompt { color: var(--color-accent); }
.terminal-cmd    { color: var(--color-text-muted); }
.terminal-key    { color: #79c0ff; }
.terminal-val    { color: var(--color-accent); }
.terminal-bracket { color: var(--color-text); }
.terminal-line   { padding-left: 0.8rem; }

.terminal-cursor {
  display: inline-block;
  border-right: 2px solid var(--color-accent);
  animation: blink 1s step-end infinite;
}
```

- [ ] **Step 6: Verify in browser**

Expected: hero is a two-column layout. Left: role tag in green, big name, muted bio, social links. Right: a dark card with macOS-style traffic-light dots in the title bar, JSON-style output with blue keys and green values, blinking cursor at the bottom.

- [ ] **Step 7: Commit**

```bash
git add css/styles.css
git commit -m "feat: hero split layout and terminal window CSS"
```

---

## Task 5: Blinking Cursor Animation & Impact Metrics Strip

**Files:**
- Modify: `css/animations.css`
- Modify: `css/impact-metrics.css`

- [ ] **Step 1: Add `@keyframes blink` to animations.css**

Open `css/animations.css` and add at the bottom:

```css
/* Terminal cursor blink */
@keyframes blink {
  0%, 100% { border-color: var(--color-accent); }
  50%       { border-color: transparent; }
}
```

- [ ] **Step 2: Rewrite impact-metrics.css**

Replace the entire contents of `css/impact-metrics.css` with:

```css
/* Impact Metrics — horizontal stats strip */

.impact-metrics {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 2.4rem 4.8rem;
}

/* Hide the section heading — strip has no title */
.impact-metrics .heading-sub,
.impact-metrics .heading-secondary {
  display: none;
}

.metrics-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
}

.metric-card {
  text-align: center;
  background: none;
  box-shadow: none;
  border: none;
  border-radius: 0;
  padding: 0 3.2rem;
  transition: none;
  flex: 1;
}

.metric-card + .metric-card {
  border-left: 1px solid var(--color-border);
}

.metric-card:hover {
  transform: none;
  box-shadow: none;
}

/* Hide icon — strip layout doesn't use it */
.metric-icon {
  display: none;
}

.metric-number {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 0.4rem;
}

/* Remove the .success variant — all numbers same green */
.metric-number.success {
  color: var(--color-accent);
}

.metric-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 48em) {
  .metrics-container {
    flex-direction: column;
    gap: 2.4rem;
  }

  .metric-card + .metric-card {
    border-left: none;
    border-top: 1px solid var(--color-border);
    padding-top: 2.4rem;
  }

  .impact-metrics {
    padding: 2.4rem;
  }
}
```

- [ ] **Step 3: Verify in browser**

Expected: cursor blinks green in the hero terminal. The Impact Metrics section is now a compact horizontal strip with no heading — four numbers (20M+, 99.9%, +30%, 15+) in green, separated by vertical `#30363d` lines, labels in muted caps below each.

- [ ] **Step 4: Commit**

```bash
git add css/animations.css css/impact-metrics.css
git commit -m "feat: blinking cursor animation and impact metrics stats strip"
```

---

## Task 6: Skills Section — HTML & CSS

**Files:**
- Modify: `index.html`
- Modify: `css/principal-enhancements.css`

- [ ] **Step 1: Replace the skills grid HTML**

In `index.html`, find the `<div class="skills-category-grid">` block and replace its entire contents with the updated 12-category grid:

```html
<div class="skills-category-grid">

  <div class="skill-category-card">
    <h3>Languages</h3>
    <p class="skill-category-desc">Kotlin as primary language, Java for legacy systems, Swift for iOS, Dart for Flutter, and C++ for low-level optimization.</p>
    <div class="skill-tags">
      <span>Kotlin (expert)</span><span>Java</span><span>Swift</span><span>Dart</span><span>C++</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Android</h3>
    <p class="skill-category-desc">Building reactive, scalable UIs with Jetpack Compose and handling complex background operations with Coroutines and WorkManager.</p>
    <div class="skill-tags">
      <span>Jetpack Compose</span><span>Room</span><span>WorkManager</span><span>ViewModel</span><span>Coroutines</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Cross-Platform</h3>
    <p class="skill-category-desc">Delivering cross-platform experiences from a single codebase via Flutter and shared business logic via Kotlin Multiplatform.</p>
    <div class="skill-tags">
      <span>Flutter</span><span>KMP</span><span>React Native</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>iOS</h3>
    <p class="skill-category-desc">Native iOS development with Swift and UIKit, App Store publishing, and compliance with Apple platform guidelines.</p>
    <div class="skill-tags">
      <span>Swift</span><span>UIKit</span><span>SwiftUI</span><span>App Store</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Architecture & DI</h3>
    <p class="skill-category-desc">Designing testable, maintainable codebases using Clean Architecture, MVVM, MVI, and SOLID patterns with Hilt, Dagger 2, and Koin.</p>
    <div class="skill-tags">
      <span>Clean Architecture</span><span>MVVM</span><span>MVI</span><span>SOLID</span><span>Hilt</span><span>Koin</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Data Layer</h3>
    <p class="skill-category-desc">Architecting offline-first solutions with Room and DataStore, synchronizing with Firebase RTDB and Firestore.</p>
    <div class="skill-tags">
      <span>Room</span><span>SQLite</span><span>DataStore</span><span>Firebase RTDB</span><span>Firestore</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Networking</h3>
    <p class="skill-category-desc">Robust networking layers for RESTful APIs and real-time sockets with secure, efficient data transmission.</p>
    <div class="skill-tags">
      <span>Retrofit2</span><span>OkHttp</span><span>WebSockets</span><span>REST APIs</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Monetization</h3>
    <p class="skill-category-desc">Deep hands-on experience with AdMob, Facebook Audience Network, A/B testing, and eCPM optimization for sustainable revenue without hurting retention.</p>
    <div class="skill-tags">
      <span>AdMob</span><span>Facebook Audience Network</span><span>A/B Testing</span><span>eCPM Optimization</span><span>IAP</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Cloud & Analytics</h3>
    <p class="skill-category-desc">Leveraging Firebase and GCP for backend services, with deep knowledge of Play Console and App Store Connect.</p>
    <div class="skill-tags">
      <span>Firebase</span><span>GCP</span><span>Google Play Console</span><span>App Store Connect</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Testing</h3>
    <p class="skill-category-desc">Ensuring application stability through comprehensive unit, integration, and UI testing suites.</p>
    <div class="skill-tags">
      <span>JUnit</span><span>Espresso</span><span>UI Automator</span><span>LeakCanary</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>Deployment & Quality</h3>
    <p class="skill-category-desc">Managing the full lifecycle from CI/CD pipelines to Play Store and App Store compliance, automated code quality checks.</p>
    <div class="skill-tags">
      <span>Play Store</span><span>App Store</span><span>GitHub/GitLab</span><span>Gradle</span><span>ProGuard/R8</span><span>Lint/Detekt</span>
    </div>
  </div>

  <div class="skill-category-card">
    <h3>System Design & Leadership</h3>
    <p class="skill-category-desc">Leading engineering teams, defining technical roadmaps, and designing scalable system architectures for complex mobile applications.</p>
    <div class="skill-tags">
      <span>System Design</span><span>Tech Leadership</span><span>Agile/Scrum</span><span>Mentoring</span><span>Code Review</span>
    </div>
  </div>

</div>
```

- [ ] **Step 2: Add skills CSS to principal-enhancements.css**

Open `css/principal-enhancements.css`. Replace the existing skills-related rules (`.skill-category-card h3`, etc.) and add the full dark skills card system at the top of the file:

```css
/* ============================================
   SKILLS SECTION
   ============================================ */

.skills-category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.skill-category-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1.6rem;
  transition: border-color 0.2s ease;
}

.skill-category-card:hover {
  border-color: var(--color-accent);
}

.skill-category-card h3 {
  color: var(--color-accent);
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.8rem;
}

.skill-category-desc {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tags span {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 1.0rem;
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
}

/* First tag in each card gets green accent */
.skill-tags span:first-child {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

- [ ] **Step 3: Verify in browser**

Expected: 12 skill cards in a 3-column dark grid. Each card has a green uppercase heading, muted description, and pill tags. First tag in each card has a green border and green text. Cards get a green border on hover.

- [ ] **Step 4: Commit**

```bash
git add index.html css/principal-enhancements.css
git commit -m "feat: skills section — dark cards, 12 categories with cross-platform and iOS"
```

---

## Task 7: Portfolio Section CSS

**Files:**
- Modify: `css/principal-enhancements.css`

- [ ] **Step 1: Add portfolio card dark styles**

Append to `css/principal-enhancements.css`:

```css
/* ============================================
   PORTFOLIO SECTION
   ============================================ */

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: none;
}

/* Green accent line at bottom on hover */
.project-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::after {
  opacity: 1;
}

.project-card--head img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  display: block;
  background: var(--color-surface-2);
}

.project-card--body {
  padding: 1.4rem;
}

.project-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.project-type {
  font-size: 1.0rem;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 0.1rem 0.8rem;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-stats {
  font-size: 1.1rem;
  color: var(--color-text-muted);
}

.project-stats i {
  color: var(--color-accent);
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.project-link {
  color: var(--color-text);
  transition: color 0.3s ease;
}

.project-card:hover .project-link {
  color: var(--color-accent);
}

.project-desc {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Flagship card — Custom Ads SDK */
.project-card--flagship {
  background: linear-gradient(135deg, #0d2818, var(--color-surface));
  border-color: var(--color-accent);
}

.project-card--flagship .project-type {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
}

.project-card--flagship .project-title .project-link {
  color: var(--color-accent);
}
```

- [ ] **Step 2: Add flagship class to Custom Ads SDK card in index.html**

Find the Custom Ads SDK project card in `index.html`:
```html
<div class="project-card">
  ...
  <h3 class="heading-tertiary project-title">
    <a href="#" class="project-link">Custom Ads SDK</a>
  </h3>
```

Change the opening div to:
```html
<div class="project-card project-card--flagship">
```

- [ ] **Step 3: Verify in browser**

Expected: 3-column dark project card grid. Cards have a thin `#30363d` border that turns green on hover with a subtle upward lift. Project type badge is green-bordered pill. The Custom Ads SDK card has a permanent green border and darker green gradient background.

- [ ] **Step 4: Commit**

```bash
git add css/principal-enhancements.css index.html
git commit -m "feat: portfolio dark cards with hover accent, flagship SDK card"
```

---

## Task 8: Experience Timeline — HTML & CSS

**Files:**
- Modify: `index.html`
- Modify: `css/principal-enhancements.css`

- [ ] **Step 1: Replace the entire experience timeline HTML**

In `index.html`, find `<div class="timeline">` and replace its entire contents:

```html
<div class="timeline">

  <!-- Beyond Apps Group — CURRENT -->
  <div class="timeline-step timeline-step--current">
    <div class="timeline-content">
      <div class="timeline-badge">CURRENT</div>
      <h3>Senior Android Developer</h3>
      <span class="timeline-company">Beyond Apps Group</span>
      <span class="timeline-date">Jan 2026 – Present · Lahore</span>
      <ul>
        <li>Leading multi-module Android video editor (MyZesty) using MVVM/MVI, Kotlin & Java</li>
        <li>End-to-end development of Genie, an AI-powered video maker and editor</li>
        <li>Integrating ML features, collaborating with ML and backend teams</li>
        <li>Conducting code reviews and upholding engineering best practices</li>
      </ul>
    </div>
    <div class="timeline-arrow"></div>
  </div>

  <!-- OZI Publishing — multi-role -->
  <div class="timeline-step">
    <div class="timeline-content">
      <div class="timeline-company-header">
        <h3>OZI Publishing</h3>
        <span class="timeline-duration">1 yr 8 months · Lahore</span>
      </div>
      <div class="timeline-subrole">
        <h4>Principal Software Engineer</h4>
        <span class="timeline-date">Jun 2025 – Jan 2026</span>
      </div>
      <div class="timeline-subrole">
        <h4>Senior Android Developer</h4>
        <span class="timeline-date">Jun 2024 – May 2025</span>
      </div>
      <ul>
        <li>20M+ downloads portfolio; ads SDK with SOLID architecture boosting match/show rates</li>
        <li>Monetization strategy via AdMob & Facebook Audience Network; 99%+ crash-free rate</li>
        <li>Mentored Android engineers; maintained app stability and ANR rates</li>
      </ul>
    </div>
    <div class="timeline-arrow"></div>
  </div>

  <!-- Jeux Developers -->
  <div class="timeline-step">
    <div class="timeline-content">
      <h3>Senior Android Developer</h3>
      <span class="timeline-company">Jeux Developers</span>
      <span class="timeline-date">Jun 2022 – May 2024 · Sahiwal</span>
      <ul>
        <li>Led Android development lifecycle with Kotlin & Java; performance optimization</li>
        <li>Delivered service-oriented apps with booking & payment flows; integrated AdMob & IAP</li>
        <li>Mentored junior developers; conducted code reviews and architecture design</li>
      </ul>
    </div>
    <div class="timeline-arrow"></div>
  </div>

  <!-- Facile Solutions — multi-role -->
  <div class="timeline-step timeline-step--faded">
    <div class="timeline-content">
      <div class="timeline-company-header">
        <h3>Facile Solutions</h3>
        <span class="timeline-duration">2 years · Sahiwal</span>
      </div>
      <div class="timeline-subrole">
        <h4>Android Developer</h4>
        <span class="timeline-date">Jul 2021 – Jun 2022</span>
      </div>
      <div class="timeline-subrole">
        <h4>Junior Android Developer</h4>
        <span class="timeline-date">Jul 2020 – Jun 2021</span>
      </div>
      <ul>
        <li>End-to-end app development with Java & Kotlin; collaborated with UI/UX designers</li>
        <li>Migrated app (1M+ users) from Java to Kotlin; built real-time Firebase features</li>
      </ul>
    </div>
  </div>

</div>
```

- [ ] **Step 2: Add timeline CSS to principal-enhancements.css**

Append to `css/principal-enhancements.css`:

```css
/* ============================================
   EXPERIENCE TIMELINE
   ============================================ */

.timeline {
  position: relative;
  padding-left: 2.8rem;
  border-left: 2px solid var(--color-accent);
}

.timeline-step {
  position: relative;
  margin-bottom: 2.4rem;
}

/* Timeline dot */
.timeline-step::before {
  content: "";
  position: absolute;
  left: -3.5rem;
  top: 0.8rem;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: var(--color-bg);
  border: 2px solid var(--color-accent);
  box-sizing: border-box;
}

/* Current role dot — filled with glow ring */
.timeline-step--current::before {
  background: var(--color-accent);
  border: 3px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-accent);
}

/* Oldest entry — dimmed dot */
.timeline-step--faded::before {
  border-color: var(--color-border);
}

.timeline-content {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
}

/* Current role card — green border + gradient bg */
.timeline-step--current .timeline-content {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, #0d2818, var(--color-surface));
}

/* Oldest entry — reduced opacity */
.timeline-step--faded .timeline-content {
  opacity: 0.8;
}

/* CURRENT badge */
.timeline-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color-accent);
  color: #000;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: monospace;
  letter-spacing: 1px;
  padding: 0.3rem 1rem;
  border-radius: 0 10px 0 8px;
}

.timeline-content h3 {
  color: var(--color-text);
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.timeline-company {
  display: block;
  color: var(--color-accent);
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.timeline-date {
  display: block;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

/* Multi-role company header */
.timeline-company-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.2rem;
}

.timeline-company-header h3 {
  color: var(--color-accent);
  margin-bottom: 0;
}

.timeline-duration {
  color: var(--color-text-muted);
  font-size: 1.1rem;
}

/* Sub-role entries */
.timeline-subrole {
  padding: 0.6rem 0 0.6rem 1.2rem;
  border-left: 2px solid var(--color-border-muted);
  margin-bottom: 0.8rem;
}

.timeline-subrole h4 {
  color: var(--color-text);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

/* Timeline bullet points */
.timeline-content ul {
  list-style: none;
  padding: 0;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.timeline-content li {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  color: var(--color-text-muted);
  font-size: 1.2rem;
  line-height: 1.6;
}

.timeline-content li::before {
  content: "▸";
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

/* Remove old timeline-arrow styling */
.timeline-arrow {
  display: none;
}
```

- [ ] **Step 3: Verify in browser**

Expected: vertical green left border line. Four entries: Beyond Apps Group has a filled green dot with glow ring and a "CURRENT" badge on the card. OZI Publishing and Facile Solutions show a company header with two sub-roles indented with a muted left border. Jeux Developers is a single role. Oldest entry (Facile) is slightly faded.

- [ ] **Step 4: Commit**

```bash
git add index.html css/principal-enhancements.css
git commit -m "feat: experience timeline — updated to LinkedIn data, dark cards, multi-role grouping"
```

---

## Task 9: Education, Features & Blog

**Files:**
- Modify: `css/principal-enhancements.css`

- [ ] **Step 1: Add education dark card styles**

Append to `css/principal-enhancements.css`:

```css
/* ============================================
   EDUCATION SECTION
   ============================================ */

.feats.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.feat-box.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  transition: border-color 0.2s ease;
}

.feat-box.card:hover {
  border-color: var(--color-accent);
}

/* Degree card — green border */
.feat-box.card:first-child {
  border-color: var(--color-accent);
}

.feat-icon {
  font-size: 2.2rem;
  color: var(--color-accent);
  margin-bottom: 1.2rem;
  display: block;
}

.feat-box.card .heading-tertiary {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 0.8rem;
}

.feat-desc {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 0.4rem;
}

/* Institution name — first feat-desc after heading */
.feat-box.card .heading-tertiary + .feat-desc {
  color: var(--color-accent);
  font-size: 1.1rem;
}
```

- [ ] **Step 2: Add features/what-I-do dark styles**

Append to `css/principal-enhancements.css`:

```css
/* ============================================
   FEATURES / WHAT I DO SECTION
   ============================================ */

.feats:not(.cards) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.feat-box:not(.card) {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: border-color 0.3s ease;
}

.feat-box:not(.card):hover {
  border-color: var(--color-accent);
}

/* Green left accent bar */
.feat-box:not(.card)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--color-accent);
}

.feat-inner {
  padding: 2rem 2rem 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.feat-box:not(.card) .feat-icon {
  font-size: 2rem;
  color: var(--color-accent);
  margin-bottom: 0;
}

.feat-box:not(.card) .heading-tertiary {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 0;
}

.feat-box:not(.card) .feat-desc {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  flex: 1;
}

.feat-arrow {
  font-size: 1.2rem;
  color: var(--color-accent);
  font-weight: 600;
  align-self: flex-start;
}
```

- [ ] **Step 3: Add blog card dark styles**

Append to `css/principal-enhancements.css`:

```css
/* ============================================
   BLOG & ARTICLES SECTION
   ============================================ */

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.blog-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.3s ease;
}

.blog-card:hover {
  border-color: var(--color-accent);
}

.blog-icon {
  width: 4rem;
  height: 4rem;
  background: var(--color-bg);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--color-accent);
}

/* StackOverflow icon — brand orange */
.blog-icon.stackoverflow {
  border-color: #f48024;
  color: #f48024;
}

/* GitHub icon — muted */
.blog-icon.github {
  border-color: var(--color-border);
  color: var(--color-text);
}

.blog-title {
  color: var(--color-text);
  font-size: 1.4rem;
  font-weight: 600;
}

.blog-desc {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  flex: 1;
}

.blog-stats {
  color: var(--color-text-muted);
  font-size: 1.1rem;
}

.blog-link {
  color: var(--color-accent);
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: opacity 0.2s ease;
}

.blog-link:hover {
  opacity: 0.8;
}
```

- [ ] **Step 4: Verify in browser**

Expected: Education — 3 dark cards, degree card has a permanent green border, institution name in green. Features — 3-column dark cards each with a green 3px left bar. Blog — 3 dark cards with platform icon boxes (green for Medium, orange for SO, muted for GitHub), green CTA links.

- [ ] **Step 5: Commit**

```bash
git add css/principal-enhancements.css
git commit -m "feat: education, features, and blog dark card styles"
```

---

## Task 10: Footer & Clean Up principal-enhancements.css

**Files:**
- Modify: `css/principal-enhancements.css`
- Modify: `css/styles.css`

- [ ] **Step 1: Add footer dark styles to styles.css**

Append to `css/styles.css`:

```css
/* Footer */
.main-footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: 3.2rem;
  text-align: center;
}

.footer-quote {
  color: var(--color-accent);
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}
```

- [ ] **Step 2: Remove stale overrides from principal-enhancements.css**

In `css/principal-enhancements.css`, delete these blocks that are now handled by `global.css`:
- `.heading-secondary { color: var(--color-primary); }` — replaced by global token
- `.nav-link:hover, .nav-link:active { color: var(--color-primary-light); }` — replaced by styles.css
- `.nav-btn { ... }` and `.nav-btn:hover { ... }` — no nav-btn in HTML
- `.social-link:hover { transform: translateY(-2px); }` — replaced by global.css
- `.social-link:hover .social-icon { color: var(--color-primary-lighter); }` — replaced by global.css
- `.timeline-step::before { background-color: var(--color-primary) !important; }` — replaced by timeline CSS

- [ ] **Step 3: Verify in browser**

Expected: footer has a dark background, thin green border-top, quote text in green italic. No console errors. Page looks consistent top to bottom.

- [ ] **Step 4: Commit**

```bash
git add css/styles.css css/principal-enhancements.css
git commit -m "feat: footer dark styles, remove stale neumorphic overrides"
```

---

## Task 11: Responsive Breakpoints

**Files:**
- Modify: `css/queries.css`

- [ ] **Step 1: Replace `.hero--image-box` references with `.hero--terminal`**

Open `css/queries.css`. Find every occurrence of `.hero--image-box` and replace with `.hero--terminal`.

The responsive block at `max-width: 1199px` currently has:
```css
.hero--text-box,
.hero--image-box {
  width: 100%;
}

.hero--text-box {
  order: 2;
}

.hero--image-box {
  order: 1;
}
```

Replace with:
```css
.hero {
  flex-direction: column;
  padding: 4.8rem 3.2rem;
}

.hero--text-box,
.hero--terminal {
  width: 100%;
}

.hero--text-box {
  order: 2;
}

.hero--terminal {
  order: 1;
}
```

- [ ] **Step 2: Update skills grid for medium screens**

Append inside the `max-width: 75em` block (or add one if needed):

```css
@media screen and (max-width: 75em) {
  .skills-category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- [ ] **Step 3: Update small screen stacking**

Append inside the `max-width: 48em` block (or add one if needed):

```css
@media screen and (max-width: 48em) {
  .skills-category-grid,
  .projects-container,
  .feats:not(.cards),
  .feats.cards,
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .timeline-company-header {
    flex-direction: column;
    gap: 0.4rem;
  }
}
```

- [ ] **Step 4: Verify on narrow viewport**

In browser DevTools, set viewport to 375px wide.

Expected: hero stacks (terminal on top, text below). Skills, portfolio, features, blog all collapse to single column. Timeline is readable. No horizontal scroll.

- [ ] **Step 5: Commit**

```bash
git add css/queries.css
git commit -m "feat: responsive breakpoints for dark theme — hero terminal, grid columns"
```

---

## Task 12: Services/Contact CSS & Final Polish

**Files:**
- Modify: `css/services-contact.css`
- Modify: `css/testimonials.css`

- [ ] **Step 1: Apply dark surface treatment to services-contact.css**

Open `css/services-contact.css`. Replace any hardcoded neumorphic colors (`#ecf0f3`, `#e2e8ec`, `#d1d9e6`, `#ffffff` gradients, `box-shadow: 5px 5px 15px`) with the dark token equivalents. The general pattern:

- `background: linear-gradient(145deg, #e2e8ec, #ffffff)` → `background: var(--color-surface)`
- `box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff` → `border: 1px solid var(--color-border)`
- `color: var(--color-primary)` → `color: var(--color-accent)`
- `background-color: #ecf0f3` → `background: var(--color-bg)`

- [ ] **Step 2: Apply dark surface treatment to testimonials.css**

Open `css/testimonials.css`. Apply the same neumorphic → dark surface pattern:

- `background: linear-gradient(145deg, #e2e8ec, #ffffff)` → `background: var(--color-surface)`
- `box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff` → `border: 1px solid var(--color-border)`
- Any `color: var(--color-primary)` or hardcoded `#0D47A1` → `color: var(--color-accent)`

- [ ] **Step 3: Do a final search for any remaining hardcoded light colors**

```bash
grep -n "#ecf0f3\|#e2e8ec\|#d1d9e6\|linear-gradient(145deg" css/styles.css css/global.css css/principal-enhancements.css css/queries.css
```

Expected output: no matches. If any found, replace them with the appropriate dark token.

- [ ] **Step 4: Verify full page in browser**

Open http://localhost:8000 and scroll through every section:
- Header: dark, green logo, muted nav links
- Hero: split layout, terminal window with blinking cursor
- Impact Metrics: horizontal strip, green numbers
- Skills: 3-column dark card grid, 12 categories
- Portfolio: dark cards, green hover border, flagship SDK card
- Experience: vertical green timeline line, CURRENT badge, multi-role grouping
- Education: dark cards, degree card green border
- Features: dark cards with green left bar
- Blog: dark cards with platform icon boxes
- Footer: dark bg, green italic quote

- [ ] **Step 5: Final commit**

```bash
git add css/services-contact.css css/testimonials.css
git commit -m "feat: dark treatment for services/contact and testimonials CSS"
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ Token system (Task 1)
- ✅ Header + sidebar (Task 2)
- ✅ Hero split layout + terminal (Tasks 3–4)
- ✅ Blinking cursor animation (Task 5)
- ✅ Impact Metrics strip (Task 5)
- ✅ Skills — HTML + CSS + new categories (Task 6)
- ✅ Portfolio cards + flagship (Task 7)
- ✅ Experience — HTML restructure + LinkedIn data + CSS (Task 8)
- ✅ Education dark cards (Task 9)
- ✅ Features green left bar (Task 9)
- ✅ Blog platform icon borders (Task 9)
- ✅ Footer (Task 10)
- ✅ Scroll-to-top (Task 1)
- ✅ Responsive breakpoints (Task 11)
- ✅ services-contact.css + testimonials.css (Task 12)

**Type consistency:** All class names used in HTML steps match the CSS written in CSS steps. `.timeline-step--current`, `.timeline-step--faded`, `.project-card--flagship`, `.terminal-*` classes are defined before they are used.

**Ambiguity resolved:** `.feats.cards` (education) vs `.feats:not(.cards)` (features) selectors separate the two uses of the `.feats` class without touching HTML structure.
