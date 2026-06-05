# Design System Document: Kinetic Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Architect"
This design system is built for WNCP AI to bridge the gap between technical precision and editorial high-fashion. It moves away from the "software template" look toward a "Kinetic Editorial" aesthetic—one that feels like a premium digital monograph.

The system achieves this through **Structural Brutalism**: a reliance on razor-sharp 0px radii, heavy-weight geometric typography, and intentional asymmetry. We treat every slide not as a container for data, but as a balanced composition where "white space" is an active element, and the deep red (`#BD1B04`) acts as a grounding anchor for the eye.

---

## 2. Colors

The palette is rooted in high-contrast light modes. It is unapologetic in its starkness, using red as a signal of intelligence and authority.

### Primary Palette
- **Primary (`#BD1B04`)**: The brand's most distinctive chromatic color—suitable for buttons, CTAs, and key interactive elements.
- **Secondary (`#000000`)**: A supporting color for less prominent UI elements, chips, and secondary actions.
- **Tertiary (`#0040d6`)**: An additional accent color for highlights, badges, or decorative elements.
- **Neutral (`#FFFFFF`)**: A neutral base color for backgrounds, surfaces, and non-chromatic elements.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning.
Boundaries must be defined solely through background color shifts. To separate a sidebar or a header, use `surface-container-low` against a `surface` background. Structural integrity is maintained through alignment and tonal shifts, never through "boxes."

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of premium matte paper.
- **Base Level:** `surface` (#F9F9F9)
- **Embedded Modules:** `surface-container` (#EEEEEE)
- **Floating/Action Items:** `surface-container-lowest` (#FFFFFF)

### Signature Textures
Avoid flat, "dead" reds. For main CTA backgrounds or large graphic blocks, use a subtle linear gradient transitioning from `primary` (#BD1B04) to a slightly darker red at a 135-degree angle. This adds "visual soul" and depth without violating the flat-design box aesthetic.

---

## 3. Typography

The system utilizes **Inter** as a geometric, tech-forward anchor for headlines and labels, with **Plus Jakarta Sans** for body text. Typography should be typeset with tight tracking (-0.02em) for headings to achieve a "Swiss style" editorial look.

- **Display LG (3.5rem)**: Reserved for hero statements. High-impact, bold weight.
- **Headline MD (1.75rem)**: Primary slide titles. Always in `on-surface` (#1A1C1C).
- **Title LG (1.375rem)**: For sub-headers and card titles.
- **Body LG (1rem)**: The standard for analytical content. Ensure a line height of 1.6 for maximum legibility against white backgrounds.
- **Label MD (0.75rem)**: Used for technical metadata or small captions. Often set in All-Caps with +0.05em tracking for a "labeled specimen" look.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**. To "lift" an element (like an AI insight card), place a `surface-container-lowest` (#FFFFFF) card on a `surface-container-low` (#F3F3F4) background. The contrast provides the lift.

### Ambient Shadows
If a floating effect is required (e.g., a modal or a floating action menu), use "Air Shadows":
- **Blur:** 40px - 60px
- **Opacity:** 4% - 8%
- **Color:** A tinted version of `on-surface` (never pure black).

### The "Ghost Border" Fallback
If a border is required for accessibility, use the **Ghost Border**: `outline-variant` (#E5BEB6) at **15% opacity**. This creates a suggestion of a container without breaking the editorial flow.

### Glassmorphism
For "Kinetic" overlays, use a semi-transparent `surface` color with a `20px backdrop-blur`. This allows WNCP's brand red or large-scale typography to bleed through the UI layers, creating a sense of sophisticated transparency.

---

## 5. Components

### Flat Design Boxes (Containers)
- **Corner Radius:** Fixed at **0px** across all scales (sm to xl).
- **Styling:** Use `primary-container` (#BD1B04) as a vertical "grounding bar" on the left side of text containers to denote active focus.

### Buttons
- **Primary:** `primary-container` background, `on-primary` text. Square edges.
- **Secondary:** Transparent background, `primary` 2px border (Internal only), or `on-surface` text.
- **Hover State:** Shift from `primary-container` to `primary` (the darker red).

### Input Fields
- **Style:** Underline only (2px `outline` token) or a subtle `surface-container-high` fill. No 4-sided boxes.
- **Error:** Use the `error` (#BA1A1A) token for both the underline and the helper text.

### Data Visualization
- **AI Kinetic Lines:** Use thin, horizontal bars of `#BD1B04` to separate headline concepts.
- **Lists:** No dividers. Use **24px vertical padding** (from the Spacing Scale) to create separation between list items.

---

## 6. Do's and Don'ts

### Do
- **Do** lean into extreme asymmetry. Large titles on the left, empty space on the right.
- **Do** use the logo in its high-contrast black/red version on white sections.
- **Do** treat "White" as a color. Use it to force the user's focus onto the red accents.
- **Do** keep all corners perfectly square (0px).

### Don't
- **Don't use orange.** Any deviation from the deep red (#BD1B04) breaks the brand authority.
- **Don't use divider lines.** They clutter the "Kinetic Editorial" look. Use negative space.
- **Don't use standard drop shadows.** If it looks like a "Material Design" shadow, it’s too heavy.
- **Don't use rounded buttons.** All elements must feel architectural and "built."