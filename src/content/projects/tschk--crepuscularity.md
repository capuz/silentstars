---
repo: "tschk/crepuscularity"
name: "crepuscularity"
description: "write react for gpui tui and embedded, write rust for web extensions, write both for websites, swiftui, mobile apps and more."
readmeQualityOk: true
url: "https://github.com/tschk/crepuscularity"
homepage: "http://crepuscularity.tsc.hk/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["gpui", "rust", "crepuscularity", "jetpack-compose", "mv3", "mv3-extension", "swiftui", "wasm", "dart", "flutter"]
stars: 46
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-19T13:49:24Z"
lastCommitAt: "2026-10-25T02:48:09Z"
lastReleaseAt: "2026-07-13T00:32:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 43
maintainers: ["undivisible"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b56a5c055a1f80e01e47ac363f1de3eddf701919857d30b868bb8f665eb98f/tschk/crepuscularity"
fundingLinks: ["GITHUB:https://github.com/undivisible"]
---

# Crepuscularity

> **Stability:** This project is **unstable** and in active development. APIs, CLI flags, and template semantics may change without a semver-major release until **1.0**. Pin exact dependency versions and expect occasional breakage.

[deepwiki](https://deepwiki.com/tschk/crepuscularity)

Think React Native turned into a systems UI toolkit: one compact `.crepus` language can drive GPUI desktop apps, Ratatui terminal UIs, Chromium/Firefox extensions, web output, native mobile shells, embedded panels, and LVGL Pro.

## 60-Second Quick Start

```bash
# 1. Install the CLI (default features = full: dev/preview/tui/aurora)
cargo install --path crates/crepuscularity-cli

# 2. If `crepus` is not found, Cargo installed it under ~/.cargo/bin — add it to PATH.
#    (Rustup normally prepends this for login shells; some terminals omit it.)
export PATH="$HOME/.cargo/bin:$PATH"

# 3. Scaffold and run a GPUI desktop app
crepus init gpui hello && cd hello && cargo run
```

On macOS, GPUI needs the Xcode SDK path — `export` it once or prefix the run:

```bash
SDKROOT=$(xcrun --show-sdk-path) cargo run
```

Keep going from the same install:

```bash
# Browser extension (MV3)
crepus…
