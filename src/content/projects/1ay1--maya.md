---
repo: "1ay1/maya"
name: "maya"
description: "C++26 TUI framework with type-state compile-time DSL, Yoga flexbox, SIMD cell-diff renderer, and Elm-style runtime"
readmeQualityOk: true
url: "https://github.com/1ay1/maya"
homepage: "https://1ay1.github.io/maya/"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["compile-time", "cpp", "cpp26", "dsl", "flexbox", "simd", "terminal", "terminal-ui", "tui", "ui-framework"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-03T13:11:56Z"
lastCommitAt: "2026-10-12T11:15:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["1ay1"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba09cd35f8f2b44a43e9f5a731aabc220d61895d17f52d4d88dec0e3be20d463/1ay1/maya"
---

C++26 terminal UI: a type-state compile-time DSL, Yoga flexbox,<br>
  a SIMD cell-diff renderer, and <a href="third_party/jaal">jaal</a> as its runtime.

---

- **Compile-time UI trees.** `t<"Hello"> | Bold | border_<Round>` is type-state safe — try to set border color without a border and it's a compile error, not a runtime no-op.
- **SIMD frame diff.** AVX2 / SSE4.2 / NEON. 64-bit packed cells, O(1) compare. Only changed cells write to the terminal.
- **Real flexbox.** Yoga layout — `grow()`, `gap()`, `align()`, `justify()`. No `printf` column-counting.
- **row / col.** The GTK box model with responsiveness built in: `row({cpu, mem, net, disk})` puts cells side by side sharing the width — and wraps, then stacks, by itself as the terminal narrows. `col()` stacks cells that fill the width. Add `sidebar(stats, table, 42)` and a whole three-shape dashboard is two lines — no breakpoints, no spans, zero width arithmetic. See [Responsive Layouts](https://github.com/1ay1/maya/blob/HEAD/docs/15-responsive.md).
- **Responsive by measurement.** `fit_row` sheds low-priority items when narrow, `fit_col` sheds low-priority panels when SHORT, `pick` shows the richest alternative that actually…
