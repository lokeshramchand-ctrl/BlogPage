# ArticleBody Specification

## Overview
- **Target file:** `src/components/journal-article-body.tsx`
- **Interaction model:** static

## DOM Structure
Content column (600px, flex column). Intro H2 heading, then a sequence of blocks in this exact
order: P, H2, P, H3, P, UL, H3, P, H2, UL, H2, P, UL, P. Followed by a divider and a date row
(separate component, see article-meta.spec.md).

## Computed Styles

### Intro heading (H2, standalone, larger visual weight — first thing after byline)
- fontSize: 39px, fontWeight: 500, lineHeight: 42.9px, letterSpacing: -1.56px
- color: rgb(29, 32, 41) → `text-foreground`
- text: "Nude palettes bring quiet elegance, using soft natural tones that make design feel
  timeless and effortless."

### Body H2 (section headings: "Why they work", "Proof in the wild", "Make it sing")
- fontSize: 39px, fontWeight: 500, lineHeight: 42.9px, letterSpacing: -1.56px
- color: rgb(29, 32, 41) → `text-foreground`
- marginTop: 40px (from previous block)

### Body H3 (subheadings: "In digital products", "In packaging")
- fontSize: 30px, fontWeight: 500, lineHeight: 36px, letterSpacing: -0.6px
- color: rgb(29, 32, 41) → `text-foreground`
- marginTop: 40px

### Body P
- fontSize: 20px, fontWeight: 400, lineHeight: 26px, letterSpacing: normal
- color: rgb(73, 80, 93) → `text-muted-foreground`
- marginTop: 16px (0 for the very first paragraph)
- `<strong>` inside paragraphs: same size, fontWeight 700 (bold), color inherits (used for
  "Bottom line:" lead-in)

### Body UL / LI
- marginTop: 20px on the `<ul>`
- `list-style: none` on `<li>`, custom bullet via `::before { content: "•" }`, ~24.5px left
  indent for the bullet. Implement simply as `list-disc pl-6` marker equivalent, or a manual
  `•` prefix — visual result is a plain round bullet, no extra gap between items beyond the
  20px/26px line-height (items are NOT separated by extra margin, they sit flush at
  line-height spacing).
- List item text: same P styles (20px/400/26px/rgb(73,80,93)).
- `<strong>` inside list items (used for "Aesop", "Notion", "Ghia" lead-ins): fontWeight 700,
  color rgb(29,32,41) (foreground, not muted) — confirm visually against screenshot; if it
  reads muted instead that's acceptable, but bold weight is required.

## Text Content (verbatim, in exact order)

1. P: "Nude tones are no longer background actors for skincare and fashion. They're shaping
   the identities of wellness brands, design-forward apps, and product companies. Beige,
   taupe, clay, sand—the soft, natural range that used to sit behind the work is now a
   strategic choice in front of it."
2. H2: "Why they work"
3. P: "Nudes carry psychological weight. They lower noise and invite trust; they feel close,
   calm, and personal. Instead of shouting for attention, they earn it through serenity. For
   brands aiming for warmth, approachability, and timelessness, that restraint reads as
   confidence."
4. H3: "In digital products"
5. P: "Nudes shine in interfaces because they reduce cognitive load and let typography,
   imagery, and motion breathe.<br />A soft beige canvas can make buttons feel more tactile,
   while a sandy surface softens the bite of pure black text. The whole product reads less
   like a machine, more like a conversation." (the `<br/>` is a real line break in the source)
6. UL:
   - "Use nudes for surfaces and elevation."
   - "Keep actions legible with clear contrast."
   - "Let one accent color carry emphasis."
7. H3: "In packaging"
8. P: "The same logic holds in the physical world. Nude palettes evoke earthy minimalism and
   sensory luxury. A pale clay box feels premium without metallics; a taupe label signals
   restraint and care. When the color steps back, materials—recycled paper, raw cotton,
   glass—step forward."
9. H2: "Proof in the wild"
10. UL:
    - "**Aesop**: beige–brown systems = grounded luxury."
    - "**Notion**: off-white workspace = neutral focus."
    - "**Ghia**: muted tones = mindful alternative to louder competitors."
11. H2: "Make it sing"
12. P: "Flat beige can feel clinical. Layer it."
13. UL:
    - "Add grain, paper texture, tiny shadows, or blur to create tactility."
    - "Maintain AA/AAA contrast for text and states (hover, focus, disabled)."
    - "Build a small scale: base, surface, elevated, interactive, plus one accent."
14. P: "**Bottom line:** nude palettes aren't a trend; they're a response to overstimulation.
    Choosing nudes says, "we're confident enough to be quiet." Done well, they turn minimalism
    into tactile warmth—and make brands feel human, grounded, and emotionally aware."

## Responsive Behavior
- Column width: 600px desktop/tablet → 350px mobile (100% - 40px gutter), same pattern as the
  rest of the article content column.
- Font sizes unchanged across breakpoints (not observed to scale down for body text/headings
  in this section — confirm against screenshot; if visually tight on mobile scale H2/H3 down
  proportionally to hero title's ~68% mobile ratio only if screenshot shows overflow).
