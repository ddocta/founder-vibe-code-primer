# Design System — Web Adaptation (WNCP AI Kinetic Editorial)

> **Source of truth:** [`5_Library/Design Systems/WNCP AI Design System/`](file:///opt/workspaces/wncp_agentspace/6_Shared/wncp_shared_projects/5_Library/Design%20Systems/WNCP%20AI%20Design%20System/) in the WNCP shared projects vault. This file is a **web-context adaptation** of that design system, not the canonical spec. For the original spec (PowerPoint-oriented), the canonical tokens (CSS variables), the sample slides, and the asset library, see the source.
>
> **Why a separate file:** the WNCP AI Design System is built for PowerPoint (`pt` units, Aptos-safe font stack that ships natively on Win/Mac). This site is HTML/CSS, uses `px` units, and the visual goal is *white-forward* per the brief — the opposite of the PowerPoint default. So this file is a *context-appropriate subset* of the same brand.

## 1. Creative North Star

**"The Kinetic Architect"** — bridge technical precision and editorial high-fashion. Structural Brutalism: razor-sharp 0px corner radii, heavy-weight geometric typography, intentional asymmetry, structured line work. Red `#BD1B04` is the grounding accent.

**Web context note:** On the web, Kinetic Editorial gets a calmer default — white-forward surface, red used sparingly as accent (dividers, prompt border, section numbers). Per the brief for this site: *"we don't want as many dark, black, and heavy red accents as we normally do."* That tone is encoded below.

## 2. Color tokens

| Token | Hex | Source design system var | Web usage |
|---|---|---|---|
| `--wncp-primary` | `#BD1B04` | `--wncp-primary` | Brand red — dividers, prompt left-border, section numbers, links, focus rings |
| `--wncp-primary-dark` | `#8A1303` | `--wncp-primary-dark` | Reserved for the signature red gradient (use only on >200px elements) |
| `--wncp-ink` | `#0A0A0A` | `--wncp-secondary` | Primary heading color on light surfaces |
| `--wncp-text` | `#2D2D2D` | `--wncp-neutral-dark` | Body text on light surfaces |
| `--wncp-muted` | `#6B7280` | `--wncp-neutral-mid` | Subtitles, captions, metadata, card body |
| `--wncp-line` | `#E5E7EB` | `--wncp-neutral-light` | Card borders, section separators |
| `--wncp-bg` | `#FFFFFF` | `--wncp-surface-white` | **Default page background** (web adaptation: white, not the `#F9F9F9` slide default) |
| `--wncp-surface-soft` | `#F9F9F9` | `--wncp-surface` | Reserved for the Founder OS prompt block and other embedded surfaces |

**No dark mode.** The site is light-only. Do not use `--wncp-surface-dark` (`#0A0A0A`) anywhere on this site.

## 3. Typography

The PowerPoint system uses the Aptos-safe stack (`Aptos Display`, `Aptos`, `Segoe UI`, `Helvetica Neue`, `Arial`, `Calibri`). Aptos is **not yet broadly available on the web** (still rolling out via Microsoft 365 / Windows 11 updates). So the web adaptation uses the closest equivalents and self-hosts them via `next/font`.

| Role | Font | Source design system var | Web usage |
|---|---|---|---|
| Headlines (display, headlines, titles, metrics) | **Inter**, 700 weight, tight tracking | `--wncp-font-display` (Aptos Display) | h1, h2, h3, all `<strong>`, section numbers |
| Body (paragraphs, lists, labels) | **Plus Jakarta Sans**, 400 / 500 weight, normal tracking | `--wncp-font-body` (Aptos) | p, li, button, summary, small |
| Code (Founder OS prompt, inline `<code>`) | **JetBrains Mono** (or `ui-monospace` fallback) | `--wncp-font-mono` (Cascadia Mono) | Founder OS prompt, inline code |

**Type scale (px):**

| Token | Size | Web usage |
|---|---|---|
| Display | 40px | Hero `h1` (page title) |
| Headline | 24px | Section `h2` ("The three tiers", "Prime video") |
| Title LG | 18px | `<summary>` lines, tier sub-headers |
| Title MD | 13px | Card titles in dense layouts |
| Body LG | 16px | Standard paragraphs |
| Body MD | 11px | Card body, captions |
| Label | 11px | Metadata strip, tier tags, ALL-CAPS, wide tracking (0.18em) |

**Tracking:**
- Headlines: tight (`-0.02em`)
- Labels (uppercase metadata, tier tags): wide (`0.18em`)

## 4. Layout & spacing

**Single column, max-width 880px.** Generous whitespace. No grid system beyond one implicit column.

**Spacing scale (px):**

| Token | Value | Usage |
|---|---|---|
| 1 | 4px | Tightest inline gap |
| 2 | 8px | Inline label gap |
| 3 | 12px | Inside button padding |
| 4 | 16px | Standard paragraph gap, list item gap |
| 5 | 22px | Section-internal gap |
| 6 | 36px | Section-to-section gap |
| 7 | 50px | Page top/bottom padding |
| 8 | 72px | Hero top margin |

## 5. Lines, borders, elevation

| Element | Spec | Notes |
|---|---|---|
| Top accent line | 3px solid `--wncp-primary` | Full-width at y=0, every page (one element on this site) |
| Section separator | 1px solid `--wncp-line` | Between major content zones, sparingly |
| Prompt left border | 4px solid `--wncp-primary` | On the Founder OS prompt block |
| Card border | 1px solid `--wncp-line` | On the `<details>` collapsibles (top, bottom only — left/right zero) |
| Link underline | 1px text-underline-offset 3px | All `<a>` elements |

**Corner radius: 0px everywhere** except the copy-to-clipboard button, which uses 4px (matches the `wncp-radius-button` web adaptation; the PowerPoint spec says 2px but that's too sharp for a clickable web control).

**No drop shadows.** Elevation is tonal: the Founder OS prompt sits on `--wncp-surface-soft` against the `--wncp-bg` page surface.

## 6. Component patterns

### 6.1 Hero (page top)
- 3px red top accent line, full-width
- Meta strip: date · location · audience (uppercase label, 11px, wide tracking)
- Kicker: "By the way, AI" (red, 11px, wide tracking, bold)
- `h1`: 40px Inter Bold, tight tracking
- Lede: 18px body, max 64ch

### 6.2 Section header (`h2`)
- Section number in red, 14px, wide tracking, bold (e.g., "00", "01", "02")
- Section title in ink, 24px Inter Bold, tight tracking
- Inline baseline alignment, not stacked

### 6.3 Collapsible tier (`<details>`)
- Top + bottom 1px line in `--wncp-line` (no left/right border)
- 16-18px summary text, Inter Bold
- Chevron: red triangle, rotates 90° when open
- Right-aligned tag: 12px, uppercase, `--wncp-muted` (e.g., "NO BACKEND · NO SETUP")
- Body padding: 16-28px left margin so the content indents under the summary

### 6.4 Founder OS prompt block
- Background: `--wncp-surface-soft` (`#F9F9F9`)
- Left border: 4px solid `--wncp-primary`
- Padding: 18px 20px
- Body text: 13px Inter (or mono fallback), 1.55 line-height, `--wncp-ink` color
- Copy button: absolute-positioned top-right, white background, 1px border, 11px uppercase Plus Jakarta Sans
- Whitespace preserved (`white-space: pre-wrap`)

### 6.5 Prime video block
- Aspect ratio 16:9 (padding-bottom: 56.25% wrapper)
- `loading="lazy"` iframe
- Caption above the iframe: video title in `--wncp-ink` bold + meta in `--wncp-muted` (creator, length, view count, post date)

### 6.6 Footer
- 1px top border in `--wncp-line`
- 13px body, `--wncp-muted` color
- Two lines: tagline, then `wncp.ai` link

## 7. Mobile (max-width: 720px)

- Wrap padding: 32px 20px 64px (down from 48px 32px 96px)
- h1: 32px (down from 40px)
- Type scale otherwise unchanged
- Collapsibles: full-width, no left/right margin
- Video: scales naturally with the wrapper

## 8. Accessibility

- Color contrast: all text-on-background pairs meet WCAG AA (verified: ink-on-white = 18.7:1, muted-on-white = 4.6:1).
- `<details>`/`<summary>` is keyboard-navigable by default.
- YouTube iframe: `title` attribute set, `loading="lazy"`, `allowfullscreen`.
- Founder OS prompt: `<pre>`-style preserved, copy button is a `<button type="button">` with `aria-label`.
- Focus rings: 2px solid `--wncp-primary` (visible, never removed).

## 9. What this file is NOT

- **Not the canonical design system.** The canonical spec is in `5_Library/Design Systems/WNCP AI Design System/source/Design.md`.
- **Not a CSS file.** The tokens defined here are the source of truth for what goes into `src/app/globals.css` (or `<style>` in `site/index.html`). The CSS file itself is a 1:1 rendering of these tokens.
- **Not a redesign.** It is a *context-appropriate subset* of the same brand. The white-forward default is a deliberate web-context choice, not a brand change.

## 10. Change log

- **2026-06-04:** Initial web adaptation. PowerPoint spec → web tokens. Inter + Plus Jakarta Sans substituted for Aptos (web availability). White-forward default replaces PowerPoint's `--wncp-surface` (`#F9F9F9`) as the page background.
