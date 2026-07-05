---
repo: "ThomasSweet/a11y-foundation"
name: "a11y-foundation"
description: "An accessibility-first styling playground — how much of accessibility the modern web platform handles natively, with little to no JavaScript. WCAG rules you can break, cutting-edge CSS showcases, tokens and cascade layers."
readmeQualityOk: true
url: "https://github.com/ThomasSweet/a11y-foundation"
homepage: "https://accessible-by-default.dev"
language: "Vue"
languages: ["Vue"]
languagePcts: [56]
topics: ["a11y", "accessibility", "css", "design-tokens", "modern-css", "progressive-enhancement", "vue", "wcag"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T22:03:33Z"
lastCommitAt: "2026-07-05T20:55:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["ThomasSweet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1267808626/f6ac6cc3-e1ec-4afc-94ea-706894904cec"
discussionCount: 1
---

# Accessible by default

**Live site: [accessible-by-default.dev](https://accessible-by-default.dev/)**

An accessibility-first styling foundation — SCSS mixins, design tokens, and
a cascade-layer architecture — demonstrated in a small Vue 3 playground.
(Repository and package id: `a11y-foundation`.)

The goal: components that adapt to **user preferences** (reduced motion,
high contrast, forced colors, dark mode, reduced transparency) and **input
capabilities** (hover, touch) by default, with the cascade doing the work
instead of `!important`.

## What's inside

- **Cascade layers** (`@layer reset, tokens, base, layout, components,
  utilities, preferences`) — user preferences always win over component
  styles, without specificity battles. The one rule: no unlayered CSS.
- **Design tokens** with `color-scheme` + `light-dark()` — each color
  declared once, OS-preference and manual theming from the same tokens,
  native form controls included.
- **Preference mixins** — `reduced-motion()`, `reduced-transparency()`,
  `high-contrast()`, `forced-colors()`, `dark-mode()`.
- **Interaction mixins** — `can-hover()`, `touch-primary()` for capability
  detection (enhancement only, never…
