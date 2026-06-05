/**
 * @type {import('next').NextConfig}
 *
 * Static export config for the Founder Vibe Code Primer.
 * See planning/PRD.md §11 and the next-static-site skill.
 *
 * `output: 'export'` produces a fully static ./out/ directory.
 * `images.unoptimized: true` is REQUIRED for next/image to work with
 * static export (we don't use next/image, but this silences the warning).
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // The site has exactly one route, but Next 15 still wants a trailingSlash
  // hint. Default ('false') works fine for Vercel.
  trailingSlash: false,
  // Don't fail the build on lint errors during this scaffold phase.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
