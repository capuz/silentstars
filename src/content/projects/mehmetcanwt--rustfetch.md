---
repo: "MehmetCanWT/rustfetch"
name: "rustfetch"
description: "Blazing-fast (~4ms), memory-safe Linux system information fetch tool written in pure Rust"
readmeQualityOk: true
url: "https://github.com/MehmetCanWT/rustfetch"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-30T19:53:42Z"
lastCommitAt: "2026-10-28T09:56:48Z"
lastReleaseAt: "2026-10-27T14:15:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["MehmetCanWT"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc0a953d254f896c9e12f91c7ff2b365a5fd50db77bc0d4f57892b2dfad3c9ea/MehmetCanWT/rustfetch"
---

# 🦀 RustFetch (`rfetch`)

**Blazing-fast (~4ms), memory-safe, zero-fork Linux system fetch & hardware telemetry tool written in pure Rust.**

---

## ✨ Why RustFetch?

**RustFetch** (`rustfetch` / `rfetch`) is built from the ground up in Rust to replace slow shell-script fetchers and fragile C configs with a single static-friendly binary that starts in **~4 milliseconds**:

- ⚡ **Zero-Fork Kernel Telemetry (`~4ms`)**: Reads hardware topology directly from `/proc`, `/sys/bus/pci/devices`, `/sys/class/drm` (pure-Rust EDID binary parser), `/sys/class/hwmon`, `/sys/class/power_supply`, and `statx`/`statvfs` syscalls.
- 🖼️ **True Terminal Graphics (`Kitty`, `Sixel`, `Halfblock`)**: Renders crisp PNG/JPG/WebP/GIF artwork with automatic dominant-color & 16-color palette extraction (`.color` sidecar cache), aspect-ratio fitting, and atomic **Kitty Synchronized Output (`?2026h`)** on window resize.
- 🧊 **Real-Time 3D Spinning ASCII Relief (`--3d`)**: Extrudes any built-in distro logo or custom ASCII file into a 3D mesh with Blinn-Phong lighting and sub-cell `ascii`, `blocks`, `braille`, or `sextants` rasterization. Press **any key** or run any command and it **instantly falls back to…
