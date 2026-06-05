# Design Decision — Single-page layout (Framing 1)

**Decision:** Build a single long page where the three tiers are stacked vertically and progressively more complex as you scroll. Tier 1 is a static site description, Tier 2 adds backend/Database, Tier 3 adds IDE/agentic coding.

**Selected from three options pitched in the kickoff thread (2026-06-04):**

1. **"The Three Tiers, Stacked"** ← chosen. A single full-bleed hero, then a tall numbered stack (01 Landing Page · 02 Backend · 03 Full Build). Each tier is a `<details>`/`<summary>` block. Reads like an editorial walkthrough. Best when the audience wants a guided tour.
2. "The Agent Build, Live" — split screen of an agent chat log + the live page being built. Best when the audience needs to *see the speed* to believe it's possible.
3. "The Founder's First Tool Belt" — dense single-page tool directory, no narrative. Best when the audience already trusts the speaker and just wants the tools.

**Why Framing 1:** the page is for one meeting with one person. A guided tour (read top-to-bottom in 5 minutes) matches how a non-technical founder will actually skim it. The "live build" framing (option 2) is what we *do in the meeting*; the page is what she takes away. The "tool belt" framing (option 3) loses the thesis — and the thesis ("vote with clicks, not theory") is the whole point of the meeting.

**Visual direction:** white-forward, Kinetic Editorial accents only (red `#BD1B04` on dividers, prompt left-border, section numbers, CTA). No dark slides, no heavy red blocks. Per Damien: "we don't want as many dark, black, and heavy red accents as we normally do."
