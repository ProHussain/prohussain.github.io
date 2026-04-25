# Portfolio Dark Theme Redesign — Design Spec

**Date:** 2026-04-26  
**Scope:** Full visual redesign of prohussain.github.io — all 8 sections, content updated from LinkedIn profile  
**Approach:** Full redesign (Option 1) — clean dark token system, no neumorphic remnants

---

## 1. Goals

- Make a stronger first impression with a dark, Android-native aesthetic
- Improve readability and visual hierarchy across all sections
- Drive recruiter/client action via a more polished, memorable presentation
- All 8 existing sections kept; no content removed

---

## 2. Color & Token System

Replace all neumorphic CSS variables in `global.css` with:

```css
--color-bg:           #0d1117   /* page background */
--color-surface:      #161b22   /* cards, panels */
--color-surface-2:    #21262d   /* nested elements */
--color-border:       #30363d   /* card borders, dividers */
--color-border-muted: #21262d   /* subtle borders */
--color-text:         #e6edf3   /* primary text */
--color-text-muted:   #8b949e   /* secondary/meta text */
--color-accent:       #3DDC84   /* Android green — CTAs, active states */
--color-accent-dark:  #1B5E20   /* green gradients, hover overlays */
--color-accent-dim:   rgba(61,220,132,0.1)  /* green tint backgrounds */
```

**Removals:**
- All neumorphic `box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff` removed
- All `background: linear-gradient(145deg, #e2e8ec, #ffffff)` removed
- `background-color: #ecf0f3` replaced with `var(--color-bg)` on `body`

**Cards:** All card-like elements use `background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px`

**Separator:** `.seperator` becomes `border-top: 1px solid var(--color-border); height: 0` (no height block, just a line)

**Font:** Poppins retained. Base size stays 62.5% (1rem = 10px).

---

## 3. Header & Navigation

**Structure:** Unchanged — sticky header, nav links, hamburger for mobile  
**Styling changes:**
- `background: var(--color-bg)` with `border-bottom: 1px solid var(--color-border)`
- Logo text: `color: var(--color-accent)`, uppercase, letter-spacing
- Nav links: `color: var(--color-text-muted)` default; hover → `color: var(--color-accent)` with `border-bottom: 1px solid var(--color-accent)`. No JS active-state tracking — hover only.
- Sidebar overlay: `background: rgba(0,0,0,0.8)`; sidebar panel: `background: var(--color-surface)`

---

## 4. Hero Section

**Layout:** Two-column split (flex row, gap 32px, align center)

**Left column — intro text:**
- Role tag: `color: var(--color-accent)`, small caps, letter-spacing 3px, `display: block`, margin-bottom
- Text: `"Full-Stack Mobile Developer · Android · Flutter · iOS · KMP"`
- Heading: `color: var(--color-text)`, 6.2rem, "Ghulam Hussain" in `var(--color-accent)`
- Bio paragraph: `color: var(--color-text-muted)`, trimmed to 2 sentences max — e.g. "6+ years building high-performance apps across Android, Flutter, iOS, and KMP. Clean Architecture, monetization strategy, and 20M+ users reached."
- Social icon links: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, 36×36px, border-radius 8px; hover → `border-color: var(--color-accent)`

**Right column — terminal window:**
- Outer: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 12px`, `overflow: hidden`
- Title bar: `background: var(--color-surface-2)`, `border-bottom: 1px solid var(--color-border)`, traffic-light dots (red/yellow/green), session label in muted text
- Body: monospace font, `font-size: 1.3rem`, line-height 1.9
- Content: `cat profile.json` command in muted, JSON output with key names in `#79c0ff` (blue), values in `var(--color-accent)` — showing:
  - `"platforms"`: `"Android · Flutter · iOS · KMP"`
  - `"users_reached"`: `"20M+"`
  - `"crash_free"`: `"99.9%"`
  - `"revenue_growth"`: `"+30%"`
  - `"apps_built"`: `"15+"`
  - `"experience"`: `"6 years"`
- Blinking cursor via CSS `@keyframes blink`

**Hero image:** Removed from hero — the terminal window replaces the right column. No profile photo in the hero.

---

## 5. Impact Metrics Section

Kept as its own section, redesigned as a horizontal stats strip:

- `background: var(--color-surface)`, `border-top: 1px solid var(--color-border)`, `border-bottom: 1px solid var(--color-border)`
- Padding: 24px 48px
- Four stats in a flex row, evenly spaced, with `1px solid var(--color-border)` vertical dividers between them
- Number: `color: var(--color-accent)`, 2.4rem, bold
- Label: `color: var(--color-text-muted)`, 1.1rem, uppercase, letter-spacing 1px

