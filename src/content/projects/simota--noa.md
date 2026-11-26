---
repo: "simota/Noa"
name: "Noa"
description: "GPU-accelerated terminal emulator for macOS and Linux, independently implemented in Rust (winit + wgpu): built for output floods, orchestrates coding agents in worker panes, and aims for observable Ghostty compatibility."
readmeQualityOk: true
url: "https://github.com/simota/Noa"
homepage: "https://simota.github.io/Noa/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["ansi", "ghostty", "gpu-accelerated", "kitty-graphics", "macos", "rust", "terminal-emulator", "vt100", "wgpu", "winit"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T15:33:36Z"
lastCommitAt: "2026-11-26T11:58:48Z"
lastReleaseAt: "2026-07-20T13:50:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["simota"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1941668646d8942106c4b72547857b1799c9cb736030539f64996371d50be3e/simota/Noa"
---

# Noa

Noa is a terminal emulator that reproduces the observable behavior of
[Ghostty](https://ghostty.org), written independently in Rust with `winit` and
`wgpu`. It is macOS-first (Apple Silicon, macOS 13 or later) and also runs on
Linux (X11 and Wayland).

It exists to keep Ghostty's behavior and configuration format while adding two
things: high sustained output throughput (`cat huge.log`, build logs, CI
streams), and worker panes that a coding agent (Claude Code, Codex, agy) in
another pane can spawn, prompt, and read through `Noa +ctl`.

```bash
# Apple Silicon Mac, from the Homebrew tap in this repository
brew tap simota/noa https://github.com/simota/Noa.git
brew install --cask simota/noa/noa

# Any supported platform, from source (Rust 1.92 or newer)
cargo run -p noa
```

Noa is under active development. Website: <https://simota.github.io/Noa/>

## Install

### macOS: Homebrew

The cask (`Casks/noa.rb`) requires an Apple Silicon Mac running macOS 13
(Ventura) or later. It downloads `Noa-<version>-macos-arm64.zip` from the
GitHub Release matching the cask version and installs `Noa.app`.
