---
title: Founder Vibe Code Primer — One-Page Meeting Site
date: 2026-05-04
audience: Dr. Monet Stanford, PharmD (SVP Healthcare Policy, Washington Analysis)
location: Ayeer Cuba, Burtonsville, MD
owner: Damien Peters (WNCP AI)
status: v1.1 — corrected meeting date 2026-05-04; deployment target is Vercel (Next.js, static export)
---

# Founder Vibe Code Primer — PRD

A single, focused page built for one person at one meeting. It is both the **message** (here's how to start) and the **proof** (it was built with the same tools, in minutes).

## 1. Overview
A non-technical founder learning to vibe-code. The page explains a three-tier entry into AI-powered software engineering and hands her a working Tier-1 path she can execute on a Chromebook. Built in the WNCP AI Kinetic Editorial system, white-forward, single page, deployable to a one-line URL.

**Why this matters.** Until people can see something and vote with their actual clicks, dollars, and credit cards, everything is theory. The fastest path from theory to signal is a working URL and a real sign-up form. This page models that path end-to-end.

## 2. Goals
1. Give Monet a one-paragraph thesis on why vibe-coding matters for a non-technical founder
2. Walk through three tiers in plain English with a 1–5 step process each
3. Provide a copy-paste prompt that runs a "Founder OS" intake (questions → research → tool recommendation → custom learning plan)
4. Show a working Tier-1 build (this site itself) so the page is its own demo
5. Hand off additional resources (YouTube, docs) for after the meeting

## 3. Non-Goals
- Not a CMS, not auth, not a backend
- Not a long-lived marketing site
- Not a generic AI primer — it's a 1:1 artifact for one meeting
- Not dark/black/heavy-red; it is white-forward with restrained Kinetic Editorial accents

## 4. Audience
- **Primary:** Dr. Monet Stanford, PharmD, SVP Healthcare Policy at Washington Analysis
- **Context:** Non-technical, builds on a Chromebook, comfortable with Claude Code in a terminal + copy-paste into Supabase
- **Reading mode:** Skims, asks "what do I open Monday morning?", needs to see the speed

## 5. The Thesis (top of page)
Until people can see it and vote with their actual clicks and dollars and credit cards, everything you know and understand is just a theory and still needs to be validated. The fastest way to validate an idea is to build a public version of it — the uglier and earlier the better — and put it in front of real users.

There are levels to this. You can move forward yourself in the technical understanding and build more of the prototype until you have enough traction, interest, or pull to partner with, hire, or bring in a more experienced engineer. You can build something that is good enough to get real signal and feedback, and can be used to have real discussions with partners, accelerators, vendors, potential engineers, hires, and investors.

## 6. The Three Tiers (collapsible)

### Tier 1 — Landing Page
Cheap, easy, web-based. No backend, no credits, no setup. Tools: **Google AI Studio** + **Stitch**.

1. Open Google AI Studio (free, browser) and describe the idea in plain English
2. Use Stitch (free, browser) to mock up a few screens — typography, color, layout
3. Stitch hands you a `design.md` you can feed back into AI Studio
4. AI Studio generates a working page you can preview live
5. Share the URL with one person who will give you honest feedback

### Tier 2 — Backend + Deploy
Move off Google AI Studio and Stitch. Add Supabase (DB + auth, free tier) and Vercel (free tier, GitHub deploy). For a no-code-friendly upgrade, **Lovable** builds React/Next.js from prompts, wires up Supabase, deploys to Vercel.

1. Write a one-page PRD (problem, audience, core flow, success metric)
2. Pick a Supabase template or scaffold a table for what you need to save
3. Use Lovable (or Claude Code) to wire the form/UI to Supabase
4. Push to GitHub; Vercel auto-deploys on commit
5. Add a custom domain when you have real users

### Tier 3 — Full AI Software Engineering
A real IDE, version control, agentic tools. Easy options: **Claude Code** (terminal, copy-paste workflow). More dedicated: **Cursor** (polished AI-first editor), **Google Anti-Gravity** (free, in the Google ecosystem).

1. Write a proper PRD — problem, non-goals, user journeys, success metric
2. Cut a feature branch, point the agent at the PRD
3. Let the agent scaffold the project; review the diff
4. Iterate: code → review → test → merge
5. Hire or partner with an experienced engineer when you have traction

## 7. The Copy-Paste Prompt (Founder OS)
A single prompt that asks questions, runs research, recommends a tool, and drafts a custom learning plan. It is referenced back to this page for resources.

> You are Founder OS, a one-time intake for a non-technical founder. Ask me 8 questions in order, one at a time. After I answer, do 5 minutes of focused research on my idea, recommend the lowest-friction Tier-1 tool to start with, and produce a 4-week custom learning plan with weekly milestones. Link back to https://2026-05-04-meetings.wncp.ai/ for the tiered tool list and additional resources.

## 8. Page Structure
1. Hero — date, location, audience line, single-sentence thesis
2. The thesis (2 short paragraphs)
3. The three tiers — collapsible details/summary, each with a 5-step process
4. The Founder OS prompt — copy-paste box
5. Prime YouTube video — embed one anchor video (placeholder until chosen)
6. Additional resources — collapsible section with other YouTube videos, docs, and links
7. Footer — "By the way, AI" tagline + WNCP AI / Begin supporting founders

## 9. Visual Direction
- **Surface:** white (#FFFFFF) primary, #F9F9F9 sections
- **Accent:** brand red `#BD1B04` only on dividers, CTA, the prompt box border, and section numbers — *no heavy red blocks, no dark backgrounds*
- **Type:** Inter for headlines, Plus Jakarta Sans for body, tight tracking on headings
- **Layout:** Sharp 0px radii, 1pt `#E5E7EB` separators, generous whitespace, single column
- **Density:** Lean — one long page, no nav, no animation

## 10. URL
`https://2026-05-04-meetings.wncp.ai/` — date-first, year-first, with dashes.

## 11. Deployment (Vercel + Next.js, static export)
- **Target:** Vercel. Build with Next.js, exported as a fully static site.
- **Why static:** No server runtime needed for this site. The page is a one-shot marketing/primer artifact, not an app. Static export gives fast page loads, no cold starts, and minimal attack surface.
- **Output mode:** `next build` with `output: 'export'` in `next.config.js` → produces an `out/` directory of static HTML/CSS/JS.
- **Hosting:** Push the `out/` directory to Vercel (either via `vercel deploy --prebuilt` or by deploying the Next.js project and letting Vercel run the static build).
- **Domain:** `2026-05-04-meetings.wncp.ai` — DNS via Cloudflare to Vercel per the `wncp-vercel-deploy-cloudflare` skill.
- **Auth:** None. This is a public artifact.
- **Repo:** Initialize a git repo in this project; create the `dev` branch; first deploy to a preview URL; Damien reviews preview; only then promote to production.

## 12. Build Plan
1. `npx create-next-app@latest 2026-05-04-founder-vibe-code-primer --ts --no-tailwind --app --src-dir --import-alias '@/*'`
2. Copy the Kinetic Editorial design tokens from `/resources/DESIGN.md` into `src/app/globals.css` (root color variables, Inter + Plus Jakarta Sans via `next/font`).
3. Port the three tier sections, the Founder OS prompt, the prime video, and the additional resources section from `planning/01-page-copy.md` into a single `app/page.tsx` using React Server Components (no `'use client'` needed except for the copy-to-clipboard button).
4. Convert the static HTML's `<details>`/`<summary>` to a small client component (`app/components/Collapsible.tsx`) with the same behavior; keep markup accessible.
5. Embed the prime YouTube video via `next-embed` or raw `<iframe>` with `loading="lazy"`.
6. Add `output: 'export'` to `next.config.js` AND `images: { unoptimized: true }` (the latter is required for `next/image` to work with static export). Add a `vercel.json` (or rely on Vercel's auto-detection) and an SPA-style fallback route.
7. First deploy to a preview URL via `vercel --prod=false` (or `git push origin dev` if GH is wired). Damien reviews preview. On approval, promote to production.
8. DNS the `2026-05-04-meetings.wncp.ai` subdomain to Vercel via Cloudflare.

## 13. Open Questions
- Should the Founder OS prompt link to a Notion form for the intake, or just stay as copy-paste?
- Any additional resources to include in the bottom collapsible?

## 14. Resolved decisions
- **Anchor video:** Riley Brown's *Vibe Coding for Beginners (Full Course 2026)* (BpOsHF5Oj_I) — 247K-subscriber Black creator, 51K views, posted May 2026, 55:25 beginner course. Verified 2026-06-04.
- **Tier 2 quick-start video:** Christian Peverelli (WeAreNoCode) — *How to Build an App From SCRATCH with Lovable + Supabase* — 373K views, recorded 2025-05-01 (a year old, but still the highest-quality end-to-end Tier-2 walkthrough; tool behavior unchanged as of May 2026). Replaces the earlier V0+Supabase video (1,439 views, well under the 30K threshold).
