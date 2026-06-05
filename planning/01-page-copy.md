# Page Copy — Founder Vibe Code Primer
**Date:** 2026-05-04 · **Location:** Cuba De Ayer, Burtonsville, MD · **For:** Dr. Monet Stanford, PharmD
**URL (target):** https://2026-05-04-meetings.wncp.ai/
**Deployment:** Vercel (Next.js, standard build served as static)

---

## Hero

**By the way, AI** — beginning to support founders learning to build with AI.

> **Three jobs. One journey. Pick the role that fits your week, not the role you wish you were ready for.**

A one-page primer for non-technical founders. Not a syllabus. Not a tool review. A *job description for the version of you that exists this week*, with the smallest possible first move attached.

## Section 01 — The 3-minute mental model

Until people can see it and vote with their actual clicks and dollars and credit cards, everything you know and understand is just a theory and still needs to be validated. The fastest way to validate an idea is to build a public version of it — the uglier and earlier the better — and put it in front of real users.

There are **levels to this**. You don't jump from "I have an idea" to "I need to hire an engineer." You move through three jobs, in order, and graduate from each before the next one makes sense. The wrong move at each level is the same: trying to do the next level's job with this level's tools.

**[Watch this first — 10 min, sets the vocabulary for everything below](https://www.youtube.com/watch?v=-LFB8D9WV-g)**
"Learn to Vibe Code in 10 Minutes" — the clearest short explainer of what changed when AI started writing the code.

## Section 02 — The three roles

Each role is a **job you do this week**, with a specific tool, a checklist, and a graduation trigger. Pick the one whose checklist looks like your week. If none of them look like your week, you're not in the right one yet.

### Role 1 — The Pitcher

> **"Can I show this to one person and watch them click?"**

**You are here when:** you have an idea but no page, no screenshot, no link. You're describing it out loud and people are politely nodding.

**The job:** turn your idea into a single clickable page. Not a real product. A *prop* — a fake-but-real-looking thing you can put in front of one specific human and watch them react.

**The tool:** [Google AI Studio](https://aistudio.google.com/) (free, browser) + [Google Stitch](https://stitch.withgoogle.com/) for the visual layer. No install, no account needed, no code.

**This week's checklist:**
1. Open Google AI Studio. Type a paragraph describing the page you wish existed.
2. Generate. Iterate the prompt until the page actually looks like your idea.
3. Take a screenshot. Send it to one person who will not be polite.
4. Ask them: "If this existed, would you click the button? Why or why not?"
5. Write down what they said in one sentence. That's your next prompt.

**You graduate to Role 2 when:** you've shown the page to 5 different people, heard the same 2-3 things repeated back, and at least one of them has asked "when can I sign up?"

### Role 2 — The Builder

> **"Can real people actually use this, save their stuff, and come back?"**

**You are here when:** the prop isn't enough. You have a feedback pattern. People are asking to *do* the thing, not just look at it. You need a login, a database, a real domain.

**The job:** wire a backend to the page you already have. Users can sign up, their stuff is saved, the app survives a page refresh. Still mostly free.

**The tool:** [Lovable](https://lovable.dev/) (no-code frontend) + [Supabase](https://supabase.com/) (auth + database) + [Vercel](https://vercel.com/) (hosting, auto-deploys from GitHub). All free for the first project.

**This week's checklist:**
1. Write a one-page PRD — problem, who it's for, the one core flow, how you measure success.
2. Pick the Supabase template that matches (auth + a table for what you save) — or copy-paste from Claude Code into the Supabase SQL editor.
3. In Lovable, build the form. Wire it to Supabase. Push to GitHub.
4. Vercel auto-deploys the moment you push.
5. Buy a domain ($12/year) and point it at the Vercel project.

**You graduate to Role 3 when:** you have 10 real users, you have a paying customer OR a partner conversation that requires you to ship real features, and you've felt the pain of "I broke production and I don't know how I did it."

### Role 3 — The Engineer

> **"Can I ship faster than I break things, and explain to another engineer what I built?"**

**You are here when:** the prototype is the product, not the pitch. You are not a "non-technical founder who codes" anymore — you are a founder who owns the codebase. The next conversation you need to have is with a senior engineer, and you need to be able to *show* them the system, not just describe it.

**The job:** move out of the browser, into a real IDE, with version control, proper PRDs, and an AI agent as a teammate instead of a vending machine. Write tests. Review diffs. Cut branches.

**The tool:** [Claude Code](https://claude.com/product/claude-code) (terminal, copy-paste) is the easiest entry. [Cursor](https://cursor.com/) is the polished AI-first editor. [Google Anti-Gravity](https://antigravity.google/) is the free option if you're deep in the Google ecosystem. All three do the same job — pick the one you'll actually open every day.

**This week's checklist:**
1. Write a proper PRD — problem, **non-goals**, user journeys, success metric.
2. Cut a feature branch. Point the agent at the PRD as `PRD.md` in the repo root.
3. Let the agent scaffold. **You** read the diff. If you can't explain every changed file, it's not done.
4. Iterate: code → review → test → merge. Never push to main without reading the diff.
5. When you hit traction, hire or partner with an engineer — and now you can *talk to them* about the system they own.

## Section 03 — Founder OS prompt (the 8-question intake)

This is the prompt. Copy it. Paste it into any chat assistant. Answer the 8 questions honestly. It will research your idea, recommend which Role to start in this week, and give you a 4-week plan for that role.

```
You are Founder OS, a one-time intake for a non-technical founder who wants to validate an idea with AI-assisted building. Ask me 8 questions in order, one at a time. Don't summarize early. After I answer all 8, do 5 minutes of focused research on my idea, then:
1. Tell me which of the three roles I'm in (Pitcher / Builder / Engineer) and why.
2. Recommend the single lowest-friction tool to start with this week.
3. Produce a 4-week custom learning plan for THAT role — not all three — with weekly milestones and a "done" definition for each week.
4. Link back to https://2026-05.04-meetings.wncp.ai/ as the canonical primer for context.
```

## Section 04 — If you watch one video per role

Skip the long courses. Watch these three short videos — one per role — in order. Total time: under 90 minutes.

**If you are a Pitcher (start here):**
- **"Learn to Vibe Code in 10 Minutes"** — [youtube.com/watch?v=-LFB8D9WV-g](https://www.youtube.com/watch?v=-LFB8D9WV-g) — the mental model in 10 minutes. Watch this before you touch a tool.
- **"Google AI Studio — Full Tutorial 2026"** — [youtube.com/watch?v=Dem3ZSQ6RVM](https://www.youtube.com/watch?v=Dem3ZSQ6RVM) — the actual Tier-1 tool, end to end.
- **"Google Stitch 2.0: From Sketch to Code"** — [youtube.com/watch?v=QGZ24YhbZT8](https://www.youtube.com/watch?v=QGZ24YhbZT8) — if your generated page looks generic, this is the fix.

**If you are a Builder (graduate from Pitcher first):**
- **"How to Build an App From SCRATCH with Lovable + Supabase"** — [youtube.com/watch?v=zA5kv1P_p7I](https://www.youtube.com/watch?v=zA5kv1P_p7I) — Christian Peverelli (WeAreNoCode), 30:32, 373K views. Year-old but still the cleanest end-to-end walkthrough of the no-code path.
- **"Lovable × Supabase: Everything Starts with Lovable"** — [youtube.com/watch?v=WSsmsyynphM](https://www.youtube.com/watch?v=WSsmsyynphM) — what the integration actually does in production.

**If you are an Engineer (graduate from Builder first):**
- **"Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested Them All)"** — [youtube.com/watch?v=pJylXFAC87A](https://www.youtube.com/watch?v=pJylXFAC87A) — 133K views. Best single comparison if you don't know which IDE to pick.
- **"Riley Brown — Vibe Coding for Beginners (Full Course 2026)"** — [youtube.com/watch?v=BpOsHF5Oj_I](https://www.youtube.com/watch?v=BpOsHF5Oj_I) — 55:25, the deep end-to-end build. Black creator, 247K subscribers, the most-respected primer in the space. Watch this when you're ready to ship your first serious project.
- **"How to Set Up Claude Code in 2026"** — [youtube.com/watch?v=kddjxKEeCuM](https://www.youtube.com/watch?v=kddjxKEeCuM) — 86K views, beginner setup of the terminal/IDE flow.

## Section 05 — Where this comes from

- **[MLT20 AI Buildathon](https://mlt20buildathon.events.wncp.ai/)** — the workshop this primer is patterned on. Three skill tracks aligned to the three roles here: Beginner (Lovable) / Developer (Cursor + Supabase + Vercel) / Expert (Claude Code agents).
- **[WNCP AI Methodology](https://wncp.ai/methodology)** — Scope / Ship / Scale. The framework behind the role progression.

## Footer

By the way, AI. WNCP AI is beginning to support founders learning to build with AI. [wncp.ai](https://wncp.ai)
