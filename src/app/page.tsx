/**
 * Founder AI Prototyping Primer — a three-level path for non-technical founders.
 *
 * Pitch 3 framing: single paragraph with the two founder questions at the top,
 * then three numbered levels (1. Landing page, 2. Web app with backend,
 * 3. Codebase) as the show. Each level has a keystone YouTube embed and a
 * <details> collapsible with secondary tool links.
 *
 * Source of truth for copy: planning/01-page-copy.md
 * Design tokens: src/app/globals.css
 *
 * Server component — no 'use client'.
 */
export default function Page() {
  return (
    <main className="wrap">
      {/* ===== Meta strip ==================================================== */}
      <div className="meta">
        <span>2026-05-04</span>
        <span className="dot" aria-hidden="true" />
        <span>Cuba De Ayer · Burtonsville, MD</span>
        <span className="dot" aria-hidden="true" />
        <span>For Dr. Monet Stanford, PharmD</span>
      </div>

      {/* ===== Title + framing paragraph ===================================== */}
      <h1>
        Founder AI Prototyping{' '}
        <span className="accent">— A Three-Level Path</span>
      </h1>
      <p className="lede">
        Two questions first: do people want this enough to use it, and can a
        business support it? Here&apos;s the way to find out — by building,
        putting it in front of people, and watching what happens.
      </p>

      <hr />

      {/* ======================================================================
          Level 1 — A landing page in your browser
          ==================================================================== */}
      <section>
        <h2>
          <span className="num">1</span> A landing page in your browser
        </h2>

        <p>
          <strong>What you build.</strong> A single clickable page, no backend,
          no database, no login. Free, browser-based, no setup.
        </p>
        <p>
          <strong>What you find out.</strong> Whether the problem is big enough
          that one specific person will engage with your version of the
          solution. If they won&apos;t click the button on a free page, they
          won&apos;t click it on a paid one.
        </p>
        <p>
          <strong>You graduate when.</strong> You&apos;ve shown the page to 5
          different people, heard the same 2-3 things repeated back, and at
          least one of them has asked &ldquo;when can I sign up?&rdquo;
        </p>

        <p className="video-caption">
          <strong>Keystone video.</strong> Watch this first — it sets the
          vocabulary for everything below.
        </p>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-LFB8D9WV-g"
            title="Learn to Vibe Code in 10 Minutes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <details>
          <summary>
            <span className="chevron" aria-hidden="true">▶</span>
            More tools &amp; quick starts
          </summary>
          <div className="body">
            <ul className="tool-links">
              <li>
                <a
                  href="https://aistudio.google.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Google AI Studio
                </a>
                {' '}— the page generator. Free, browser, no setup. Type a
                paragraph about the page you wish existed, get a clickable page
                back.
              </li>
              <li>
                <a
                  href="https://stitch.withgoogle.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Google Stitch
                </a>
                {' '}— for the visual layer when AI Studio&apos;s output looks
                generic. Free, browser.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Dem3ZSQ6RVM"
                  target="_blank"
                  rel="noopener"
                >
                  Google AI Studio — Full Tutorial 2026
                </a>
                {' '}— end-to-end walkthrough of the tool.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=QGZ24YhbZT8"
                  target="_blank"
                  rel="noopener"
                >
                  Google Stitch 2.0: From Sketch to Code
                </a>
                {' '}— when you need the visual layer to look real.
              </li>
            </ul>
          </div>
        </details>
      </section>

      <hr />

      {/* ======================================================================
          Level 2 — A web app with a backend
          ==================================================================== */}
      <section>
        <h2>
          <span className="num">2</span> A web app with a backend
        </h2>

        <p>
          <strong>What you build.</strong> A working product with real logins,
          saved data, a real domain. Free for the first project.
        </p>
        <p>
          <strong>What you find out.</strong> Whether real people will keep
          using the product once the prop is gone — the difference between
          &ldquo;wow cool&rdquo; and &ldquo;I open this every week.&rdquo; This
          is the first level where you can find out whether the business model
          has any traction at all.
        </p>
        <p>
          <strong>You graduate when.</strong> You have 10 real users, you have a
          paying customer OR a partner conversation that requires real features,
          and you have felt the pain of &ldquo;I broke production and I
          don&apos;t know how I did it.&rdquo;
        </p>

        <p className="video-caption">
          <strong>Keystone video.</strong> Christian Peverelli (WeAreNoCode),
          30:32, 373K views. The cleanest end-to-end walkthrough of the no-code
          path.
        </p>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/zA5kv1P_p7I"
            title="How to Build an App From SCRATCH with Lovable + Supabase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <details>
          <summary>
            <span className="chevron" aria-hidden="true">▶</span>
            More tools &amp; quick starts
          </summary>
          <div className="body">
            <ul className="tool-links">
              <li>
                <a
                  href="https://lovable.dev/"
                  target="_blank"
                  rel="noopener"
                >
                  Lovable
                </a>
                {' '}— no-code frontend, generates a real React app from a
                description.
              </li>
              <li>
                <a
                  href="https://supabase.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Supabase
                </a>
                {' '}— auth + database + storage in one. Free tier.
              </li>
              <li>
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Vercel
                </a>
                {' '}— hosting, auto-deploys from GitHub, free tier.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=WSsmsyynphM"
                  target="_blank"
                  rel="noopener"
                >
                  Lovable × Supabase: Everything Starts with Lovable
                </a>
                {' '}— what the integration actually does in production.
              </li>
            </ul>
          </div>
        </details>
      </section>

      <hr />

      {/* ======================================================================
          Level 3 — A codebase you can keep building
          ==================================================================== */}
      <section>
        <h2>
          <span className="num">3</span> A codebase you can keep building
        </h2>

        <p>
          <strong>What you build.</strong> A real codebase in a real IDE, with
          version control, proper PRDs, and an AI agent as a teammate instead of
          a vending machine. Write tests. Review diffs. Cut branches.
        </p>
        <p>
          <strong>What you find out.</strong> Whether the prototype is the
          company — whether you can keep shipping without breaking, and whether
          you can hand the codebase to the next engineer you hire. This is where
          the business model question gets a real answer.
        </p>
        <p>
          <strong>You graduate when.</strong> You hire or partner with an
          engineer, and you can talk to them about the system they own.
        </p>

        <p className="video-caption">
          <strong>Keystone video.</strong> Beginner setup of the terminal + IDE
          flow. 86K views.
        </p>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/kddjxKEeCuM"
            title="How to Set Up Claude Code in 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <details>
          <summary>
            <span className="chevron" aria-hidden="true">▶</span>
            More tools &amp; quick starts
          </summary>
          <div className="body">
            <ul className="tool-links">
              <li>
                <a
                  href="https://claude.com/product/claude-code"
                  target="_blank"
                  rel="noopener"
                >
                  Claude Code
                </a>
                {' '}— terminal, copy-paste, the easiest entry.
              </li>
              <li>
                <a
                  href="https://cursor.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Cursor
                </a>
                {' '}— polished AI-first editor.
              </li>
              <li>
                <a
                  href="https://antigravity.google/"
                  target="_blank"
                  rel="noopener"
                >
                  Google Anti-Gravity
                </a>
                {' '}— free option, deep in the Google ecosystem.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=pJylXFAC87A"
                  target="_blank"
                  rel="noopener"
                >
                  Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested
                  Them All)
                </a>
                {' '}— 133K views, best single comparison if you don&apos;t
                know which IDE to pick.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=BpOsHF5Oj_I"
                  target="_blank"
                  rel="noopener"
                >
                  Riley Brown — Vibe Coding for Beginners (Full Course 2026)
                </a>
                {' '}— 55:25, the deep end-to-end build. Black creator, 247K
                subscribers.
              </li>
            </ul>
          </div>
        </details>
      </section>

      <hr />

      {/* ===== Footer ======================================================== */}
      <footer>
        <p>
          Built with{' '}
          <a href="https://wncp.ai" target="_blank" rel="noopener">
            Hermes
          </a>
          . Patterned on the{' '}
          <a
            href="https://mlt20buildathon.events.wncp.ai/"
            target="_blank"
            rel="noopener"
          >
            MLT20 AI Buildathon
          </a>
          .
        </p>
      </footer>
    </main>
  );
}