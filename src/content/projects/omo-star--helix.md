---
repo: "Omo-star/Helix"
name: "Helix"
description: "The best web browser!"
url: "https://github.com/Omo-star/Helix"
language: "C"
languages: ["C", "Makefile"]
languagePcts: [39, 36]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-18T15:58:53Z"
lastCommitAt: "2026-06-28T01:36:14Z"
lastReleaseAt: "2026-06-20T20:46:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["overcharged-coder", "Omo-star"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0718c4ac85661c12623df11243b09fae514203428b17e39b513027a1afe2997/Omo-star/Helix"
---

# Helix

**Helix** is a web browser written from scratch in C++17, with its own HTML parser, DOM,
CSS engine, JavaScript engine, layout engine, and renderer. No Chromium, no WebView2,
no CEF, no QtWebEngine. Everything that makes it a browser is hand-built.

It runs on **Windows, macOS, and Linux** from a single shared engine, with a thin
native shell on each platform.

## What's built from scratch

- **HTML**: tokenizer with 170+ named entities, tree-construction parser with implicit
  element creation, auto-close rules, foster parenting, scope-aware end tags, and
  formatting element adoption (864 lines)
- **CSS**: 90+ properties, cascade with combinators and attribute selectors, custom
  properties (`var()`), media queries, `calc()`/`clamp()`/`min()`/`max()`, viewport
  units, `box-sizing`, `object-fit`, flexbox (wrap/shrink/basis/align-self), grid,
  tables, floats, positioning with percentage offsets, `text-align` (incl. justify),
  `text-indent`, `text-decoration`, `vertical-align`, `linear-gradient()`,
  `box-shadow`, `transform` (translate/scale/rotate), `overflow: auto/scroll`,
  `:hover`/`:nth-child()`/`:not()`/`~` selectors, and more
- **JavaScript**: lexer, parser,…
