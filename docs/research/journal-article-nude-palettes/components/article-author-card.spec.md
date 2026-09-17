# ArticleMeta + AuthorCard Specification

## Overview
- **Target file:** `src/components/journal-article-author-card.tsx` (also houses the meta/date
  row that precedes it, both live at the bottom of the content column)
- **Interaction model:** static

## Meta row (divider + date)
- A 1px full-width divider, backgroundColor rgba(90, 98, 113, 0.5) → `border-t border-border`
  (same divider token as the byline divider).
- Below it: date text "Jul 3, 2025" — fontSize 12px, fontWeight 400, letterSpacing 0.48px,
  color rgb(29, 32, 41) → `text-foreground`.
- This row sits after the article body, with the same 40–56px vertical rhythm as other body
  block transitions.

## Author bio card

### Container
- backgroundColor: rgb(242, 244, 247) → `bg-secondary`
- borderRadius: 12px
- padding: 46px desktop → 24px mobile (<810px)
- display: flex, flexDirection: column, gap: 36px

### Row 1 (avatar + name block)
- display: flex, flexDirection: row (desktop/tablet ≥810px) → column (mobile <810px), gap: 36px
- Avatar: 110×110px, borderRadius: 100px (circle), same source image as the byline avatar
  (`public/images/journal-author-lena.png`)
- Name column: gap 12px, containing:
  - "Author" eyebrow pill: same pill component as the hero eyebrow (bg rgb(242,244,247) —
    identical to the card background, so it reads as plain label text rather than a visible
    pill; still use the same padding/radius/font treatment: fontSize 12px, letterSpacing
    0.48px, color rgb(29,32,41))
  - Name (H2): "Lena Hartmann" — fontSize 39px, fontWeight 500, color rgb(29,32,41) →
    `text-foreground`

### Row 2 (bio paragraph)
- gap from row 1: 24px
- Bio text: fontSize 16px, fontWeight 400, lineHeight 20.8px, color rgb(29,32,41) →
  `text-foreground` (note: NOT muted-foreground here, unlike the main body copy)

## Text Content (verbatim)
- Date: "Jul 3, 2025"
- Eyebrow: "Author"
- Name: "Lena Hartmann"
- Bio: "Leads concept to craft with a material-first approach—turning textures, tone, and
  story into identities that feel calm, human, and unmistakably on-brand."

## Assets
- Avatar: `public/images/journal-author-lena.png` (same file reused from the byline —
  do not re-download, just reference the same path).

## Responsive Behavior
- **≥810px:** avatar + name/pill column sit side by side (row), card padding 46px.
- **<810px:** avatar + name/pill column stack (column), card padding 24px.