---

## 6. Skills Section

**Layout:** 3-column CSS grid, `gap: 1.2rem`

**Skill category card:**
- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 10px`, `padding: 1.6rem`
- Category heading: `color: var(--color-accent)`, 1.2rem, uppercase, letter-spacing 1px
- Description: `color: var(--color-text-muted)`, 1.1rem
- Skill tags: `background: var(--color-bg)`, `border-radius: 12px`, `font-size: 1.0rem`, `padding: 2px 8px`
  - Primary/first tag: `border: 1px solid var(--color-accent)`, `color: var(--color-accent)`
  - Remaining tags: `border: 1px solid var(--color-border)`, `color: var(--color-text-muted)`
- Hover: `border-color: var(--color-accent)` transition 0.2s

**Updated skill categories from LinkedIn profile:**

| Category | Tags |
|----------|------|
| Languages | Kotlin (expert), Java, Swift, Dart, C++ |
| Android | Jetpack Compose, Room, WorkManager, ViewModel, Coroutines |
| Cross-Platform | Flutter, KMP (Kotlin Multiplatform), React Native (troubleshooting) |
| iOS | Swift, UIKit, SwiftUI basics, App Store publishing |
| Architecture & DI | Clean Architecture, MVVM, MVI, SOLID, Hilt, Dagger 2, Koin |
| Data Layer | Room, SQLite, DataStore, Firebase RTDB, Firestore |
| Networking | Retrofit2, OkHttp, WebSockets, REST APIs |
| Monetization | AdMob, Facebook Audience Network, A/B Testing, eCPM Optimization, IAP |
| Cloud & Analytics | Firebase, GCP, Google Play Console, App Store Connect |
| Testing | JUnit, Espresso, UI Automator, LeakCanary |
| Deployment & Quality | Play Store, App Store, GitHub/GitLab, Gradle, ProGuard/R8, Lint/Detekt |
| System Design & Leadership | System Design, Tech Leadership, Agile/Scrum, Mentoring, Code Review |

---

## 7. Portfolio Section

**Layout:** 3-column CSS grid, `gap: 1.4rem`

**Project card:**
- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 10px`, `overflow: hidden`
- Image area: real project images restored; fallback is a dark gradient placeholder
- Project type badge: `border: 1px solid var(--color-accent)`, `color: var(--color-accent)`, small pill, top of card body
- Title: `color: var(--color-text)`, font-weight 600
- Description: `color: var(--color-text-muted)`, 1.1rem
- Bottom accent: `border-bottom: 2px solid var(--color-accent)` revealed on hover via `transform` or `max-height` transition
- Hover: `border-color: var(--color-accent)` on card

**Custom Ads SDK card (flagship):**
- `background: linear-gradient(135deg, #0d2818, var(--color-surface))`
- `border: 1px solid var(--color-accent)` always visible (not just on hover)
- Badge: filled green (`background: var(--color-accent)`, `color: #000`)

---

## 8. Experience / Timeline Section

**Layout:** Single column, `padding-left: 2.8rem`, `border-left: 2px solid var(--color-accent)`

**Timeline dot:**
- Current role: filled `background: var(--color-accent)`, 14px diameter, `border: 3px solid var(--color-bg)`, `box-shadow: 0 0 0 2px var(--color-accent)` (ring glow)
- Previous roles: hollow — `background: var(--color-bg)`, `border: 2px solid var(--color-accent)` (2nd role) or `var(--color-border)` (3rd role)

**Experience card:**
- Current role: `border: 1px solid var(--color-accent)`, `background: linear-gradient(135deg, #0d2818, var(--color-surface))`, "CURRENT" badge top-right (`background: var(--color-accent)`, `color: #000`, small monospace text)
- Previous roles: `border: 1px solid var(--color-border)`, `background: var(--color-surface)`, oldest role at 80% opacity
- Role title: `color: var(--color-text)`, 1.4rem, font-weight 600
- Company + date: `color: var(--color-accent)` for company name, `color: var(--color-text-muted)` for date
- Bullet points: `▸` character in `var(--color-accent)`, text in `var(--color-text-muted)`, 1.1rem

**Multi-role companies:** OZI Publishing and Facile Solutions each held two consecutive roles. These are grouped under a single company header with sub-role entries indented slightly — no separate dot per sub-role, one dot per company.

**Accurate timeline entries (from LinkedIn, newest first):**

