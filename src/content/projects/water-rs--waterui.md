---
repo: "water-rs/waterui"
name: "waterui"
description: "Bring your app to all platform, learning once and applying anywhere"
readmeQualityOk: true
url: "https://github.com/water-rs/waterui"
homepage: "https://waterui.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 487
forks: 14
openIssues: 64
closedIssues: 30
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2023-11-21T10:03:57Z"
lastCommitAt: "2026-08-09T04:47:35Z"
lastReleaseAt: "2025-12-14T08:05:26Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 84
undervaluedScore: 32
maintainers: ["lexoliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e45741705af9d2846f4137063974b1cee579d497d1501686e3cec93067fdbb6/water-rs/waterui"
discussionCount: 1
---

<h1>WaterUI</h1>
  <p><strong>Native-first, fine-grained reactive UI for Rust.</strong></p>
  <p>
  </p>
</div>

`WaterUI` lets you describe an application once in Rust and realize it through the backend that fits each platform. It bridges semantic components to `UIKit`/`AppKit`, Android View, and GTK4 where suitable native primitives exist, and provides purpose-built shared renderers for platforms or components that need a portable realization.

The framework is built around four ideas:

- **Native first.** A button, text field, list, or other semantic component uses the platform's canonical UI model when the platform provides one.
- **Precise reactivity.** `Binding`, `Computed`, and signal-aware component inputs update the affected value or semantic object without rebuilding an unrelated subtree.
- **One development tool.** The `water` CLI creates projects, manages platform support code, runs applications, inspects toolchains, and renders previews.
- **Portable rendering where it belongs.** Hydrolysis is the GPU renderer for high-end and web targets; Dew is the dirty-area CPU renderer for constrained devices.

## Quick start

Install the CLI:

```bash
cargo install waterui-cli…
