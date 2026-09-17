# ArticleByline Specification

## Overview
- **Target file:** `src/components/journal-article-byline.tsx`
- **Interaction model:** static

## DOM Structure
Row (`justify-between`, `align-items: center`), max width 600px, centered:
- Left: avatar (60px circle) + column (name, role), gap 10px, row layout
- Right: 3 circular icon buttons (X logo, LinkedIn, Share), gap 10px, each 40×40
Below the row: a full-width 1px divider (border color).

## Computed Styles

### Row container
- width: 600px (mobile: 100% of 350px content column)
- display: flex, alignItems: center, justifyContent: space-between
- Stays a row at ALL breakpoints (does not stack on mobile)

### Avatar
- width/height: 60px, borderRadius: 60px (circle)
- src: `public/images/journal-author-lena.png` (downloaded from
  `framerusercontent.com/images/zPIpcv6oKzQAHaBM8Rgo6iVvX8`)

### Name / role text
- Name "Lena Hartmann": fontSize 12px, fontWeight 400, lineHeight 19.2px, color rgb(29,32,41) → `text-foreground`
- Role "Creative Director": fontSize 13px, fontWeight 400, lineHeight 18.2px, color rgb(73,80,93) → `text-muted-foreground`
- gap between avatar and text block: 10px

### Icon buttons
- 40×40px, borderRadius: 32px (effectively full circle), backgroundColor: rgb(242,244,247) → `bg-secondary`
- icon size 16×16, color rgb(29,32,41) → `text-foreground`
- gap between buttons: 10px

### Divider
- height: 1px, width: 100% of the 600px column
- backgroundColor: rgba(90, 98, 113, 0.5) → exactly matches existing `--border` token, use `border-t border-border`

## Icons (exact SVGs extracted)

X logo (new icon, distinct from the existing generic `XIcon` used in the footer):
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>
```

LinkedIn logo (new icon):
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
</svg>
```

Share icon (new icon — box with upward arrow):
```svg
<svg viewBox="0 0 256 256" fill="none">
  <path d="M180,104h20a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H76" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
  <polyline points="88 64 128 24 168 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
  <line x1="128" y1="24" x2="128" y2="136" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
</svg>
```

## Text Content (verbatim)
- Name: "Lena Hartmann"
- Role: "Creative Director"

## Responsive Behavior
- Row stays horizontal at all widths (390 / 900 / 1440 all confirmed `justify-content: space-between`, row direction).
- Column width shrinks with the shared 600px→350px content column pattern.
