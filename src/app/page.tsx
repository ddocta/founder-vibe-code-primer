import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder AI Prototyping — A Three-Level Path",
  description:
    "Follow-up from a 2026-05-04 conversation at Cuba De Ayer, Burtonsville, MD — a quick overview of vibe coding a prototype for Dr. Monet Stanford, PharmD.",
};

/* ── Helper: resource card ── */
function ResourceCard({
  logo,
  name,
  desc,
  href,
}: {
  logo: string;
  name: string;
  desc: string;
  href: string;
}) {
  return (
    <a className="resource-card" href={href} target="_blank" rel="noopener">
      <img className="resource-logo" src={logo} alt="" width="44" height="44" />
      <div className="resource-body">
        <span className="resource-name">{name}</span>
        <span className="resource-desc">{desc}</span>
      </div>
    </a>
  );
}

/* ── Helper: video card ── */
function VideoCard({
  videoId,
  title,
  why,
  meta,
}: {
  videoId: string;
  title: string;
  why: string;
  meta: string;
}) {
  const href = `https://www.youtube.com/watch?v=${videoId}`;
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="video-card">
      <a href={href} target="_blank" rel="noopener" className="video-thumb-link">
        <img
          className="video-thumb"
          src={thumb}
          alt={title}
          loading="lazy"
          width="480"
          height="360"
        />
      </a>
      <div className="video-card-body">
        <p className="video-why">{why}</p>
        <p className="video-meta">{meta}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── Page header — elevated meta strip ── */}
      <div className="page-header">
        <p className="meta" aria-label="Meeting context">
          2026-05-04 · Cuba De Ayer · Burtonsville, MD · For Dr. Monet Stanford, PharmD
        </p>
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

      {/* ── Decorative divider ── */}
      <div className="section-divider" role="separator" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
         LEVEL 1 — A landing page people can click
         ════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="l1-heading" className="level-card">
        <div className="section-head">
          <span className="num" aria-hidden="true">1</span>
          <h2 id="l1-heading">A landing page people can click</h2>
        </div>

        {/* Callout boxes */}
        <div className="callout-grid">
          <div className="callout">
            <span className="callout-icon">🔨</span>
            <div className="callout-text">
              <strong>What you build:</strong> A single-page prototype, no backend,
              no login. Clickable in a browser. You can show it to one person this
              week.
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🔍</span>
            <div className="callout-text">
              <strong>What you find out:</strong> Whether the problem is big enough
              that real people care.
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🎓</span>
            <div className="callout-text">
              <strong>You graduate when:</strong> 5 people have seen it, and at
              least one has told you &ldquo;when can I use this?&rdquo;
            </div>
          </div>
        </div>

        <h3>Key tools</h3>
        <div className="resource-grid">
          <ResourceCard
            logo="/logos/google.svg"
            name="Google AI Studio App Builder"
            desc="Describe your app in a paragraph, get a working page back. Free tier, browser, no setup. Builds full front-ends from prompts."
            href="https://aistudio.google.com/"
          />
          <ResourceCard
            logo="/logos/google.svg"
            name="Google Stitch"
            desc="Design the visual layer. Stitch 2.0 pulls design systems from URLs, generates clickable prototypes, and exports to AI Studio. Free."
            href="https://stitch.google/"
          />
        </div>

        {/* Primary video card */}
        <h3>Watch first</h3>
        <VideoCard
          videoId="Dem3ZSQ6RVM"
          title="Google AI Studio — Full Tutorial 2026: How To Build an App"
          why="Best end-to-end walkthrough of building an app from a prompt — covers everything from blank page to working prototype."
          meta="Mikey No Code · 16 min · 100K views · March 2026"
        />

        {/* Additional videos */}
        <details className="more-videos">
          <summary>More videos</summary>
          <div className="video-grid">
            <VideoCard
              videoId="J7XpscQqCYw"
              title="Google Stitch Just Became an AI Figma (And It's Free)"
              why="Shows how to pull design systems from any website and generate clickable prototypes, free — essential for the design layer."
              meta="Sam Witteveen · 12 min · 64K views"
            />
            <VideoCard
              videoId="UpYSNdA8a-M"
              title="Google AI Studio for Beginners (2026)"
              why="Covers the full platform — images, video, app builder — all in 12 minutes. Perfect if you&apos;re starting from zero."
              meta="Learn With Shopify · 12 min · 234K views"
            />
          </div>
        </details>
      </section>

      {/* ── Decorative divider ── */}
      <div className="section-divider" role="separator" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
         LEVEL 2 — A working web app with a backend
         ════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="l2-heading" className="level-card">
        <div className="section-head">
          <span className="num" aria-hidden="true">2</span>
          <h2 id="l2-heading">A working web app with a backend</h2>
        </div>

        {/* Callout boxes */}
        <div className="callout-grid">
          <div className="callout">
            <span className="callout-icon">🔨</span>
            <div className="callout-text">
              <strong>What you build:</strong> A real product. Users can sign up,
              log in, save their data, come back tomorrow. Running on a real domain.
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🔍</span>
            <div className="callout-text">
              <strong>What you find out:</strong> Whether people will keep using it
              — and whether a real product can hold their attention.
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🎓</span>
            <div className="callout-text">
              <strong>You graduate when:</strong> 10 real users, 1 paying customer,
              or a partner conversation that demands a working product.
            </div>
          </div>
        </div>

        <h3>Key tools</h3>
        <div className="resource-grid">
          <ResourceCard
            logo="/logos/supabase.svg"
            name="Supabase"
            desc="Backend as a service. PostgreSQL database, authentication (email/password + Google/GitHub login), file storage, real-time subscriptions. Free tier."
            href="https://supabase.com/"
          />
          <ResourceCard
            logo="/logos/vercel.svg"
            name="Vercel"
            desc="Hosting. Connect your GitHub repo, paste your env variables, Vercel auto-deploys on every push. Free tier covers your first project."
            href="https://vercel.com/"
          />
        </div>

        {/* Primary video card */}
        <h3>Watch first</h3>
        <VideoCard
          videoId="hVrSGKGU24g"
          title="Supabase Tutorial for Beginners 2026: How to Use Supabase"
          why="Complete backend setup — database, auth, storage — all in 32 minutes. The fastest way to go from zero to a working backend."
          meta="Mikey Vibe Coding · 32 min · 16K views · 2026"
        />

        {/* Additional videos */}
        <details className="more-videos">
          <summary>More videos</summary>
          <div className="video-grid">
            <VideoCard
              videoId="Kic6Zplgc4Q"
              title="Build and Launch a REAL App with Codex, Supabase and Vercel"
              why="Shows the full pipeline from idea to production with three tools working together — watch this after you&apos;ve done the Supabase primer."
              meta="James NoCode · 39 min · 2026"
            />
            <VideoCard
              videoId="snhbWQ5vnPg"
              title="Deploy A Fullstack Next.js App in Minutes"
              why="Fast-paced walkthrough of deploying a real full-stack app in under 10 minutes — perfect confidence builder before your own launch."
              meta="Code Ryan · 7 min · 2025"
            />
          </div>
        </details>
      </section>

      {/* ── Decorative divider ── */}
      <div className="section-divider" role="separator" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
         LEVEL 3 — A codebase you can keep building
         ════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="l3-heading" className="level-card">
        <div className="section-head">
          <span className="num" aria-hidden="true">3</span>
          <h2 id="l3-heading">A codebase you can keep building</h2>
        </div>

        {/* Callout boxes */}
        <div className="callout-grid">
          <div className="callout">
            <span className="callout-icon">🔨</span>
            <div className="callout-text">
              <strong>What you build:</strong> A real IDE, version control, and an
              AI agent as a teammate. When the prototype <em>is</em> the company.
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🔍</span>
            <div className="callout-text">
              <strong>What you find out:</strong> Can I ship faster than I break
              things? Can another engineer look at this and understand it?
            </div>
          </div>
          <div className="callout">
            <span className="callout-icon">🎓</span>
            <div className="callout-text">
              <strong>You graduate when:</strong> You hire or partner with an
              engineer, or you <em>are</em> the engineer and the codebase is the
              foundation.
            </div>
          </div>
        </div>

        <h3>Key tools</h3>
        <div className="resource-grid">
          <ResourceCard
            logo="/logos/anthropic-symbol.svg"
            name="Claude Code"
            desc="Agentic coding tool. Plans, builds, debugs from natural language. Runs locally. $20/mo Pro tier. Start in Plan Mode, build with Opus, iterate with Sonnet."
            href="https://docs.anthropic.com/en/docs/claude-code"
          />
          <ResourceCard
            logo="/logos/cursor.svg"
            name="Cursor"
            desc="AI-first code editor. Built on VS Code. Agent mode with Opus model. Free tier available."
            href="https://cursor.sh/"
          />
          <ResourceCard
            logo="/logos/google.svg"
            name="Google Anti-Gravity"
            desc="Google&apos;s agentic IDE. Free for individual use. Plans projects, creates files, runs terminal commands, tests its own code."
            href="https://antigravity.google/"
          />
        </div>

        {/* Primary video card */}
        <h3>Watch first</h3>
        <VideoCard
          videoId="-0Irz8G0PEE"
          title="Google Antigravity Tutorial for Beginners: Build Your First App"
          why="Hands-on intro to building your first app with Google&apos;s agentic IDE — start here to see what agentic coding feels like."
          meta="Teacher&apos;s Tech · 13 min · 127K views · January 2026"
        />

        {/* Additional videos */}
        <details className="more-videos">
          <summary>More videos</summary>
          <div className="video-grid">
            <VideoCard
              videoId="bqJzIWAEn40"
              title="Full Claude Code Tutorial for Non-Technical Beginners in 2026"
              why="Best beginner-friendly walkthrough of coding with Claude&apos;s agent mode — no technical background needed."
              meta="Futurepedia · 2026"
            />
            <VideoCard
              videoId="oQDCAJnr1aU"
              title="Cursor AI Tutorial for Beginners: Build App with AI (2026)"
              why="Complete guide to building an app with Cursor&apos;s AI features from scratch — covers the full workflow."
              meta="Mikey No Code · 23 min · 134K views"
            />
            <VideoCard
              videoId="kF2WQgk1LtY"
              title="Cursor: Coding Agents Tutorial (2026)"
              why="Deep dive into Cursor&apos;s agent mode and how to use it for real projects — watch after the beginner tutorial."
              meta="leerob · 30 min · 51K views"
            />
          </div>
        </details>
      </section>

      {/* ── Decorative divider ── */}
      <div className="section-divider" role="separator" aria-hidden="true" />

      {/* ── Footer ── */}
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