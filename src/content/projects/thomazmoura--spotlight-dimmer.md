---
repo: "thomazmoura/spotlight-dimmer"
name: "spotlight-dimmer"
description: "A simple program to dim everything but the current active screen"
readmeQualityOk: true
url: "https://github.com/thomazmoura/spotlight-dimmer"
language: "C#"
languages: ["C#"]
languagePcts: [65]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-02-26T21:39:56Z"
lastCommitAt: "2026-07-12T06:18:19Z"
lastReleaseAt: "2025-09-30T13:55:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 50
maintainers: ["thomazmoura"]
openGraphImageUrl: "https://opengraph.githubassets.com/434747d62872aa8e50246f61b79dedf43c7e8164ef6ef1a16d2ae19b9a7b8392/thomazmoura/spotlight-dimmer"
---

# SpotlightDimmer

A utility that creates semi-transparent overlays to dim inactive displays or regions, creating a "spotlight" effect on the active window. Available for **Windows** (built with .NET 10 and native Windows APIs) and **Linux/Wayland** (a shared Rust daemon with adapters for GNOME Shell and KDE Plasma 6).

## Features

✅ **Multi-monitor support** - Automatically detects all connected monitors, including hot-plug
✅ **Three dimming modes** - FullScreen, Partial, and PartialWithActive on all platforms
✅ **Configurable overlays** - Customize colors and opacity for both inactive and active regions independently
✅ **Click-through overlays** - Overlays don't capture mouse input
✅ **100% event-driven** - Uses window-manager events instead of polling for zero CPU usage when idle
✅ **No admin privileges** - Runs as a regular user process
✅ **Hot-reloadable configuration** - Changes apply instantly without restart
✅ **Toggle shortcut** - Pause/resume all dimming with a keyboard shortcut
✅ **tmux pane spotlight (Linux)** - Optionally follow the focused tmux pane inside WezTerm instead of the whole terminal window

Windows-specific:

✅ **Multiple rendering backends** - Choose…
