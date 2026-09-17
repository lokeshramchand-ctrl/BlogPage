# Behaviors — Journal Article Page

## Scroll sweep
- Header: no shrink/appearance change observed on this page (same as `/journal` listing page
  — header is not sticky, no scroll-triggered restyle).
- Headings, byline, body paragraphs, author card, and the "Continue Reading" cards all carry
  Framer `data-framer-appear-id` / inline `transform: translateY(30px)` + `opacity` styles that
  animate to `translateY(0)` / `opacity: 1` as they enter the viewport (Framer's default
  `whileInView` scroll-reveal). Not a custom scroll-snap or parallax effect — a simple
  IntersectionObserver-driven fade-up, ~30px rise, standard ease, triggers once per element.
- No scroll-snap containers, no sticky sidebar, no smooth-scroll library detected
  (no `.lenis`/`.locomotive-scroll` classes present).

## Click sweep
- Nav links, "All Journals" link, and the 3 related-article cards are plain navigational
  links (no modal/tab behavior).
- The 3 icon buttons in the byline (X, LinkedIn, Share) are plain anchor/button targets with
  no visible in-page state change on click in this static clone context (share intent —
  implemented as inert buttons since there is no backend).

## Hover sweep
- Related-article cards (Continue Reading grid): identical hover treatment to the existing
  `JournalCard` component — image gets a `backdrop-blur` overlay with a centered white circular
  button (arrow-up-right icon) fading in over 300ms, and a small underline indicator below the
  title grows from a dot to full width over 300ms ease-out. Reuse that exact pattern.
- Byline icon buttons: circular buttons with `bg-secondary`; standard subtle hover (no unique
  animation captured beyond default button affordance).

## Responsive sweep
Breakpoints match the rest of the site (mobile <810px, tablet 810–1199px, desktop ≥1200px):

- **Hero title**: 63px/600/-2.52px letter-spacing at desktop → 43px/600/-1.72px at mobile
  (390px viewport).
- **Cover image**: full-bleed within the gutter; aspect ~2:1 at desktop (1362×681),
  ~5:3 at tablet (821×495 at 900px viewport), ~7:9 at mobile (350×450 at 390px viewport).
- **Content column**: fixed 600px centered at desktop/tablet-large, shrinks to
  `100% - 40px` gutter (350px at 390px viewport) on mobile.
- **Author bio card**: inner row (avatar + name/pill column) is `flex-row` at ≥810px,
  switches to `flex-col` (stacked) below 810px. Card padding: 46px desktop → 24px mobile.
- **Continue Reading grid**: 3 columns (438px each, gap 56px/24px) at ≥1200px, 2 columns at
  810–1199px, 1 column at <810px — identical breakpoints to the existing `JournalGrid`.
- **Byline row**: stays a single row (`justify-between`) at all widths; does not stack on
  mobile.
