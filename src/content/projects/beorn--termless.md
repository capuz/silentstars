---
repo: "beorn/termless"
name: "termless"
description: "Like Playwright, but for terminal apps — headless testing across xterm.js, Ghostty, Alacritty, WezTerm, and more"
readmeQualityOk: true
url: "https://github.com/beorn/termless"
homepage: "https://termless.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["headless", "terminal", "testing", "typescript", "ansi", "cross-terminal", "ghostty", "headless-testing", "tui", "vitest"]
stars: 36
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T07:40:03Z"
lastCommitAt: "2026-11-06T12:49:13Z"
lastReleaseAt: "2026-07-27T21:49:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b4bd3d4c226e959088e8950cd93df5912a3d0ab3b3e36f8b1901f8651baba540/beorn/termless"
---

# Termless

Headless terminal testing library. Like Playwright, but for terminal apps.

Terminal apps are hard to test because the terminal is a black box — you can see text on screen but can't programmatically inspect colors, cursor position, scrollback history, terminal modes, or cell attributes. Termless opens up the entire terminal buffer for structured testing, and runs the same tests against multiple terminal emulators to catch cross-terminal compatibility issues.

Two audiences use termless. Most people are here to **test a TUI app** — that's the Playwright-for-terminals pitch above, and it stays the headline. A second, growing audience builds **terminal emulators** and uses termless's differential conformance corpus to grade a new backend against the field; see [Conformance corpus](#conformance-corpus).

Built alongside [silvery](https://silvery.dev), a React TUI framework, but works with any terminal app.

- **Full terminal internals** -- access scrollback, cursor state, cell colors, terminal modes, alt screen, resize behavior — everything that's invisible to string matching
- **Cross-terminal conformance** -- run the same tests against 12 backends — xterm.js, Ghostty,…
