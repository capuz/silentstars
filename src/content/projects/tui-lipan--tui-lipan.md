---
repo: "tui-lipan/tui-lipan"
name: "tui-lipan"
description: "Opinionated, component-based TUI framework for Rust - declarative components, layout engine, focus, overlays, theming, and 65+ widgets on top of ratatui."
readmeQualityOk: true
url: "https://github.com/tui-lipan/tui-lipan"
homepage: "https://tui-lipan.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["crossterm", "framework", "ratatui", "rust", "terminal", "tui", "ui-framework"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-04T20:43:58Z"
lastCommitAt: "2026-11-07T16:10:57Z"
lastReleaseAt: "2026-09-04T14:53:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["Razuer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8e46f2a9f00bfadc709d1f251c16c5d23c37e7cb8bbdd10e26f9708f67ee819/tui-lipan/tui-lipan"
fundingLinks: ["GITHUB:https://github.com/Razuer"]
discussionCount: 0
---

# tui-lipan

**Opinionated, component-based TUI framework for Rust.**

Write components and messages like in Elm or React. tui-lipan handles layout,
focus, mouse, overlays, animation, and rendering, so a polished terminal app
does not have to be a fight.

[Website](https://tui-lipan.dev) ·
[Documentation](https://docs.tui-lipan.dev) ·
[Examples](https://github.com/tui-lipan/tui-lipan/blob/HEAD/examples/) ·
[Releases](https://github.com/tui-lipan/tui-lipan/releases)

  recorded headlessly by tui-lipan itself (<a href="docs/testing.md#terminal-recordings"><code>TUI_LIPAN_RECORD</code></a>).</sub>

---

## What you get

- **Components** with typed `Message`, `Properties`, and `State`; `view()` returns
  a declarative `Element` tree and the runtime reconciles it.
- **Flexbox-inspired layout**: stacks, grids, frames with titled borders, splitters,
  scroll views. lazygit-style panel chrome out of the box.
- **Mouse and focus everywhere**: precise hit-testing, hover, drag, focus scopes,
  tab order, and key bubbling from the focused widget up to the root.
- **Overlays**: modals, popovers, context menus, toasts, and command palettes with
  focus capture and dismissal policies.
- **Async…
