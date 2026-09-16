---
repo: "shreyanth-sureshkrishnaa/pyroclear"
name: "pyroclear"
description: "Clear your terminal with a crackling wall of ASCII flames."
readmeQualityOk: true
url: "https://github.com/shreyanth-sureshkrishnaa/pyroclear"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cargo", "cli", "customization", "fun", "linux", "ricing", "rust", "terminal", "unix", "bash"]
stars: 206
forks: 13
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 10
recentReleases: 2
createdAt: "2026-08-03T06:38:36Z"
lastCommitAt: "2026-09-16T08:47:48Z"
lastReleaseAt: "2026-08-09T17:52:36Z"
status: "newborn"
tags: []
healthScore: 90
undervaluedScore: 28
maintainers: ["shreyanth-sureshkrishnaa", "asitos", "felixgamer27"]
openGraphImageUrl: "https://opengraph.githubassets.com/796e4c57ca2211fc1757817a8272f823a3149ebfe1b33f88929b29742c16dbee/shreyanth-sureshkrishnaa/pyroclear"
---

# pyroclear

A terminal `clear` replacement that burns your screen down before wiping it. 

Written in modern Rust. Zero runtime dependencies beyond standard `libc` (Unix) or native Win32 API calls (Windows). Highly optimized, flicker-free, and customizable!

---

## Features

- **Platform Native**: Native Unix support (via direct `ioctl` syscalls and `termios` configuration) and native Windows support (via hand-rolled Win32 console API bindings for raw mode, virtual terminal processing, and console control handlers). Zero third-party runtime dependencies.
- **Transparent Background**: Empty cells inherit your terminal's default theme/opacity instead of drawing solid black rectangles.
- **Interactive TUIs**:
  - **Color Picker (`--pick`)**: Browse, search, filter, and preview palettes in real-time.
  - **Settings Manager (`--settings`)**: Adjust FPS, wind/drift, and flame height in raw mode.
  - **Custom Palette Manager (`--custom`)**: Build, name, delete, and save your own hex gradients.
- **Persistent Configuration**: Settings and palettes are automatically saved to `~/.config/pyroclear/config.toml` (`%USERPROFILE%\.config\pyroclear\config.toml` on Windows).
- **Signal-safe**:…
