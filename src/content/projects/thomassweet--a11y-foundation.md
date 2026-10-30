---
repo: "ThomasSweet/a11y-foundation"
name: "a11y-foundation"
description: "An accessibility-first styling playground — how much of accessibility the modern web platform handles natively, with little to no JavaScript. WCAG rules you can break, cutting-edge CSS showcases, tokens and cascade layers."
readmeQualityOk: true
url: "https://github.com/ThomasSweet/a11y-foundation"
homepage: "https://accessible-by-default.dev"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [47, 22]
topics: ["a11y", "accessibility", "css", "design-tokens", "modern-css", "progressive-enhancement", "vue", "wcag"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T22:03:33Z"
lastCommitAt: "2026-10-30T10:23:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["ThomasSweet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1267808626/621e3819-94fe-415e-a51e-aa0508898af8"
discussionCount: 1
---

# Accessible by default

How much of accessibility does the modern web platform handle **natively** —
with little to no JavaScript? **Most of it.** This site is that claim, argued
in four parts and running live: what **the standard** (WCAG) asks for —
eleven criteria you can break and restore — **the craft** of meeting it with
modern CSS and HTML, the modern **CSS** worth knowing sorted by how safely it
ships today, and **the proof** that the claim holds up.

Underneath it is an accessibility-first styling foundation — SCSS mixins,
design tokens, and a cascade-layer architecture — where components adapt to
**user preferences** (reduced motion, high contrast, forced colors, dark mode,
reduced transparency) and **input capabilities** (hover, touch) by default,
with the cascade doing the work instead of `!important`.

The site wears a technical-drawing look: an overview hub plus four chapter
pages. Its previous single-page design is preserved under the
`design-classic` git tag.

(`prefers-color-scheme`, as reported by your browser — usually your OS
setting, unless the browser overrides it), and the banner's strike only
animates without a reduced-motion preference — this README…
