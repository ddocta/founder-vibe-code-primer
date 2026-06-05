/**
 * @type {import('next').NextConfig}
 *
 * Next.js config for the Founder Vibe Code Primer on Vercel.
 * See planning/PRD.md §11 and the nextjs-vercel-workflow skill.
 *
 * We deliberately do NOT set `output: 'export'`. Vercel serves the standard
 * Next.js build output as a static site automatically and produces the
 * `routes-manifest.json` the Vercel deployment harness requires. Static
 * export would skip that manifest and cause deployments to fail with
 * "The file '/vercel/path0/out/routes-manifest.json' couldn't be found".
 *
 * `images.unoptimized: true` silences the next/image warning (we don't use
 * next/image, but Next 15 still wants the hint).
 */
const nextConfig = {
  // No `output: 'export'` — Vercel serves the standard Next.js build.
  images: { unoptimized: true },
  // Don't fail the build on lint errors during this scaffold phase.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
