# 🛠️ MLT20 Buildathon — Landing Page & Website PRD

**Source:** https://app.notion.com/p/MLT20-Buildathon-Landing-Page-Website-PRD-352c814a1f2881fc8f35fe0b2c0bfe1c
**Pulled from Notion:** 2026-04-30
**Notion page ID:** `352c814a-1f28-81fc-8f35-fe0b2c0bfe1c`

---

> [!info]
> Status: v2 — restructured for clarity and execution.
> Owners: Damien (PM), Jason (build), Kareem (copy + visuals).
> Companion docs: MLT20 Buildathon — One-Pager Plan · MLT20 Buildathon — Project Plan · MLT20 Buildathon — Partner Deck Outline · MLT20 Buildathon — Marketing Assets List · MLT20 Buildathon — Partner Outreach List.
## 1. Overview
The MLT20 AI Buildathon site is the central marketing and resource hub for a one-week onramp + weekend build sprint culminating in a live finalist showcase at the MLT20 Conference (NYC Hilton Midtown, May 14, 2026). It is co-branded MLT × WNCP AI. DevColor is a potential sponsor/community amplification partner, not a secured partner.
The site is not the community platform (Gather), the submission system (Devpost), or the CMS for ongoing content. It is a high-conversion funnel that captures interest, hands users off cleanly to those systems during build week, and showcases finalists post-event for ongoing WNCP AI lead capture.
Audience reach (from Partner Deck):
## 2. Goals & Non-Goals
Goals
1. Capture qualified sign-ups during the May 1–8 marketing window
1. Convert sign-ups into Devpost registrants by the May 8 (Fri eve) kickoff
1. Serve as the single source of truth for schedule, tools, prompts, and rules during build weekend (May 9–11)
1. Showcase finalists and recap post-event for WNCP AI case study + lead capture
1. Look co-branded, credible, and on par with how MLT presents itself
Non-Goals
- Not a community platform — Gather owns discussion, team-finding, office hours
- Not a submission system — Devpost owns submission, judging UX, viewers' choice voting
- Not an LMS or persistent course platform
- Not a long-lived CMS — content freezes after May 22 recap
## 3. Personas & Top User Journeys
Top journeys
1. Cold visitor → sign-up (Phase 1, target conversion >8% of LP visitors)
1. Sign-up → Devpost registration (target >50%, measured by UTM + Devpost referral)
1. Sign-up → submitter (target >15%, measured by Devpost submission count vs. sign-ups)
1. Visitor → WNCP AI lead post-event (Phase 3, qualitative — sales-qualified leads)
## 4. Information Architecture
/ (home — phase-aware hero)
├── /prompts
│   ├── /prompts/careers
│   ├── /prompts/equity-access
│   └── /prompts/personal-security
├── /timeline
├── /how-it-works
├── /partners
├── /faq
├── /signup            (Phase 1 → form; Phase 2 → redirect to Devpost)
├── /resources         (Phase 2; optional auth)
│   ├── /resources/tools
│   ├── /resources/judging
│   └── /resources/submission
├── /schedule          (Phase 2)
├── /showcase          (Phase 3)
│   └── /showcase/{finalist-slug}
├── /recap             (Phase 3)
├── /lead              (Phase 3 — WNCP AI "run one of these")
└── /thanks            (form confirmation)
Global nav adapts by phase: Phase 1 → Prompts · Timeline · FAQ · Sign Up; Phase 2 → adds Schedule · Resources · Devpost; Phase 3 → Showcase · Recap · Run Your Own.
## 5. Phased Rollout
## 6. Detailed Page Specs
### 6.1 Phase 1 — Marketing Capture (live May 1)
Required sections (single-page, anchor nav):
1. Hero — Tagline "Anyone can AI.", key dates (May 8 kickoff · May 12 deadline · May 14 showcase), primary CTA → sign-up, secondary CTA → see prompts.
1. The three prompts — Careers · Equity & Access · Personal Security. One paragraph each, link to prompt deep-dive (Phase 2 expands these).
1. Timeline — Vertical milestone strip pulled from One-Pager (May 1, May 8, May 9–11, May 12, May 14, May 22).
1. How it works — 5-step participant path (Sign up → Join Gather + Devpost → Kickoff → Build → Submit).
1. Sponsor / partner strip — Logos for MLT and WNCP AI, plus committed sponsors only. Do not include DevColor unless secured through the MLT20 Buildathon — Partner Outreach List.
1. Sign-up form — fields below.
1. FAQ — 8–10 questions covering eligibility, team size, AI-experience requirements, IP ownership, in-person vs. virtual, prizes, judging.
1. Footer — contact, social, MLT/WNCP AI branding, accessibility statement, privacy.
Sign-up form fields
On submit: write to backend (Notion DB or Airtable) → trigger confirmation email with calendar invite for kickoff → tag in MLT email tool → redirect to /thanks.
### 6.2 Phase 2 — Resource Hub (live May 8 kickoff)
Added sections:
- Schedule (/schedule) — Kickoff (Fri May 8 eve), talks (Sat–Sun), office hours, submission deadline (Tue May 12, 1:00 AM), finalist announcement (Tue May 12 eve), live showcase (Thu May 14, 1:00 PM). Add-to-calendar buttons per session.
- Tools & resources (/resources/tools) — Quickstarts for Google AI Studio, Lovable, Cursor, Claude Code, v0. Each: 1-line value prop, 5-step quickstart, link out, "good for which prompt" tag.
- Prompt deep-dives (/prompts/{slug}) — One page per prompt: framing, 3–5 example angles, success criteria from One-Pager ("plausible path to sustainability"), suggested tools, mentor list.
- Submission requirements (/resources/submission) — GitHub repo (public, keys hidden), hosted prototype, ≤2-min demo video, written description, prompt declaration. Mirrors One-Pager.
- Judging rubric (/resources/judging) — Round 1 (async, Tue May 12) + Round 2 (live, May 14). Rubric criteria + scoring sheet preview.
- Prominent Devpost CTA — fixed banner during build week.
- Gather invite — for community + team-finding + office hours.
Hero updates to a build-week mode: countdown to submission deadline, current-day's events, latest announcement.
### 6.3 Phase 3 — Showcase + Recap (live ~May 16)
Added sections:
- Finalist showcase (/showcase) — 3 finalist cards (2 judge-selected + 1 Viewers' Choice). Each finalist gets /showcase/{slug} with team, prompt, demo video, GitHub link, hosted prototype link, judges' notes.
- Winner announcement — Pinned hero callout.
- Recap reel — 60–90s sizzle clip embedded.
- Key stats — Sign-ups, submissions, finalists, partner count, audience reached.
- WNCP AI lead capture (/lead) — "Want to run one of these for your team?" with short form (name, company, role, use case) routing to WNCP AI sales.
- Sponsor thank-you strip — Per Gold/Silver tier, with logos and links.
## 7. Auth & Identity

**Decision (2026-05-02): Descoped to no-auth.** Phase 2 ships with `/resources/*` and `/schedule` fully public — no Circle.so OAuth, no email-gate. Aligns with current implementation (`src/middleware.ts` only gates `/wncp/*` partner/sponsor routes; no `protected: true` flags on Phase 2 routes in `src/lib/sitemap.ts`). Team-finding moves to Gather; Gather invite is sent at sign-up confirmation rather than on first sign-in. Tracked in WNC-19.

~~Stretch — Circle.so OAuth integration (Phase 2)~~ *(descoped)*
- ~~Sign in via Circle.so for gated resource access~~
- ~~Signed-in users see opt-in attendee directory (helps team-finding)~~
- ~~Signed-in users can post for team-finding without leaving the site~~
- ~~Sign-in event triggers Gather invite if not already sent~~
- ~~Descope rule: if not feasible by Wed May 6 EOD, fall back to email-gate or no-auth and ship Phase 2 on time.~~ *(triggered — fell back to no-auth)*
## 8. Integrations
## 9. Tech Stack
- Hosting: Vercel
- Framework: Next.js (App Router) — supports static + dynamic per phase
- Styling: Tailwind, WNCP AI brand tokens, co-branded lockup (MLT navy + WNCP AI accent)
- Forms: Server action → Notion DB or Airtable; Resend (or MLT preferred tool) for confirmation email
- Analytics: Vercel Analytics + Plausible (lightweight, no cookie banner needed in most regions)
- Image / video: Vercel Image Optimization; Mux or YouTube embeds for finalist videos
- Auth: server-side password gate for `/wncp/*` only (see §7). Phase 2 public no-auth; Circle.so OAuth descoped 2026-05-02.
## 10. Brand, SEO & Accessibility
Brand
- Co-branded lockup MLT × WNCP AI approved by Apr 30 (per MLT20 Buildathon — Marketing Assets List)
- WNCP AI brand tokens for primary type and color
- MLT navy as anchor; WNCP AI accent for buildathon/action moments
SEO + Social
- Title: MLT20 AI Buildathon — Anyone can AI
- Meta description: 150-char summary of event, dates, audience
- OG image per phase (launch, kickoff, finalists)
- Structured data: Event schema with start/end times and location
- Indexed routes: /, /prompts/*, /timeline, /faq, /showcase/*, /recap
Accessibility
- WCAG 2.1 AA target
- Semantic landmarks, skip-to-content, keyboard-navigable forms and modals
- Captions on demo videos and recap reel
- Color contrast ≥ 4.5:1 on all text
## 11. Analytics & Success Metrics
Event tracking: signup_submitted, prompt_card_clicked, devpost_outbound, gather_outbound, tool_quickstart_viewed, finalist_demo_played, lead_form_submitted.
## 12. Launch Plan & Cutover
Pre-launch QA (each phase)
- Cross-browser: Chrome, Safari, Firefox, mobile Safari, Chrome Android
- Form submission end-to-end including confirmation email
- All outbound links (Devpost, Gather, partner sites) verified
- OG image preview in LinkedIn / Twitter / iMessage
- Lighthouse: Performance >90, Accessibility >95, SEO >95
## 13. Post-Event Maintenance
- Site stays live under same domain through end of 2026
- Phase 3 content frozen after May 22
- Quarterly check: refresh "Run your own" lead form copy, update WNCP AI links
- Domain renewal calendar reminder set
## 14. Risks & Mitigations
## 15. Open Questions
- Domain / subdomain? Candidates: buildathon.wncp.ai, mlt20.wncp.ai, build.mlt.org (need MLT call)
- Form backend: Notion DB or Airtable? (lean Notion for sync with master task tracking)
- Email tool: ConvertKit / Mailchimp / Resend / MLT's existing? (decide with Kareem + MLT)
- Build vs. partial buy (Lu.ma + light landing combo)? — recommend full build for brand control
- Devpost auth handoff — deep-link with email prefill, or require manual signup?
- Do we need a Spanish-language or partner-specific pass if a sponsor/community partner requires it?
## 16. Dependencies & Owners
