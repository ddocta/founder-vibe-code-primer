# 2026.05.04 Founder Vibe Code Primer

A single-page site built for the lunch meeting with **Dr. Monet Stanford, PharmD** on **2026-05-04** at **Cuba De Ayer, Burtonsville, MD**. The page is both the message (a tiered primer for non-technical founders learning to vibe-code) and the proof (it was built with the same tools it recommends).

Target URL: **`https://2026-05-04-meetings.wncp.ai/`**

| Layout
```
/                   → site/index.html  (reference HTML build, visual-review checkpoint)
/planning/
    PRD.md                — meeting-specific PRD (audience, thesis, tiers, Founder OS prompt, Vercel deployment plan, build plan, open questions)
    01-page-copy.md       — page copy in deploy-ready form, with prime video + per-tier YouTube quick starts
    02-design-decision.md — why we picked the "Three Tiers, Stacked" framing
    03-round2-followup.md — spec-first + live Tier-1 build + design.md handoff plan
    TECH_STACK.md         — stack at a glance, repo layout, build & deploy commands
/resources/
    DESIGN.md                       — Kinetic Editorial, web-context adaptation of the canonical WNCP AI Design System (5_Library/Design Systems/WNCP AI Design System/)
    PRD-buildathon-reference.md     — MLT20 Buildathon PRD, imported as a pattern reference
/src/  (production Next.js app, see planning/TECH_STACK.md for layout)
```

## Sources
- Design system: [`resources/DESIGN.md`](resources/DESIGN.md) — WNCP AI Kinetic Editorial, web-adapted. The canonical source is the WNCP shared projects vault at `5_Library/Design Systems/WNCP AI Design System/`.
- Reference PRD: [`resources/PRD-buildathon-reference.md`](resources/PRD-buildathon-reference.md) — MLT20 Buildathon PRD, imported for the same pattern

## Build
- Static HTML/CSS, no framework
- White-forward per brief, with `#BD1B04` red used only for accents (dividers, CTA, prompt box border, section numbers)
- 0px radii, Inter + Plus Jakarta Sans, tight tracking on headings
- `<details>`/`<summary>` for the three tiers and the additional-resources section
- Copy-to-clipboard on the Founder OS prompt (vanilla JS)

## Deploy
- Target platform: **Vercel**, deployed as a **Next.js static export** (`output: 'export'` in `next.config.js`).
- The `site/index.html` is the reference build for visual review; the production build is a port of the same content into `app/page.tsx` (see `planning/PRD.md` §12 for the build steps).
- DNS the URL `2026-05-04-meetings.wncp.ai` to Vercel via Cloudflare.
