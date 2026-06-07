import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder AI Prototyping — A Three-Level Path",
  description:
    "Follow-up from a 2026-05-04 conversation at Cuba De Ayer, Burtonsville, MD — a quick overview of vibe coding a prototype for Dr. Monet Stanford, PharmD.",
};

export default function Home() {
  return (
    <main>
      {/* Meta strip */}
      <div className="meta" aria-label="Meeting context">
        2026-05-04 · Cuba De Ayer · Burtonsville, MD · For Dr. Monet Stanford, PharmD
      </div>

      <h1>Founder AI Prototyping — A Three-Level Path</h1>

      <p className="followup">
        <em>
          Follow-up from our 2026-05-04 conversation — a quick overview of vibe
          coding a prototype, based on what we discussed.
        </em>
      </p>

      <p className="lede">
        Two questions first: do people want this enough to use it, and can a
        business support it? Here&apos;s the way to find out — by building,
        putting it in front of people, and watching what happens.
      </p>

      <hr />

      {/* Level 1 */}
      <section aria-labelledby="l1-heading">
        <h2 id="l1-heading">
          <span className="num" aria-hidden="true">
            1
          </span>{" "}
          A landing page people can click
        </h2>

        <p>
          <strong>What you build:</strong> A single-page prototype, no backend,
          no login. Clickable in a browser. You can show it to one person this
          week.
        </p>
        <p>
          <strong>What you find out:</strong> Whether the problem is big enough
          that real people care.
        </p>
        <p>
          <strong>You graduate when:</strong> 5 people have seen it, and at
          least one has told you &ldquo;when can I use this?&rdquo;
        </p>

        <h3>Key tools</h3>
        <ul className="tool-links">
          <li>
            <strong>Google AI Studio App Builder</strong> — Describe your app in
            a paragraph, get a working page back. Free tier, browser, no setup.
            Builds full front-ends from prompts.
          </li>
          <li>
            <strong>Google Stitch</strong> — Design the visual layer. Stitch 2.0
            pulls design systems from URLs, generates clickable prototypes, and
            exports to AI Studio. Free.
          </li>
        </ul>

        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/Dem3ZSQ6RVM"
            title="Google AI Studio — Full Tutorial 2026: How To Build an App"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="video-caption">
            Mikey No Code · 16 min · 100K views · March 2026
          </p>
        </div>

        <details>
          <summary>More videos</summary>
          <ul className="tool-links">
            <li>
              <a
                href="https://www.youtube.com/watch?v=J7XpscQqCYw"
                target="_blank"
                rel="noopener"
              >
                Google Stitch Just Became an AI Figma (And It&apos;s Free)
              </a>{" "}
              — Sam Witteveen, 12 min, 64K views
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=UpYSNdA8a-M"
                target="_blank"
                rel="noopener"
              >
                Google AI Studio for Beginners (2026)
              </a>{" "}
              — Learn With Shopify, 12 min, 234K views
            </li>
          </ul>
        </details>
      </section>

      <hr />

      {/* Level 2 */}
      <section aria-labelledby="l2-heading">
        <h2 id="l2-heading">
          <span className="num" aria-hidden="true">
            2
          </span>{" "}
          A working web app with a backend
        </h2>

        <p>
          <strong>What you build:</strong> A real product. Users can sign up,
          log in, save their data, come back tomorrow. Running on a real domain.
        </p>
        <p>
          <strong>What you find out:</strong> Whether people will keep using it
          — and whether a real product can hold their attention.
        </p>
        <p>
          <strong>You graduate when:</strong> 10 real users, 1 paying customer,
          or a partner conversation that demands a working product.
        </p>

        <h3>Key tools</h3>
        <ul className="tool-links">
          <li>
            <strong>Supabase</strong> — Backend as a service. PostgreSQL
            database, authentication (email/password + Google/GitHub login),
            file storage, real-time subscriptions. Free tier. You point your
            frontend at Supabase and it handles the backend.
          </li>
          <li>
            <strong>Vercel</strong> — Hosting. Connect your GitHub repo, paste
            your env variables, Vercel auto-deploys on every push. Free tier
            covers your first project. Handles custom domains and SSL out of the
            box.
          </li>
        </ul>

        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/hVrSGKGU24g"
            title="Supabase Tutorial for Beginners 2026: How to Use Supabase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="video-caption">
            Mikey Vibe Coding · 32 min · 16K views · 2026
          </p>
        </div>

        <details>
          <summary>More videos</summary>
          <ul className="tool-links">
            <li>
              <a
                href="https://www.youtube.com/watch?v=Kic6Zplgc4Q"
                target="_blank"
                rel="noopener"
              >
                Build and Launch a REAL App with Codex, Supabase and Vercel
              </a>{" "}
              — James NoCode, 39 min, 2026
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=snhbWQ5vnPg"
                target="_blank"
                rel="noopener"
              >
                Deploy A Fullstack Next.js App in Minutes
              </a>{" "}
              — Code Ryan, 7 min, 2025
            </li>
          </ul>
        </details>
      </section>

      <hr />

      {/* Level 3 */}
      <section aria-labelledby="l3-heading">
        <h2 id="l3-heading">
          <span className="num" aria-hidden="true">
            3
          </span>{" "}
          A codebase you can keep building
        </h2>

        <p>
          <strong>What you build:</strong> A real IDE, version control, and an
          AI agent as a teammate. When the prototype <em>is</em> the company.
        </p>
        <p>
          <strong>What you find out:</strong> Can I ship faster than I break
          things? Can another engineer look at this and understand it?
        </p>
        <p>
          <strong>You graduate when:</strong> You hire or partner with an
          engineer, or you <em>are</em> the engineer and the codebase is the
          foundation.
        </p>

        <h3>Key tools</h3>
        <ul className="tool-links">
          <li>
            <strong>Claude Code</strong> — Agentic coding tool. Plans, builds,
            debugs from natural language. Runs locally. $20/mo Pro tier. Start
            in Plan Mode, build with Opus, iterate with Sonnet.
          </li>
          <li>
            <strong>Cursor</strong> — AI-first code editor. Built on VS Code.
            Agent mode with Opus model. Free tier available.
          </li>
          <li>
            <strong>Google Anti-Gravity</strong> — Google&apos;s agentic IDE.
            Free for individual use. Plans projects, creates files, runs
            terminal commands, tests its own code.
          </li>
        </ul>

        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-0Irz8G0PEE"
            title="Google Antigravity Tutorial for Beginners: Build Your First App"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="video-caption">
            Teacher&apos;s Tech · 13 min · 127K views · January 2026
          </p>
        </div>

        <details>
          <summary>More videos</summary>
          <ul className="tool-links">
            <li>
              <a
                href="https://www.youtube.com/watch?v=bqJzIWAEn40"
                target="_blank"
                rel="noopener"
              >
                Full Claude Code Tutorial for Non-Technical Beginners in 2026
              </a>{" "}
              — Futurepedia, 2026
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=oQDCAJnr1aU"
                target="_blank"
                rel="noopener"
              >
                Cursor AI Tutorial for Beginners: Build App with AI (2026)
              </a>{" "}
              — Mikey No Code, 23 min, 134K views
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=kF2WQgk1LtY"
                target="_blank"
                rel="noopener"
              >
                Cursor: Coding Agents Tutorial (2026)
              </a>{" "}
              — leerob, 30 min, 51K views
            </li>
          </ul>
        </details>
      </section>

      <hr />

      {/* Footer */}
      <footer>
        <p>
          This page was built with{" "}
          <a href="https://wncp.ai" target="_blank" rel="noopener">
            Hermes
          </a>
          . The MLT20 AI Buildathon is the workshop this is patterned on —{" "}
          <a
            href="https://mlt20buildathon.events.wncp.ai"
            target="_blank"
            rel="noopener"
          >
            mlt20buildathon.events.wncp.ai
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
