# Page Copy — Founder Vibe Code Primer
**Date:** 2026-05-04 · **Location:** Ayeer Cuba, Burtonsville, MD · **For:** Dr. Monet Stanford, PharmD
**URL (target):** https://2026-05-04-meetings.wncp.ai/
**Deployment:** Vercel (Next.js, static export — `output: 'export'` in `next.config.js`)

---

## Hero

**By the way, AI** — beginning to support founders learning to build with AI.

A custom-built, quick and dirty primer for non-technical founders. One page, one meeting, one path: landing page → backend → full build.

## Thesis (two short paragraphs)

Until people can see it and vote with their actual clicks and dollars and credit cards, everything you know and understand is just a theory and still needs to be validated. The fastest way to validate an idea is to build a public version of it — the uglier and earlier the better — and put it in front of real users.

There are levels to this. You can move forward yourself in the technical understanding and building more of the prototype until you have enough traction, interest, or pull to partner with, hire, or bring in a more experienced engineer. You can build something that is good enough to get real signal and feedback on, and can be used to have real discussions with partners, accelerators, vendors, potential engineers, hires, and investors.

## Tier 1 — Landing Page
*Cheap, easy, web-based. No backend, no credits, no setup.*

1. Open **Google AI Studio** (free, browser) and describe your idea in plain English.
2. Use **Stitch** (free, browser) to mock up a few screens — typography, color, layout.
3. Stitch hands you a `design.md` you can feed back into AI Studio.
4. AI Studio generates a working page you can preview live.
5. Share the URL with one person who will give you honest feedback.

## Tier 2 — Add a Backend
*Move off Google AI Studio and Stitch. Supabase + Vercel, still mostly free.*

1. Write a one-page PRD — problem, audience, core flow, success metric.
2. Pick a Supabase template (or scaffold a table for what you need to save).
3. Use **Lovable** to wire the form/UI to Supabase (or copy-paste from Claude Code into the Supabase SQL editor).
4. Push to GitHub; **Vercel** auto-deploys on commit.
5. Add a custom domain when you have real users.

## Tier 3 — Full AI Software Engineering
*A real IDE, version control, agentic tools.*

1. Write a proper PRD — problem, non-goals, user journeys, success metric.
2. Cut a feature branch, point the agent at the PRD.
3. Let the agent scaffold the project; review the diff.
4. Iterate: code → review → test → merge.
5. Hire or partner with an experienced engineer when you have traction.

**Easy options:** Claude Code (terminal, copy-paste). **More dedicated:** Cursor (polished AI-first editor), Google Anti-Gravity (free, in the Google ecosystem).

## The Founder OS Prompt (copy-paste)

```
You are Founder OS, a one-time intake for a non-technical founder. Ask me 8 questions in order, one at a time. After I answer, do 5 minutes of focused research on my idea, recommend the lowest-friction Tier-1 tool to start with, and produce a 4-week custom learning plan with weekly milestones. Link back to https://2026-05-04-meetings.wncp.ai/ for the tiered tool list and additional resources.
```

## Prime Video (anchor)

**[Riley Brown — Vibe Coding for Beginners (Full Course 2026)](https://www.youtube.com/watch?v=BpOsHF5Oj_I)** · 55:25 · 51K views · posted ~4 weeks ago (May 2026)
247K-subscriber creator; this is the "one anchor" long tutorial. Black creator, widely respected in the vibe-coding community, full beginner-to-launch walkthrough covering the same tools this page recommends.

## Additional Resources — Quick Starts by Tier (collapsible)

**Tier 1 — Landing page quick starts**
- [Google AI Studio — Full Tutorial 2026: How To Build an App](https://www.youtube.com/watch?v=Dem3ZSQ6RVM) — a how-to-build walkthrough using the actual Tier-1 entry tool.
- [Google Stitch Just Changed Web Design Forever](https://www.youtube.com/watch?v=3FIRNGJh00w) — what Stitch is good at and how it fits next to AI Studio.
- [Google Stitch 2.0 Tutorial: From Sketch to Code](https://www.youtube.com/watch?v=QGZ24YhbZT8) — Stitch 2.0 walkthrough if you've never used it.

**Tier 2 — Backend quick starts**
- [Lovable × Supabase: Everything Starts with Lovable and Supabase](https://www.youtube.com/watch?v=WSsmsyynphM) — the highest-leverage no-code path to a real backend.
- [Connect Supabase in V0 Vercel — Step-by-step for Beginners](https://www.youtube.com/watch?v=YAAxZWDIekM) — Vercel v0 + Supabase wiring, by Decoding Product with Maria.

**Tier 3 — Real IDE / agentic tool quick starts**
- [Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested Them All)](https://www.youtube.com/watch?v=pJylXFAC87A) — 133K views, Feb 2026. Best single comparison if you don't know which one to pick.
- [Codex is The NEW Best AI Coding Tool (Here's Why)](https://www.youtube.com/watch?v=FU2iB-UfPPA) — Riley Brown, 1:23, 55K views. If you want the OpenAI route.
- [How to Set Up Claude Code in 2026 (Beginner Tutorial)](https://www.youtube.com/watch?v=kddjxKEeCuM) — 86K views, beginner setup of the terminal/IDE flow.
- [Google Antigravity FULL COURSE 2 HOURS](https://www.youtube.com/watch?v=dgwtzpJ3rE4) — long-form deep dive on the free Google option.

**Public build & methodology**
- [MLT20 AI Buildathon](https://mlt20buildathon.events.wncp.ai/) — the workshop this primer is patterned on (skill tracks: Beginner Lovable / Developer Cursor+Supabase+Vercel / Expert agents).
- [WNCP AI Methodology](https://wncp.ai/methodology) — Scope / Ship / Scale.

## Footer
By the way, AI. WNCP AI is beginning to support founders learning to build with AI. https://wncp.ai
