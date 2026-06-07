# 01-page-copy.md — Source-of-truth page copy (v2.2)

## Meta strip
2026-05-04 · Cuba De Ayer · Burtonsville, MD · For Dr. Monet Stanford, PharmD

## Title
Founder AI Prototyping — A Three-Level Path

## Follow-up line (between title and lede)
*Follow-up from our 2026-05-04 conversation — a quick overview of vibe coding a prototype, based on what we discussed.*

## Lede (framing paragraph)
Two questions first: do people want this enough to use it, and can a business support it? Here's the way to find out — by building, putting it in front of people, and watching what happens.

## Level 1 — A landing page people can click

**What you build:** A single-page prototype, no backend, no login. Clickable in a browser. You can show it to one person this week.

**What you find out:** Whether the problem is big enough that real people care.

**You graduate when:** 5 people have seen it, and at least one has told you "when can I use this?"

### Key tools
- **Google AI Studio App Builder** — Describe your app in a paragraph, get a working page back. Free tier, browser, no setup. Builds full front-ends from prompts.
- **Google Stitch** — Design the visual layer. Stitch 2.0 pulls design systems from URLs, generates clickable prototypes, and exports to AI Studio. Free.

### Primary video
[Google AI Studio — Full Tutorial 2026: How To Build an App](https://www.youtube.com/watch?v=Dem3ZSQ6RVM)
Mikey No Code · 16 min · 100K views · March 2026

### Additional videos (collapsible)
- [Google Stitch Just Became an AI Figma (And It's Free)](https://www.youtube.com/watch?v=J7XpscQqCYw) — Sam Witteveen, 12 min, 64K views
- [Google AI Studio for Beginners (2026)](https://www.youtube.com/watch?v=UpYSNdA8a-M) — Learn With Shopify, 12 min, 234K views

## Level 2 — A working web app with a backend

**What you build:** A real product. Users can sign up, log in, save their data, come back tomorrow. Running on a real domain.

**What you find out:** Whether people will keep using it — and whether a real product can hold their attention.

**You graduate when:** 10 real users, 1 paying customer, or a partner conversation that demands a working product.

### Key tools
- **Supabase** — Backend as a service. PostgreSQL database, authentication (email/password + Google/GitHub login), file storage, real-time subscriptions. Free tier. You point your frontend at Supabase and it handles the backend.
- **Vercel** — Hosting. Connect your GitHub repo, paste your env variables, Vercel auto-deploys on every push. Free tier covers your first project. Handles custom domains and SSL out of the box.

### Primary video
[Supabase Tutorial for Beginners 2026: How to Use Supabase](https://www.youtube.com/watch?v=hVrSGKGU24g)
Mikey Vibe Coding · 32 min · 16K views · 2026

### Additional videos (collapsible)
- [Build and Launch a REAL App with Codex, Supabase and Vercel](https://www.youtube.com/watch?v=Kic6Zplgc4Q) — James NoCode, 39 min, 2026
- [Deploy A Fullstack Next.js App in Minutes](https://www.youtube.com/watch?v=snhbWQ5vnPg) — Code Ryan, 7 min, 2025

## Level 3 — A codebase you can keep building

**What you build:** A real IDE, version control, and an AI agent as a teammate. When the prototype *is* the company.

**What you find out:** Can I ship faster than I break things? Can another engineer look at this and understand it?

**You graduate when:** You hire or partner with an engineer, or you *are* the engineer and the codebase is the foundation.

### Key tools
- **Claude Code** — Agentic coding tool. Plans, builds, debugs from natural language. Runs locally on your computer. $20/mo Pro tier. Start in Plan Mode, build with Opus, iterate with Sonnet.
- **Cursor** — AI-first code editor. Built on VS Code. Agent mode with Opus model. 134K-view beginner tutorial available. Free tier available.
- **Google Anti-Gravity** — Google's agentic IDE. Free for individual use. Plans projects, creates files, runs terminal commands, tests its own code. Works like a junior developer — shows changes before saving.

### Primary video
[Google Antigravity Tutorial for Beginners: Build Your First App](https://www.youtube.com/watch?v=-0Irz8G0PEE)
Teacher's Tech · 13 min · 127K views · January 2026

### Additional videos (collapsible)
- [Full Claude Code Tutorial for Non-Technical Beginners in 2026](https://www.youtube.com/watch?v=bqJzIWAEn40) — Futurepedia, 2026
- [Cursor AI Tutorial for Beginners: Build App with AI (2026)](https://www.youtube.com/watch?v=oQDCAJnr1aU) — Mikey No Code, 23 min, 134K views
- [Cursor: Coding Agents Tutorial (2026)](https://www.youtube.com/watch?v=kF2WQgk1LtY) — leerob, 30 min, 51K views

## Footer
*This page was built with [Hermes](https://wncp.ai). The MLT20 AI Buildathon is the workshop this is patterned on — [mlt20buildathon.events.wncp.ai](https://mlt20buildathon.events.wncp.ai/).*

---

## Design notes (v2.2)
- **No "Keystone video" label.** The primary video is embedded directly with a simple caption (creator, duration, views, date).
- **"Key tools" section** at each level lists 2-3 tools with one-line descriptions.
- **Centered layout.** Page is center-aligned with a comfortable reading width (~680px). Section numbers and headings use center-aligned text.
- **Level 2** drops Lovable entirely. Supabase + Vercel are the key tools, with commentary about building a backend.
- **All videos** are within the last 3 months (March–June 2026) or are the most-current tutorial available for a tool that hasn't meaningfully changed.
- **Additional videos** per level live in a collapsible `<details>` block below the primary video.
