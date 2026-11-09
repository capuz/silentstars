---
repo: "mikewolfli/rust-widgets"
name: "rust-widgets"
description: "Pure Rust cross-platform native GUI architecture"
readmeQualityOk: true
url: "https://github.com/mikewolfli/rust-widgets"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T14:59:11Z"
lastCommitAt: "2026-11-09T04:36:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 45
maintainers: ["mikewolfli"]
openGraphImageUrl: "https://opengraph.githubassets.com/d02bfdab5f558ef6a0a289c08adc8861bf919e498f0c5ff5e3a664473e4249f4/mikewolfli/rust-widgets"
---

# rust_widgets — Pure Rust GUI Library

`rust_widgets` is a cross-platform GUI library written in pure Rust. It paints **every control
itself** — there is no `NSButton`, no `gtk_button_new`, no `android.widget.Button`. The OS backend
keeps only what only the OS can provide: a window, the event loop, input translation, IME,
clipboard, file dialogs and DPI. Everything above that is the same code on every target, so the
same widget tree looks and behaves the same everywhere.

It renders into a live window, a PNG, or SVG, and the `mini` / `embedded` profiles run with no OS
services at all.

## Highlights

- **231 widget kinds / 240 core controls** — inputs, tables, trees, docks, dialogs, media, charts,
  editors and more, with one implementation shared by every platform. The optional suites add
  **39 more controls in 7 groups**, installed into the same `WidgetFactory`.
- **Cascading menus and real session state** — dropdowns, menu buttons and menus open up to four
  nested submenu levels, and controls opt in to `SaveState` so a host can restore their user state
  with explicit, restart-stable keys.
- **Reproducible output** — SVG and pixel snapshots are committed per control and per…