1. **Beyond Apps Group** — Senior Android Developer · Jan 2026–Present · Lahore *(CURRENT)*
   - Multi-module Android video editor (MyZesty) using MVVM/MVI + Kotlin/Java
   - Leading end-to-end development of Genie, an AI-powered video maker
   - Integrating ML features, collaborating with backend teams, conducting code reviews

2. **OZI Publishing** — 1 yr 8 months total · Lahore
   - Principal Software Engineer · Jun 2025–Jan 2026
   - Senior Android Developer · Jun 2024–May 2025
   - 20M+ downloads portfolio; ads SDK with SOLID architecture; mentored Android engineers; 99%+ crash-free rate; monetization strategy (AdMob, FAN)

3. **Jeux Developers** — Senior Android Developer · Jun 2022–May 2024 (2 years) · Sahiwal
   - Led Android development lifecycle; Kotlin + Java; performance optimization; mentored junior devs; delivered booking & payment flow apps

4. **Facile Solutions** — 2 years total · Sahiwal
   - Android Developer · Jul 2021–Jun 2022
   - Junior Android Developer · Jul 2020–Jun 2021
   - End-to-end app development; Java & Kotlin; collaborated with UI/UX designers; code reviews

---

## 9. Education Section

**Layout:** 3-column CSS grid (reuses `.feats.cards` structure)

**Education card:**
- Same dark card treatment as Skills
- Degree card: `border: 1px solid var(--color-accent)` (distinguished from course cards)
- Icon: Font Awesome icon in `color: var(--color-accent)`, 2.2rem
- Title: `color: var(--color-text)`, 1.3rem
- Institution: `color: var(--color-accent)`, 1.1rem
- Description: `color: var(--color-text-muted)`, 1.0rem

---

## 10. Features / What I Do Section

**Layout:** 3-column CSS grid

**Feature box:**
- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 10px`, `padding: 2rem`
- Green left accent bar: `::before` pseudo-element, `width: 3px`, `height: 100%`, `background: var(--color-accent)`, positioned `left: 0`
- Icon: `color: var(--color-accent)`, 2.0rem, `margin-left: 8px`
- Title: `color: var(--color-text)`, 1.2rem, `margin-left: 8px`
- Description: `color: var(--color-text-muted)`, 1.0rem, `margin-left: 8px`
- "Learn more →" link: `color: var(--color-accent)`, 1.0rem, font-weight 600, `margin-left: 8px`
- Hover: `border-color: var(--color-accent)` transition

---

## 11. Blog & Articles Section

**Layout:** 3-column CSS grid

**Blog card:**
- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 10px`, `padding: 2rem`, flex column
- Platform icon box: 40×40px, `background: var(--color-bg)`, `border-radius: 8px`
  - Medium: `border: 1px solid var(--color-accent)`, icon `color: var(--color-accent)`
  - StackOverflow: `border: 1px solid #f48024`, icon `color: #f48024`
  - GitHub: `border: 1px solid var(--color-border)`, icon `color: var(--color-text)`
- Title: `color: var(--color-text)`, 1.3rem
- Description: `color: var(--color-text-muted)`, 1.0rem, `flex: 1`
- CTA link: `color: var(--color-accent)`, font-weight 600

---

## 12. Footer

- `background: var(--color-bg)`, `border-top: 1px solid var(--color-border)`, `padding: 3.2rem`
- Quote: `color: var(--color-accent)`, italic, 1.3rem, centered
- Attribution: `color: var(--color-text-muted)`, 1.0rem
- Social links row: muted text links, centered, `gap: 1.6rem`

---

## 13. Scroll-to-Top Button

- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 50%`
- Arrow icon: `color: var(--color-accent)`
- Hover: `border-color: var(--color-accent)`, `background: var(--color-accent-dim)`

---

## 14. Animations

Existing `animations.js` and `css/animations.css` retained. Only color values within animation keyframes updated to match new token system. No structural animation changes.

---

## 15. CSS File Strategy

All changes confined to existing CSS files — no new files created:

| File | Changes |
|------|---------|
| `css/global.css` | Full token rewrite; shared components (headings, buttons, cards, social links) |
| `css/styles.css` | Header, sidebar, hero layout |
| `css/impact-metrics.css` | Stats strip redesign |
| `css/principal-enhancements.css` | Skills grid, project cards, timeline, blog cards, feature boxes |
| `css/queries.css` | Update any hardcoded colors in responsive breakpoints |
| `css/animations.css` | Update animation color values only |
| `css/testimonials.css` | Dark card treatment (future use) |
| `css/services-contact.css` | Dark treatment |

`index.html` changes: hero section restructured (add terminal window div, remove standalone image), Impact Metrics strip markup adjusted, no other structural HTML changes.
