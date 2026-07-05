---
repo: "tschk/crepuscularity"
name: "crepuscularity"
description: "write react for gpui tui and embedded, write rust for web extensions, write both for websites, swiftui, mobile apps and more."
readmeQualityOk: true
url: "https://github.com/tschk/crepuscularity"
homepage: "http://crepuscularity.tsc.hk/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["gpui", "rust", "crepuscularity", "jetpack-compose", "mv3", "mv3-extension", "swiftui", "wasm"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-03-19T13:49:24Z"
lastCommitAt: "2026-07-05T06:33:11Z"
lastReleaseAt: "2026-06-13T03:14:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["undivisible"]
openGraphImageUrl: "https://opengraph.githubassets.com/35a4bc5e11d4dab9c054c2f198d258db9dde38e76c77310a908e03aadb356dbd/tschk/crepuscularity"
---

# Crepuscularity

> **Stability:** This project is **unstable** and in active development. APIs, CLI flags, and template semantics may change without a semver-major release until **1.0**. Pin exact dependency versions and expect occasional breakage.

Think React Native turned into a systems UI toolkit: one compact `.crepus` language can drive GPUI desktop apps, Ratatui terminal UIs, Chromium/Firefox extensions, web output, native mobile shells, embedded panels, and LVGL Pro. Crepuscularity also ships hot reload, runtime rendering, and a GPUI desktop shell with an embedded V8 bridge for native capabilities.

Write UI in a concise, indentation-based template DSL (`.crepus` files). Templates compile at build time via the `view!` macro or render at runtime with full hot-reload support. The same `.crepus` syntax drives native desktop (GPUI), terminal UIs (Ratatui), browser extensions (MV3), HTML output, and React/JSX — and is the foundation for native mobile backends targeting SwiftUI and Jetpack Compose.

Use [Aurorality](https://github.com/tschk/aurorality) for united SwiftUI macOS + iOS apps.

## Why Crepuscularity

- **GPUI component workflow with hot reload** — live template…
