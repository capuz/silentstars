---
repo: "puffball1567/clay-board-style-system"
name: "clay-board-style-system"
description: "A CSS-inspired primitive engine for native GUI toolkits"
readmeQualityOk: true
url: "https://github.com/puffball1567/clay-board-style-system"
language: "Nim"
languages: ["Nim"]
languagePcts: [81]
topics: ["c-abi", "css-like", "style-system", "cross-platform", "declarative-ui", "gui", "native-ui", "nim", "sdl3", "nimble"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T14:16:03Z"
lastCommitAt: "2026-09-19T01:35:23Z"
lastReleaseAt: "2026-08-01T08:27:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["puffball1567"]
openGraphImageUrl: "https://opengraph.githubassets.com/0613583369918e9210f9fa4b5aaeeefa872d227eaaa08aa7c58514f300a3444b/puffball1567/clay-board-style-system"
---

# Clay Board Style System

**The flexibility of CSS. Native performance. A shared foundation for GUI
development.**

Clay Board Style System is a CSS-inspired primitive engine for building native
GUI toolkits. It gives GUI-library authors one styleable foundation for layout,
text, input, state, accessibility, navigation, and retained Canvas drawing,
instead of making every toolkit rebuild those systems. CBSS runs without a DOM
or WebView, updates only affected work, uses SDL3 for portable native windows
and rendering, and exposes a versioned C ABI for languages beyond Nim.

## Why CBSS

- **Familiar to frontend engineers.** Typed Nim APIs use CSS-inspired
  properties, units, box layout, state styling, colors, and transforms.
- **A foundation, not a visual identity.** `Box`, `Text`, `Image`, Canvas, and
  replaceable reference controls let libraries define their own components and
  design systems.
- **Retained and event-driven.** CBSS does not replay every component after an
  event. Dirty domains limit updates, and idle applications block on SDL events.
- **Native behavior in the same model.** Focus, keyboard and pointer events,
  IME, clipboard, scrolling, popups, accessibility…
