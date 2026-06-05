# Tech Stack — Founder Vibe Code Primer

A single-page, fully static, content-only site. No server, no database, no auth, no user accounts. Built in 2026-05 for a one-shot lunch-meeting artifact.

## Stack at a glance

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Static export, React Server Components, `next/font` for self-hosted typography. |
| Output mode | **`output: 'export'`** | Produces a `out/` directory of pure HTML/CSS/JS. No Node runtime needed at serve time. |
| Hosting | **Vercel** | Native Next.js support. Static export auto-detected. Preview deploys per branch. |
| DNS | **Cloudflare** | `wncp.ai` zone already managed here. Wildcard `*.wncp.ai` pattern for meeting-specific subdomains. |
| TypeScript | **Yes** | Catches type errors during the port from `index.html` to `app/page.tsx`. |
| Styling | **CSS (handwritten) + design-system CSS variables** | No Tailwind, no CSS-in-JS. The site is a single page; a styling framework is overhead. All color, type, spacing, line, radius values come from `resources/DESIGN.md` (the WNCP AI Design System, web-adapted). |
| Fonts | **Self-hosted via `next/font`** | No Google Fonts CDN hit. The fonts loaded are Inter + Plus Jakarta Sans (web adaptation of the WNCP Aptos-safe stack). |
| JS framework bits | **React 19 (RSC by default)** | Only the copy-to-clipboard button is a client component. Everything else is a server component. |
| Deployment trigger | **git push to `dev` branch** | Vercel auto-creates a preview URL. Promote to prod on approval. |
| Repo | **git on local, `dev` branch** | Per the WNCP `team-git-workflow` skill: develop on `dev`, merge into `dev` for staging, promote `dev` to `main` for production. |

## Repository layout

```
2026.05.04-founder-vibe-code-primer/
├── README.md                       # project map
├── planning/
│   ├── PRD.md                      # meeting-specific PRD, goals, build plan
│   ├── 01-page-copy.md             # page copy in deploy-ready form
│   ├── 02-design-decision.md       # why we picked the "Three Tiers, Stacked" framing
│   ├── 03-round2-followup.md       # spec-first + live Tier-1 build + design.md handoff
│   └── TECH_STACK.md               # this file
├── resources/
│   ├── DESIGN.md                   # web-adapted WNCP AI Design System tokens
│   └── PRD-buildathon-reference.md # MLT20 Buildathon PRD, imported for pattern reference
├── site/
│   └── index.html                  # reference HTML build (visual review)
└── (after port:)
    ├── src/app/
    │   ├── page.tsx                # production page (port of site/index.html)
    │   ├── layout.tsx              # root layout, font registration
    │   └── globals.css             # imports design tokens from resources/DESIGN.md
    ├── src/components/
    │   ├── Collapsible.tsx         # accessible <details>/<summary> wrapper
    │   └── CopyPrompt.tsx          # Founder OS prompt + copy-to-clipboard button
    ├── next.config.js              # output: 'export', images: { unoptimized: true }
    ├── package.json
    └── tsconfig.json
```

## Runtime dependencies

- **Next.js** `^15.x`
- **React** `^19.x` (peer of Next.js 15)
- **TypeScript** `^5.x`
- No CSS framework, no state library, no router (single page), no analytics, no fonts CDN.

## Build & run

```bash
# local dev
npm install
npm run dev              # http://localhost:3000

# production build (static)
npm run build            # produces ./out/

# local preview of the production build
npx serve ./out          # http://localhost:3000
```

## Deploy

```bash
git push origin dev      # Vercel creates a preview URL automatically
vercel --prod            # promote preview to production
```

DNS: `2026-05-04-meetings.wncp.ai` → Vercel per the `wncp-vercel-deploy-cloudflare` skill.

## What this stack is NOT

- **Not a CMS.** Content lives in `app/page.tsx` and `planning/01-page-copy.md`. Editing is a code change.
- **Not a backend.** No API routes, no serverless functions, no database. The Founder OS prompt is a copy-paste artifact, not an integrated form.
- **Not authenticated.** The site is fully public. There is no admin, no user, no rate limiting beyond Vercel's defaults.
- **Not analytics-instrumented.** No GA, no Plausible, no PostHog. Add only if the user requests.
- **Not a long-lived site.** It is a 1:1 artifact for one meeting on 2026-05-04. After the meeting it can stay up as a public reference, but no commitment to maintain.

## Why these choices

- **Next.js over plain HTML:** Lets us reuse the React component model for the collapsibles and the copy button without writing a build pipeline. Static export means we pay zero ongoing hosting cost.
- **`output: 'export'` over SSR:** No need for server-rendered HTML. The page is content, not an app. SSR would add cold-start latency for no benefit.
- **Self-hosted fonts over Google Fonts CDN:** No third-party request, no GDPR surface, no flash-of-unstyled-text on slow connections.
- **Handwritten CSS over Tailwind:** One page, eight components, four visual primitives. Tailwind would be more config than the CSS itself. Plus, every value already comes from design tokens, so a styling framework is redundant.
- **No deploy automation beyond git push:** This site will be deployed a small number of times. A full CI/CD pipeline is overkill.

## What changes if this becomes a template

If a future meeting needs the same pattern (one-shot primer site, date-keyed URL, single page), the Vercel + Next.js + Cloudflare pieces stay. The content (PRD, page copy, design tokens) gets re-authored per meeting. The `site/index.html` reference build approach is reusable as a visual-review checkpoint.
