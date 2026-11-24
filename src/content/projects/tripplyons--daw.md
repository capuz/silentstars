---
repo: "tripplyons/daw"
name: "daw"
description: "A tiling DAW in Rust with Rune that hosts VST3 and Audio Unit plugins"
readmeQualityOk: true
url: "https://github.com/tripplyons/daw"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-27T18:05:38Z"
lastCommitAt: "2026-11-24T14:09:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 37
maintainers: ["tripplyons"]
openGraphImageUrl: "https://opengraph.githubassets.com/509780a57ed5e4b0e60ce748c039dd15209011ab81ec472631610c4f1d778dba/tripplyons/daw"
---

# DAW

A digital audio workstation (DAW) written in Rust with [Rune](https://github.com/anomalyco/rune). It hosts VST3 and Audio Unit plugins, arranges its panels as tiles the way an i3 or sway window manager does, and has FL Studio style patterns, a playlist, a mixer, and an automation editor.

It runs on macOS and Linux. Audio Units are macOS only. On Linux, plugin editor windows use X11, or XWayland on Wayland desktops.

## Requirements

- Rust 1.88 or newer (edition 2024), installed with [rustup](https://rustup.rs)
- macOS: Xcode Command Line Tools (`xcode-select --install`)
- Linux: the ALSA, X11, xkbcommon, and Wayland development packages. On Debian or Ubuntu:

```sh
sudo apt-get install build-essential pkg-config libclang-dev libasound2-dev libx11-dev libxkbcommon-dev libwayland-dev
```

On Linux, audio goes through ALSA, which PipeWire and PulseAudio also accept. File dialogs use the XDG desktop portal, or `zenity` when no portal is running. Without an output device the app still edits projects and exports WAV files.

## Run

```sh
git clone https://github.com/tripplyons/daw.git
cd daw
cargo run --release
```
