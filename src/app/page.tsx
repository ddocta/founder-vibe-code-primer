import CopyPrompt from "@/components/CopyPrompt";

/**
 * Founder Vibe Code Primer — the entire site is a single page.
 * All content is server-rendered except the Founder OS prompt,
 * which is a client component for the copy-to-clipboard button.
 *
 * Copy source: planning/01-page-copy.md
 * Design tokens: src/app/globals.css (sourced from resources/DESIGN.md)
 *
 * Structure (visible on first paint — no collapsed sections):
 *   00 Hero
 *   01 Mental model (with one anchor video)
 *   02 The three roles (always-visible cards)
 *   03 Founder OS prompt (with copy button)
 *   04 One video per role (curated shortlist)
 *   05 Where this comes from
 *   Footer
 */
export default function Page() {
  return (
    <main className="wrap">
      {/* ===== 00 — Hero ====================================================== */}
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
        Three jobs. One journey. Pick the role that fits your week, not the
        role you wish you were ready for.
      </p>

      <hr />

      {/* ===== 01 — Mental model ============================================== */}
      <h2>
        <span className="num">01</span> The 3-minute mental model
      </h2>
      <p>
        Until people can see it and vote with their actual clicks and dollars
        and credit cards, everything you know and understand is just a theory
        and still needs to be validated. The fastest way to validate an idea is
        to build a public version of it — the uglier and earlier the better —
        and put it in front of real users.
      </p>
      <p>
        There are <strong>levels to this</strong>. You don&apos;t jump from
        &ldquo;I have an idea&rdquo; to &ldquo;I need to hire an
        engineer.&rdquo; You move through three jobs, in order, and graduate
        from each before the next one makes sense. The wrong move at each
        level is the same: trying to do the next level&apos;s job with this
        level&apos;s tools.
      </p>

      <p className="callout">
        <strong>Watch this first — 10 minutes, sets the vocabulary for everything below:</strong>{" "}
        <a
          href="https://www.youtube.com/watch?v=-LFB8D9WV-g"
          target="_blank"
          rel="noopener"
        >
          &ldquo;Learn to Vibe Code in 10 Minutes&rdquo;
        </a>
      </p>

      <hr />

      {/* ===== 02 — The three roles =========================================== */}
      <h2>
        <span className="num">02</span> The three roles
      </h2>
      <p>
        Each role is a <strong>job you do this week</strong>, with a specific
        tool, a checklist, and a graduation trigger. Pick the one whose
        checklist looks like your week. If none of them look like your week,
        you&apos;re not in the right one yet.
      </p>

      {/* ----- Role 1 — The Pitcher ----------------------------------------- */}
      <article className="role role-1">
        <div className="role-header">
          <span className="role-badge">ROLE 01</span>
          <h3 className="role-name">The Pitcher</h3>
        </div>
        <p className="role-quote">
          &ldquo;Can I show this to one person and watch them click?&rdquo;
        </p>

        <div className="role-grid">
          <div>
            <p className="role-label">You are here when</p>
            <p>
              You have an idea but no page, no screenshot, no link. You&apos;re
              describing it out loud and people are politely nodding.
            </p>
          </div>
          <div>
            <p className="role-label">You graduate when</p>
            <p>
              You&apos;ve shown the page to 5 different people, heard the same
              2-3 things repeated back, and at least one of them has asked
              &ldquo;when can I sign up?&rdquo;
            </p>
          </div>
        </div>

        <p>
          <span className="role-label">The job.</span> Turn your idea into a
          single clickable page. Not a real product. A <em>prop</em> — a
          fake-but-real-looking thing you can put in front of one specific
          human and watch them react.
        </p>
        <p>
          <span className="role-label">The tool.</span>{" "}
          <a href="https://aistudio.google.com/" target="_blank" rel="noopener">
            Google AI Studio
          </a>{" "}
          (free, browser) +{" "}
          <a href="https://stitch.withgoogle.com/" target="_blank" rel="noopener">
            Google Stitch
          </a>{" "}
          for the visual layer. No install, no account needed, no code.
        </p>

        <p className="role-label">This week&apos;s checklist</p>
        <ol className="role-checklist">
          <li>Open Google AI Studio. Type a paragraph describing the page you wish existed.</li>
          <li>Generate. Iterate the prompt until the page actually looks like your idea.</li>
          <li>Take a screenshot. Send it to one person who will not be polite.</li>
          <li>Ask them: &ldquo;If this existed, would you click the button? Why or why not?&rdquo;</li>
          <li>Write down what they said in one sentence. That&apos;s your next prompt.</li>
        </ol>
      </article>

      {/* ----- Role 2 — The Builder ----------------------------------------- */}
      <article className="role role-2">
        <div className="role-header">
          <span className="role-badge">ROLE 02</span>
          <h3 className="role-name">The Builder</h3>
        </div>
        <p className="role-quote">
          &ldquo;Can real people actually use this, save their stuff, and come back?&rdquo;
        </p>

        <div className="role-grid">
          <div>
            <p className="role-label">You are here when</p>
            <p>
              The prop isn&apos;t enough. You have a feedback pattern. People
              are asking to <em>do</em> the thing, not just look at it. You
              need a login, a database, a real domain.
            </p>
          </div>
          <div>
            <p className="role-label">You graduate when</p>
            <p>
              You have 10 real users, you have a paying customer OR a partner
              conversation that requires real features, and you&apos;ve felt
              the pain of &ldquo;I broke production and I don&apos;t know how
              I did it.&rdquo;
            </p>
          </div>
        </div>

        <p>
          <span className="role-label">The job.</span> Wire a backend to the
          page you already have. Users can sign up, their stuff is saved, the
          app survives a page refresh. Still mostly free.
        </p>
        <p>
          <span className="role-label">The tool.</span>{" "}
          <a href="https://lovable.dev/" target="_blank" rel="noopener">
            Lovable
          </a>{" "}
          (no-code frontend) +{" "}
          <a href="https://supabase.com/" target="_blank" rel="noopener">
            Supabase
          </a>{" "}
          (auth + database) +{" "}
          <a href="https://vercel.com/" target="_blank" rel="noopener">
            Vercel
          </a>{" "}
          (hosting, auto-deploys from GitHub). All free for the first project.
        </p>

        <p className="role-label">This week&apos;s checklist</p>
        <ol className="role-checklist">
          <li>Write a one-page PRD — problem, who it&apos;s for, the one core flow, how you measure success.</li>
          <li>Pick the Supabase template that matches (auth + a table for what you save) — or copy-paste from Claude Code into the Supabase SQL editor.</li>
          <li>In Lovable, build the form. Wire it to Supabase. Push to GitHub.</li>
          <li>Vercel auto-deploys the moment you push.</li>
          <li>Buy a domain ($12/year) and point it at the Vercel project.</li>
        </ol>
      </article>

      {/* ----- Role 3 — The Engineer ---------------------------------------- */}
      <article className="role role-3">
        <div className="role-header">
          <span className="role-badge">ROLE 03</span>
          <h3 className="role-name">The Engineer</h3>
        </div>
        <p className="role-quote">
          &ldquo;Can I ship faster than I break things, and explain to another engineer what I built?&rdquo;
        </p>

        <div className="role-grid">
          <div>
            <p className="role-label">You are here when</p>
            <p>
              The prototype is the product, not the pitch. You are not a
              &ldquo;non-technical founder who codes&rdquo; anymore — you are
              a founder who owns the codebase. The next conversation you need
              to have is with a senior engineer, and you need to be able to{" "}
              <em>show</em> them the system, not just describe it.
            </p>
          </div>
          <div>
            <p className="role-label">You graduate when</p>
            <p>
              You hire or partner with an engineer — and now you can{" "}
              <em>talk to them</em> about the system they own.
            </p>
          </div>
        </div>

        <p>
          <span className="role-label">The job.</span> Move out of the browser,
          into a real IDE, with version control, proper PRDs, and an AI agent
          as a teammate instead of a vending machine. Write tests. Review
          diffs. Cut branches.
        </p>
        <p>
          <span className="role-label">The tool.</span>{" "}
          <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener">
            Claude Code
          </a>{" "}
          (terminal, copy-paste) is the easiest entry.{" "}
          <a href="https://cursor.com/" target="_blank" rel="noopener">
            Cursor
          </a>{" "}
          is the polished AI-first editor.{" "}
          <a href="https://antigravity.google/" target="_blank" rel="noopener">
            Google Anti-Gravity
          </a>{" "}
          is the free option if you&apos;re deep in the Google ecosystem. All
          three do the same job — pick the one you&apos;ll actually open every
          day.
        </p>

        <p className="role-label">This week&apos;s checklist</p>
        <ol className="role-checklist">
          <li>Write a proper PRD — problem, <strong>non-goals</strong>, user journeys, success metric.</li>
          <li>Cut a feature branch. Point the agent at the PRD as <code>PRD.md</code> in the repo root.</li>
          <li>Let the agent scaffold. <strong>You</strong> read the diff. If you can&apos;t explain every changed file, it&apos;s not done.</li>
          <li>Iterate: code → review → test → merge. Never push to main without reading the diff.</li>
          <li>When you hit traction, hire or partner with an engineer — and now you can talk to them about the system they own.</li>
        </ol>
      </article>

      <hr />

      {/* ===== 03 — Founder OS prompt ======================================== */}
      <h2>
        <span className="num">03</span> Founder OS — the 8-question intake
      </h2>
      <p>
        Copy this prompt. Paste it into any chat assistant. Answer the 8
        questions honestly. It will research your idea, recommend which role
        to start in this week, and give you a 4-week plan for that role.
      </p>
      <CopyPrompt />

      <hr />

      {/* ===== 04 — One video per role ======================================= */}
      <h2>
        <span className="num">04</span> One video per role
      </h2>
      <p>
        Skip the long courses. Watch these short videos — one per role, in
        order. Total time: under 90 minutes.
      </p>

      <details open>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          If you are a Pitcher (start here)
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=-LFB8D9WV-g" target="_blank" rel="noopener">
              &ldquo;Learn to Vibe Code in 10 Minutes&rdquo;
            </a>{" "}
            — the mental model in 10 minutes. Watch this before you touch a tool.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=Dem3ZSQ6RVM" target="_blank" rel="noopener">
              Google AI Studio — Full Tutorial 2026
            </a>{" "}
            — the actual Tier-1 tool, end to end.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=QGZ24YhbZT8" target="_blank" rel="noopener">
              Google Stitch 2.0: From Sketch to Code
            </a>{" "}
            — if your generated page looks generic, this is the fix.
          </p>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          If you are a Builder (graduate from Pitcher first)
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=zA5kv1P_p7I" target="_blank" rel="noopener">
              How to Build an App From SCRATCH with Lovable + Supabase
            </a>{" "}
            — Christian Peverelli (WeAreNoCode), 30:32, 373K views. Year-old
            but still the cleanest end-to-end walkthrough of the no-code path.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=WSsmsyynphM" target="_blank" rel="noopener">
              Lovable × Supabase: Everything Starts with Lovable
            </a>{" "}
            — what the integration actually does in production.
          </p>
        </div>
      </details>

      <details>
        <summary>
          <span className="chevron" aria-hidden="true">▶</span>
          If you are an Engineer (graduate from Builder first)
        </summary>
        <div className="body">
          <p>
            <a href="https://www.youtube.com/watch?v=pJylXFAC87A" target="_blank" rel="noopener">
              Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested Them All)
            </a>{" "}
            — 133K views. Best single comparison if you don&apos;t know which
            IDE to pick.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=BpOsHF5Oj_I" target="_blank" rel="noopener">
              Riley Brown — Vibe Coding for Beginners (Full Course 2026)
            </a>{" "}
            — 55:25, the deep end-to-end build. Black creator, 247K
            subscribers, the most-respected primer in the space. Watch this
            when you&apos;re ready to ship your first serious project.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=kddjxKEeCuM" target="_blank" rel="noopener">
              How to Set Up Claude Code in 2026
            </a>{" "}
            — 86K views, beginner setup of the terminal/IDE flow.
          </p>
        </div>
      </details>

      <hr />

      {/* ===== 05 — Where this comes from ==================================== */}
      <h2>
        <span className="num">05</span> Where this comes from
      </h2>
      <p>
        <a href="https://mlt20buildathon.events.wncp.ai/" target="_blank" rel="noopener">
          MLT20 AI Buildathon
        </a>{" "}
        — the workshop this primer is patterned on. Three skill tracks aligned
        to the three roles here: Beginner (Lovable) / Developer (Cursor +
        Supabase + Vercel) / Expert (Claude Code agents).
      </p>
      <p>
        <a href="https://wncp.ai/methodology" target="_blank" rel="noopener">
          WNCP AI Methodology
        </a>{" "}
        — Scope / Ship / Scale. The framework behind the role progression.
      </p>

      <hr />

      {/* ===== Footer ======================================================== */}
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
