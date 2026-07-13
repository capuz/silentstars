---
repo: "tschk/crepuscularity"
name: "crepuscularity"
description: "write react for gpui tui and embedded, write rust for web extensions, write both for websites, swiftui, mobile apps and more."
readmeQualityOk: true
url: "https://github.com/tschk/crepuscularity"
homepage: "http://crepuscularity.tsc.hk/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["gpui", "rust", "crepuscularity", "jetpack-compose", "mv3", "mv3-extension", "swiftui", "wasm"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-03-19T13:49:24Z"
lastCommitAt: "2026-07-13T06:39:56Z"
lastReleaseAt: "2026-07-13T00:32:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["undivisible"]
openGraphImageUrl: "https://opengraph.githubassets.com/700fcf08e9bd7e30079a7fdf04abb76be7004ba13b9fd229b8ab8d0e181fe98b/tschk/crepuscularity"
---

# Crepuscularity

> **Stability:** This project is **unstable** and in active development. APIs, CLI flags, and template semantics may change without a semver-major release until **1.0**. Pin exact dependency versions and expect occasional breakage.

Think React Native turned into a systems UI toolkit: one compact `.crepus` language can drive GPUI desktop apps, Ratatui terminal UIs, Chromium/Firefox extensions, web output, native mobile shells, embedded panels, and LVGL Pro. Crepuscularity also ships hot reload, runtime rendering, and a GPUI desktop shell with an embedded V8 bridge for native capabilities.

Write UI in a concise, indentation-based template DSL (`.crepus` files). Templates compile at build time via the `view!` macro or render at runtime with full hot-reload support. The same `.crepus` syntax drives native desktop (GPUI), terminal UIs (Ratatui), browser extensions (MV3), HTML output, and React/JSX — and is the foundation for native mobile backends targeting SwiftUI and Jetpack Compose.

Use [Aurorality](https://github.com/tschk/aurorality) for united SwiftUI macOS + iOS apps.

## Why Crepuscularity

- **GPUI component workflow with hot reload** — live template…
