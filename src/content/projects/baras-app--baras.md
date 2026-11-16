---
repo: "baras-app/baras"
name: "baras"
description: "A fast and modern combat parser for Star Wars: The Old Republic written in Rust"
readmeQualityOk: true
url: "https://github.com/baras-app/baras"
homepage: "https://baras-app.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 23
forks: 11
openIssues: 1
closedIssues: 20
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-12-25T01:00:36Z"
lastCommitAt: "2026-11-16T11:56:46Z"
lastReleaseAt: "2026-01-21T07:46:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 65
maintainers: ["github-actions[bot]", "sudohedoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f9a12b413f0bbaca52fbe1e1f34cd91a5ea1be85ed74157b1014c47d9853889/baras-app/baras"
---

# BARAS

The **Battle Analysis and Raid Assessment System** (BARAS) is the ultimate companion for SWTOR endgame content.

> **Questions, bugs, or feedback?** Join the [Discord server](https://discord.gg/zmtkYkhSM4) — it's the fastest way to get help.

## Installation

See the [installation guide](https://baras-app.github.io/getting-started/installation/) on the official website to install a release version and view documentation and features.

## Platform Support

| Platform      | Status                   |
| ------------- | ------------------------ |
| Windows 10/11 | ✔️ Native                |
| Linux         | ✔️ X11, Wayland Native   |
| MacOS         | 🟡 Native (experimental) |

## Building from Source

### Prerequisites

- [Rust](https://rustup.rs/) (stable toolchain)
- `wasm32-unknown-unknown` target: `rustup target add wasm32-unknown-unknown`
- [Dioxus CLI](https://dioxuslabs.com/): `cargo install dioxus-cli`
- [Tauri CLI](https://v2.tauri.app/): `cargo install tauri-cli`
- [just](https://github.com/casey/just) command runner (optional, for convenience commands)

#### Linux Dependencies

```
sudo apt-get install -y \
  libwebkit2gtk-4.1-dev \…
