import CopyPrompt from "@/components/CopyPrompt";

/**
 * Founder Vibe Code Primer — the entire site is a single page.
 * All content is server-rendered except the Founder OS prompt,
 * which is a client component for the copy-to-clipboard button.
 *
 * Copy source: planning/01-page-copy.md
 * Design tokens: src/app/globals.css (sourced from resources/DESIGN.md)
 */
export default function Page() {
  return (
    <main className="wrap">
      {/* ===== Hero ============================================================ */}
      <div className="meta">
        <span>2026-05-04</span>
        <span className="dot" aria-hidden="true" />
        <span>Cuba De Ayer · Burtonsville, MD</span>
        <span className="dot" aria-hidden="true" />
        <span>For Dr. Monet Stanford, PharmD</span>
      </div>

      <p className="kicker">By the way, AI</p>
      <h1>
        Founder Vibe Code <span className="accent">Primer</span>
      </h1>
      <p className="lede">
        A custom-built, quick and dirty primer for non-technical founders. One
        page, one meeting, one path: landing page → backend → full build.
      </p>

      <hr />

      {/* ===== 00 — Why this exists ============================================ */}
      <h2>
        <span className="num">00</span> Why this exists
      </h2>
      <p>
        Until people can see it and vote with their actual clicks and dollars
        and credit cards, everything you know and understand is just a theory
        and still needs to be validated. The fastest way to validate an idea
        is to build a public version of it — the uglier and earlier the
        better — and put it in front of real users.
      </p>
      <p>
        There are levels to this. You can move forward yourself in the
        technical understanding and building more of the prototype until you
        have enough traction, interest, or pull to partner with, hire, or
        bring in a more experienced engineer. You can build something that is
        good enough to get real signal and feedback on, and can be used to
        have real discussions with partners, accelerators, vendors, potential
        engineers, hires, and investors.
      </p>

      <hr />

      {/* ===== 01 — The three tiers ============================================ */}
      <h2>
        <span className="num">01</span> The three tiers
      </h2>

      <details open>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 1 — Landing page
          <span className="tag">no backend · no setup</span>
        </summary>
        <div className="body">
          <p>Cheap, easy, web-based. For validating the idea, not running a business.</p>
          <ol>
            <li>Open <strong>Google AI Studio</strong> (free, browser) and describe your idea in plain English.</li>
            <li>Use <strong>Stitch</strong> (free, browser) to mock up a few screens — typography, color, layout.</li>
            <li>Stitch hands you a <code>design.md</code> you can feed back into AI Studio.</li>
            <li>AI Studio generates a working page you can preview live.</li>
            <li>Share the URL with one person who will give you honest feedback.</li>
          </ol>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 2 — Add a backend
          <span className="tag">Supabase + Vercel</span>
        </summary>
        <div className="body">
          <p>Move off Google AI Studio and Stitch when you need users, saved responses, or login. Still mostly free.</p>
          <ol>
            <li>Write a one-page PRD — problem, audience, core flow, success metric.</li>
            <li>Pick a Supabase template (or scaffold a table for what you need to save).</li>
            <li>Use <strong>Lovable</strong> to wire the form/UI to Supabase — or copy-paste from Claude Code into the Supabase SQL editor.</li>
            <li>Push to GitHub; <strong>Vercel</strong> auto-deploys on commit.</li>
            <li>Add a custom domain when you have real users.</li>
          </ol>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 3 — Full AI software engineering
          <span className="tag">real IDE · version control</span>
        </summary>
        <div className="body">
          <p>When the prototype is the product, not the pitch.</p>
          <ol>
            <li>Write a proper PRD — problem, non-goals, user journeys, success metric.</li>
            <li>Cut a feature branch, point the agent at the PRD.</li>
            <li>Let the agent scaffold the project; review the diff.</li>
            <li>Iterate: code → review → test → merge.</li>
            <li>Hire or partner with an experienced engineer when you have traction.</li>
          </ol>
          <p>
            <strong>Easy options:</strong> Claude Code (terminal, copy-paste).{" "}
            <strong>More dedicated:</strong> Cursor (polished AI-first editor),
            Google Anti-Gravity (free, in the Google ecosystem).
          </p>
        </div>
      </details>

      <hr />

      {/* ===== 02 — Founder OS prompt ========================================== */}
      <h2>
        <span className="num">02</span> Founder OS — copy this prompt
      </h2>
      <p>
        One prompt that asks you eight questions, runs five minutes of research,
        recommends the lowest-friction Tier-1 tool, and produces a four-week
        custom learning plan. Paste it into any chat assistant.
      </p>
      <CopyPrompt />

      <hr />

      {/* ===== 03 — Prime video =============================================== */}
      <h2>
        <span className="num">03</span> Prime video
      </h2>
      <p style={{ fontSize: 14, color: "var(--wncp-muted)", margin: "-4px 0 12px" }}>
        <strong>Riley Brown — Vibe Coding for Beginners (Full Course 2026)</strong> · 55:25 · 247K-subscriber Black creator · 51K views · posted May 2026
      </p>
      <div className="video" aria-label="Prime YouTube video">
        <iframe
          src="https://www.youtube.com/embed/BpOsHF5Oj_I"
          title="Vibe Coding for Beginners (Full Course 2026) — Riley Brown"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <hr />

      {/* ===== 04 — Additional resources ======================================= */}
      <h2>
        <span className="num">04</span> Additional resources
      </h2>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 1 — Landing page quick starts
          <span className="tag">google ai studio + stitch</span>
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=Dem3ZSQ6RVM" target="_blank" rel="noopener">
              Google AI Studio — Full Tutorial 2026: How To Build an App
            </a>{" "}
            — a how-to-build walkthrough using the actual Tier-1 entry tool.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=3FIRNGJh00w" target="_blank" rel="noopener">
              Google Stitch Just Changed Web Design Forever
            </a>{" "}
            — what Stitch is good at and how it fits next to AI Studio.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=QGZ24YhbZT8" target="_blank" rel="noopener">
              Google Stitch 2.0 Tutorial: From Sketch to Code
            </a>{" "}
            — Stitch 2.0 walkthrough if you&apos;ve never used it.
          </p>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 2 — Backend quick starts
          <span className="tag">supabase + vercel + lovable</span>
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=WSsmsyynphM" target="_blank" rel="noopener">
              Lovable × Supabase: Everything Starts with Lovable and Supabase
            </a>{" "}
            — the highest-leverage no-code path to a real backend.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=zA5kv1P_p7I" target="_blank" rel="noopener">
              How to Build an App From SCRATCH with Lovable + Supabase
            </a>{" "}
            — Christian Peverelli (WeAreNoCode), 373K views, 30:32. A year old but
            still the highest-quality end-to-end walkthrough of the no-code path.
            (Recorded 2025; tool behavior unchanged as of May 2026.)
          </p>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Tier 3 — Real IDE / agentic tool quick starts
          <span className="tag">claude code · cursor · anti-gravity</span>
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=pJylXFAC87A" target="_blank" rel="noopener">
              Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested Them All)
            </a>{" "}
            — 133K views, recorded Feb 2026. Best single comparison if you
            don&apos;t know which one to pick.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=FU2iB-UfPPA" target="_blank" rel="noopener">
              Codex is The NEW Best AI Coding Tool (Here&apos;s Why)
            </a>{" "}
            — Riley Brown, 55K views. The OpenAI route.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=kddjxKEeCuM" target="_blank" rel="noopener">
              How to Set Up Claude Code in 2026 (Beginner Tutorial)
            </a>{" "}
            — 86K views, beginner setup of the terminal/IDE flow.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=dgwtzpJ3rE4" target="_blank" rel="noopener">
              Google Antigravity FULL COURSE 2 HOURS
            </a>{" "}
            — long-form deep dive on the free Google option.
          </p>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          Public build &amp; methodology
          <span className="tag">2 links</span>
        </summary>
        <div className="body">
          <p>
            <a href="https://mlt20buildathon.events.wncp.ai/" target="_blank" rel="noopener">
              MLT20 AI Buildathon
            </a>{" "}
            — the workshop this primer is patterned on (skill tracks: Beginner
            Lovable / Developer Cursor+Supabase+Vercel / Expert agents).
          </p>
          <p>
            <a href="https://wncp.ai/methodology" target="_blank" rel="noopener">
              WNCP AI Methodology
            </a>{" "}
            — Scope / Ship / Scale.
          </p>
        </div>
      </details>

      <hr />

      {/* ===== Footer ========================================================== */}
      <footer>
        <p>By the way, AI. WNCP AI is beginning to support founders learning to build with AI.</p>
        <p>
          <a href="https://wncp.ai" target="_blank" rel="noopener">
            wncp.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
