# ArticleHero Specification

## Overview
- **Target file:** `src/components/journal-article-hero.tsx`
- **Screenshot:** `docs/design-references/orchid-template.framer.website-journal/article-nude-palettes/full-desktop.png` (top section)
- **Interaction model:** static (scroll fade-up entrance only, see BEHAVIORS.md)

## DOM Structure
Section > centered column (gap 18px) containing: eyebrow pill, title wrap (H1), subtitle wrap (P).
Below that, full-width cover image container.

## Computed Styles

### Eyebrow pill
- display: flex, alignItems: center, gap: 10px
- padding: 3px 12px
- backgroundColor: rgb(242, 244, 247) → use `bg-secondary`
- borderRadius: 100px (full pill)
- text: fontSize 12px, fontWeight 400, lineHeight 19.2px, letterSpacing 0.48px, color rgb(29,32,41) → `text-foreground`

### H1 title
- fontSize: 63px, fontWeight: 600, lineHeight: 69.3px, letterSpacing: -2.52px
- color: rgb(29, 32, 41) → `text-foreground`
- textAlign: center
- container maxWidth: 420px (text wraps to 3 lines at desktop)
- Mobile (390px viewport): fontSize 43px, lineHeight 47.3px, letterSpacing -1.72px

### Subtitle
- fontSize: 20px, fontWeight: 400, lineHeight: 26px, letterSpacing: normal
- color: rgb(73, 80, 93) → `text-muted-foreground`
- textAlign: center

### Titles block gap
- gap: 18px (column) between pill+title group and title+subtitle

### Cover image container
- borderRadius: 12px, overflow hidden
- Desktop (1440px viewport): 1362×681 (aspect ~2:1)
- Tablet (900px viewport): 821×495 (aspect ~1.66:1, ~5:3)
- Mobile (390px viewport): 350×450 (aspect ~0.778:1, ~7:9)
- objectFit: cover, objectPosition: 50% 50%
- Use `aspect-[7/9] min-[810px]:aspect-[5/3] min-[1200px]:aspect-[2/1]`

### IMPORTANT — exclude Framer badge
The live site shows a floating widget over the top-right of the cover image ("All Templates /
Remix for $0 / Made in Framer"). Confirmed via DOM: `class="... __framer-badge"`,
`href="https://www.framer.com"`. This is Framer's own template-marketing overlay, not part of
the site design. DO NOT include it.

## Assets
- Cover image: reuse existing `public/images/journal-tote-bag.png` (same source URL as the
  `JournalGrid` card for this post: `framerusercontent.com/images/LNZ9mWHcam6iqJkXYU6mxENnzw8`).
- Alt text (verbatim): "Minimal beige canvas tote bag with sturdy handles and a small leather
  tag on a light gray studio background."

## Text Content (verbatim)
- Eyebrow: "6 min read"
- Title: "The subtle art of nude palettes and textures"
- Subtitle: "Why soft neutrals are the loudest statement in modern design"

## Responsive Behavior
- **Desktop (≥1200px):** title 63px, cover image 2:1, content column width 900px header /
  420px text wrap width.
- **Tablet (810–1199px):** cover image ~5:3.
- **Mobile (<810px):** title 43px, cover image ~7:9, side gutters shrink to 20px each.
