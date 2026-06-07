---
title: Founder AI Prototyping Primer — One-Page Meeting Site
date: 2026-05-04
audience: Dr. Monet Stanford, PharmD (SVP Healthcare Policy, Washington Analysis)
location: Cuba De Ayer, Burtonsville, MD
owner: Damien Peters (WNCP AI)
status: v2.0 — Pitch 3 framing (single paragraph + three-level progression); single-page deliverable
---

## 1. Overview

A one-page primer Dr. Monet Stanford, PharmD, can read in 5 minutes at the 2026-05-04 lunch meeting. The page is **content + resource sharing** — not a sales pitch for WNCP AI, not a curriculum, not a tool directory. It exists to give Monet a clear mental model for how a non-technical founder can answer the two questions that determine whether a company works, plus the three-level tool progression that lets her run those answers against real users.

The site itself is the demonstration of value — it is built with the same tools and the same Hermes agent it points to, so the artifact is the message.

## 2. Goals & Non-Goals

**Goals**
1. Give Monet a clean, 5-minute-readable explanation of how AI prototyping helps a non-technical founder answer "do people want this?" and "can a business support it?"
2. Walk through the three-level progression of AI prototyping tools (landing page → web app with backend → real codebase in an IDE), in the order a founder would actually move through them.
3. Surface one keystone video per level as the anchor resource, with secondary tool links and quick-start videos in collapsibles underneath.
4. Leave the meeting with a useful artifact in Monet's hands — a page she can come back to, not a deck she forgets.

**Non-Goals**
- Not a sales pitch for WNCP AI. No CTA to "book a call" or "talk to us." The brand mention in the footer is a single line, period.
- Not a curriculum with quizzes, modules, or completion tracking. It is one page.
- Not a live demo. The page is what she takes away; the meeting itself is the demo.
- Not a generic AI tool directory. The three levels are selected for a specific founder journey, not because they are the only tools that exist.

## 3. The two founder questions (the framing)

These are the two questions that determine whether a company works, and they are the reason this page exists. They appear once, in the framing paragraph at the top of the page. They are not section headers, not a curriculum, not repeated under each level.

1. **Do people want this enough to use it?** A problem big enough that real humans will go to the trouble of adopting a new product to solve it.
2. **Can a business support it?** A revenue model, a defensible position, a cost structure that makes the answer to question 1 economically sustainable.

The three levels of tools below are how a non-technical founder finds out — by building something real, putting it in front of people, and watching what they do. Each level is one step further along the same path, designed to surface one of the two questions faster.

## 4. The three levels (the content)

The three levels are a **progression path**, not a choose-your-own. Each level has:
- A one-line description of what you build at this level.
- A one-line description of what you are trying to find out by building it (which of the two founder questions this level surfaces).
- A one-line graduation trigger: the signal that means you are ready to move to the next level.
- A keystone video — the single most useful video for someone starting at this level.
- A collapsible with secondary tool links and quick-start videos for people who want to go deeper.

### Level 1 — A landing page in your browser

- **What you build:** a single clickable page, no backend, no database, no login. Free, browser-based, no setup.
- **What you find out:** whether the problem is big enough that one specific person will engage with your version of the solution.
- **You graduate when:** you have shown the page to 5 different people, heard the same 2-3 things repeated back, and at least one of them has asked "when can I sign up?"
- **Keystone video:** *Learn to Vibe Code in 10 Minutes* (10 min) — sets the vocabulary for everything below.
- **Tool stack (in collapsible):** Google AI Studio, Google Stitch, plus quick-start videos for each.

### Level 2 — A web app with a backend

- **What you build:** a working product with real logins, saved data, a real domain. Free for the first project.
- **What you find out:** whether real people will keep using the product once the prop is gone — the difference between a "wow cool" and an "I open this every week."
- **You graduate when:** you have 10 real users, you have a paying customer OR a partner conversation that requires real features, and you have felt the pain of "I broke production and I don't know how I did it."
- **Keystone video:** *How to Build an App From SCRATCH with Lovable + Supabase* (Christian Peverelli, 30 min) — the cleanest end-to-end walkthrough.
- **Tool stack (in collapsible):** Lovable (frontend), Supabase (auth + database), Vercel (hosting), plus quick-start videos.

