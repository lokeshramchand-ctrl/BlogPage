# Page Topology — Journal Article: "The subtle art of nude palettes and their many nuances"

Source: https://orchid-template.framer.website/journal/the-subtle-art-of-nude-palettes-and-their-many-nuances
Destination route: `/journal/the-subtle-art-of-nude-palettes-and-their-many-nuances`

Same origin as the existing `/` clone (journal listing page). Reuses the existing shared
foundation: `Header`, `Footer`, `icons.tsx`, `globals.css` tokens, `orchid-logo.svg`.

## Sections, top to bottom

1. **Header** (shared, existing `src/components/header.tsx`) — no changes needed.
2. **Article Hero** — eyebrow pill ("6 min read"), H1 title, subtitle paragraph, full-width
   cover image (reuses existing `/images/journal-tote-bag.png`).
   - Note: a floating "All Templates / Remix for $0 / Made in Framer" badge appears over the
     top-right of the cover image on the live site. Confirmed via DOM inspection
     (`__framer-badge` class, links to framer.com) — this is Framer's own template-marketing
     overlay, NOT part of the site design. Excluded from the clone.
3. **Byline row** — author avatar (60px) + name + role (left), 3 circular icon buttons: X logo,
   LinkedIn logo, Share (right). Divider line below (full width, 1px, border color).
4. **Article body** — intro heading (H2) + rich text content: paragraphs, H2 section headings,
   H3 subheadings, bullet lists with bold lead-ins. Fixed/static content, real copy from the
   site (see ARTICLE_CONTENT.md below / component spec).
5. **Meta row** — divider line + publish date ("Jul 3, 2025"), right-aligned... actually
   left-aligned within the 600px content column, own row below the body.
6. **Author bio card** — light gray rounded card: large avatar (110px), "Author" eyebrow label,
   name (H2), bio paragraph. Reuses the same avatar image as the byline.
7. **Continue Reading ("Suggested") section** — pill label "Suggested", H2 "Continue Reading",
   subtitle, "All Journals" link (top-right), 3-card grid of related journal posts (date +
   title + image, same visual card language as the existing `JournalGrid`/`JournalCard`, but
   showing a publish date instead of a "min read" label).
8. **Footer** (shared, existing `src/components/footer.tsx`) — no changes needed.

## Layout

- Content column max width: 600px, centered, side gutters `w-[calc(100%-4.875rem)]` matching
  the rest of the site (same pattern as `JournalGrid`/`Header`/`Footer`).
- Cover image and "Continue Reading" grid use the wider `max-w-[95rem]` / full gutter width
  (1362px at 1440 viewport), same as `JournalGrid`.
- Breakpoints observed matching existing site convention: mobile (<810px), tablet
  (810–1199px), desktop (≥1200px).

## Interaction model

Static content page. No tabs, no click-driven state switches. Scroll-triggered fade-up
entrance animations on headings/cards (Framer default `whileInView`, translateY(30px)→0,
opacity 0→1). See BEHAVIORS.md.

Card hover states (Continue Reading grid) reuse the exact same hover treatment already built
in `JournalCard`: image dims/blurs, centered white circle with arrow-up-right icon fades in,
underline bar under the title grows to full width. No new extraction needed — verified via
screenshot that the visual language matches.
