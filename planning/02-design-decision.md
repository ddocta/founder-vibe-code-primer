# Design Decision — Single-page, three-level progression

**Decision:** Build a single page where the three levels of AI prototyping are stacked vertically in sequence. The framing paragraph at the top names the two founder questions; the three levels below are the work, the videos, and the tools. Each level is one screen of scroll. Each level has one keystone video as the visual anchor, with secondary tool links and quick-start videos in a collapsible underneath.

**Why single-page, why stacked, why this order:**

1. **The page is for one meeting with one person.** A 5-minute top-to-bottom read matches how a non-technical founder will actually engage with it. A multi-route site would force navigation decisions she doesn't need to make.
2. **The two founder questions are the framing, not the structure.** They appear once, in the lede paragraph. They are not section headers, not a curriculum, not echoed under each level. The reader learns why the page exists in the first sentence after the title, then the levels take over.
3. **The three levels are a progression path, not a choose-your-own.** There is one "next" at each level. Numbered levels (1 → 2 → 3) make the sequence unambiguous; collapsing them into parallel options would be wrong.
4. **The videos are the show.** Each level is mostly video + tool links. The prose around them is scaffolding, not the main act. This is the difference between "an editorial walkthrough" and "a tool directory in disguise."
5. **The level names are what you build, not who you are.** Earlier drafts named the levels as roles (Pitcher / Builder / Engineer) — the user rejected that framing because it implied a status ("you are not yet an Engineer") that read as patronizing for a senior non-technical founder. The current framing names the levels by the artifact ("a landing page" / "a web app with a backend" / "a codebase") so the reader maps to the work, not to a hierarchy.

**Visual direction:** white-forward, Kinetic Editorial accents only. Red `#BD1B04` on dividers, section numbers, and links — no dark blocks, no heavy red panels. Per Damien: "we don't want as many dark, black, and heavy red accents as we normally do." The videos and tool links are the visual content; the page chrome stays out of their way. Mobile-responsive at 720px.

**Why no CTA, no "book a call," no firm promotion:** the user feedback was explicit — "there's no sale here, this is really just about clean and easy explanation and sharing of resources." The page is the artifact. The brand appears once, in the footer, as a single line. The site itself is the demonstration of what a Hermes-built page can do, which is the most useful kind of leadership content — it earns trust by being useful instead of asking for it.