### Level 3 — A codebase you can keep building

- **What you build:** a real codebase in a real IDE, with version control, proper PRDs, and an AI agent as a teammate instead of a vending machine.
- **What you find out:** whether the prototype is the company — whether you can keep shipping without breaking, and whether you can hand the codebase to the next engineer you hire.
- **You graduate when:** you hire or partner with an engineer, and you can talk to them about the system they own.
- **Keystone video:** *How to Set Up Claude Code in 2026* — beginner setup of the terminal + IDE flow.
- **Tool stack (in collapsible):** Claude Code, Cursor, Google Anti-Gravity, plus tool comparison video and the Riley Brown full course.

## 5. Page structure (top to bottom)

1. **Meta strip** — date, location, audience (one line, 11px caps, the only place the meeting is named).
2. **Title + lede** — "Founder AI Prototyping — A Three-Level Path" + an italic follow-up line ("Follow-up from our 2026-05-04 conversation — a quick overview of vibe coding a prototype") + the framing paragraph with the two founder questions.
3. **Level 1** — keystone video + collapsible.
4. **Level 2** — keystone video + collapsible.
5. **Level 3** — keystone video + collapsible.
6. **Footer** — one line: this page was built with [Hermes], patterned on the [MLT20 AI Buildathon]. Two links, no CTA.

## 6. Why this framing (the leadership-not-selling line)

The site demonstrates thought leadership by being useful, not by promoting WNCP AI. The brand appears once, in the footer, as a line item — not as the center of gravity. The page is the artifact, not the pitch. This is the difference between "positioning yourself as the obvious next step" (which erodes trust) and "having a clear, useful point of view" (which earns it). The user feedback that drove this framing was: "there's no sale here, this is really just about clean and easy explanation and sharing of resources."

## 7. Visual direction

White-forward, Kinetic Editorial accents only (red `#BD1B04` on dividers, prompt left-border if needed, section numbers). No dark slides, no heavy red blocks. The videos and tool links are the visual content; the page chrome stays out of their way. Mobile-responsive at 720px.

## 8. Tech stack

- **Framework:** Next.js 15.5 (App Router)
- **Hosting:** Vercel (standard `next build`, not `output: 'export'` — see Tech Stack note below)
- **Domain:** `2026-05-04-meetings.wncp.ai` (Cloudflare DNS CNAME → `cname.vercel-dns.com`, proxied=false)
- **Repo:** `github.com/ddocta/founder-vibe-code-primer` (`dev` branch, auto-deploy on push)
- **Fonts:** Inter (headings) + Plus Jakarta Sans (body), self-hosted via `next/font`
- **CSS:** handwritten in `src/app/globals.css`, no Tailwind. WNCP AI design tokens.

## 9. Tech Stack note — why we removed `output: 'export'`

Initial build used `output: 'export'` for static export. First Vercel deploy failed with `Error: The file "/vercel/path0/out/routes-manifest.json" couldn't be found.` This is a known static-export-vs-Vercel gotcha: Vercel's deployment harness looks for `routes-manifest.json`, a Next.js build artifact that only exists when using Vercel's Next.js runtime, not for static export. Fix: remove `output: 'export'`, let Vercel serve the standard Next.js build as a static site automatically. Verified green, no behavioral change for the user.

## 10. Open questions (none currently)

The two questions (problem / business model) and the three levels are locked. The keystone video per level is locked. The footer is locked. Nothing else to resolve before the 2026-05-04 meeting.

## 11. Related artifacts

- `planning/01-page-copy.md` — the actual page text (source of truth for the Next.js page)
- `planning/02-design-decision.md` — why single-page, why the level structure
- `planning/03-round2-followup.md` — angles to bring into the next meeting
- `resources/DESIGN.md` — design tokens (web adaptation of WNCP AI Kinetic Editorial)
- `resources/PRD-buildathon-reference.md` — imported MLT20 PRD for context
