---
repo: "bea4dev/ShojiWM"
name: "ShojiWM"
description: "The most customizable Wayland compositor with TypeScript(tsx)."
readmeQualityOk: true
url: "https://github.com/bea4dev/ShojiWM"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["smithay", "tsx", "typescript", "wayland", "wayland-compositor"]
stars: 484
forks: 20
openIssues: 4
closedIssues: 6
watchers: 4
contributors: 6
recentReleases: 1
createdAt: "2026-03-14T07:14:20Z"
lastCommitAt: "2026-07-22T06:11:08Z"
lastReleaseAt: "2026-06-20T11:21:32Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 23
maintainers: ["bea4dev", "sophietheopossum", "Everesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce3d3e810666533f33dd75a3c77ab19a290c4109504f77edc09bf62c0242915/bea4dev/ShojiWM"
---

<h2>ShojiWM</h2>
<p>A highly customizable Wayland compositor configured with TypeScript/TSX.</p>

</a>

<video src="https://github.com/user-attachments/assets/a6af022e-ff36-4fbd-9348-221d5e50d9b8" width="320" height="240" controls></video>
</div>

## Documents
 - [English](https://bea4dev.github.io/ShojiWM/)
 - [日本語](https://bea4dev.github.io/ShojiWM/ja/)

## Quick Start

Source installs are documented in the getting started guide. Experimental NixOS
support is also available:

```bash
nix develop
npm ci
cargo run --release -p shoji_wm -- --dev
```

For NixOS module installation, see the
[installation docs](https://bea4dev.github.io/ShojiWM/docs/getting-started/installation).

## Features

- [x] Window management
- [x] Animations
- [x] Screenshots and screen sharing via xdg-desktop-portal-shojiwm
- [x] XWayland support via [xwayland-satellite](https://github.com/Supreeeme/xwayland-satellite)
- [x] Custom shaders
- [x] Layer shell support
- [x] Multi-monitor support
- [x] Intel, AMD, and NVIDIA GPU support

## Why not Niri or Hyprland?

Niri and Hyprland are, at their core, software that bundles a window manager and a compositor together.

ShojiWM is different. It provides only the…
