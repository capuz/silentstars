---
repo: "mikewolfli/rust-widgets"
name: "rust-widgets"
description: "Pure Rust cross-platform native GUI architecture"
readmeQualityOk: true
url: "https://github.com/mikewolfli/rust-widgets"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T14:59:11Z"
lastCommitAt: "2026-09-11T08:15:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 32
maintainers: ["mikewolfli"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fd019c33933d33fb2af0715d8797c1626b1a06635c14bd189471b5bc2f2f790/mikewolfli/rust-widgets"
---

# rust_widgets — Pure Rust GUI Library

</p>

Cross-platform native GUI library in pure Rust. Hardware-adaptive rendering, widget library, touch/gesture support, i18n, and SVG output. Supports desktop, tablet, mobile, embedded, and minimal-profile **mini** targets.

All 167 widget kinds compile and are covered by the platform capability matrix
(`docs/plans/platform_capability_matrix.md`), which is generated from source and
gated for drift in CI.

  </a>
</p>

---

## Quick Start

```bash
# Desktop (default)
cargo check

# Mini (reduced std profile, minimal widget set)
cargo check --no-default-features --features mini

# Embedded
cargo check --no-default-features --features embedded

# Tests (lib suite; the CI command is `cargo test --all-features -q`)
cargo test --lib

# Cross-compile checks used by CI (no system libraries required)
cargo check --target wasm32-unknown-unknown --no-default-features --features wasm
cargo check --target x86_64-pc-windows-msvc --no-default-features \
  --features "windows desktop-runtime wgpu touch i18n controls-native controls-custom serde serde_json advanced-widgets quality-management"
```

> **Android:** build the JNI test APK with…
