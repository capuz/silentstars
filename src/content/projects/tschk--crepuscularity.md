---
repo: "tschk/crepuscularity"
name: "crepuscularity"
description: "write react for gpui tui and embedded, write rust for web extensions, write both for websites, swiftui, mobile apps and more."
url: "https://github.com/tschk/crepuscularity"
homepage: "http://crepuscularity.tsc.hk/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["gpui", "rust", "crepuscularity", "jetpack-compose", "mv3", "mv3-extension", "swiftui", "wasm"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-03-19T13:49:24Z"
lastCommitAt: "2026-06-25T01:37:05Z"
lastReleaseAt: "2026-06-13T03:14:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["undivisible", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af3a8e40bba6081248844843f571f7a006690b40ffdfa416a9629d7248ca6ff6/tschk/crepuscularity"
---

# Crepuscularity

> **Stability:** This project is **unstable** and in active development. APIs, CLI flags, and template semantics may change without a semver-major release until **1.0**. Pin exact dependency versions and expect occasional breakage.

Think React Native turned into a systems UI toolkit: one compact `.crepus` language can drive GPUI desktop apps, Ratatui terminal UIs, Chromium/Firefox extensions, web output, native mobile shells, embedded panels, and LVGL Pro. Crepuscularity also ships hot reload, runtime rendering, and a GPUI desktop shell with an embedded V8 bridge for native capabilities.

Write UI in a concise, indentation-based template DSL (`.crepus` files). Templates compile at build time via the `view!` macro or render at runtime with full hot-reload support. The same `.crepus` syntax drives native desktop (GPUI), terminal UIs (Ratatui), browser extensions (MV3), HTML output, and React/JSX — and is the foundation for native mobile backends targeting SwiftUI and Jetpack Compose.

Use [Aurorality](https://github.com/tschk/aurorality) for united SwiftUI macOS + iOS apps.

## Why Crepuscularity

- **GPUI component workflow with hot reload** — live template…
