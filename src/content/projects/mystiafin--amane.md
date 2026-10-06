---
repo: "MystiaFin/amane"
name: "amane"
description: "A library for building Wayland desktop shell purely in Rust"
readmeQualityOk: true
url: "https://github.com/MystiaFin/amane"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 103
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-10-04T02:57:26Z"
lastCommitAt: "2026-10-06T10:41:59Z"
lastReleaseAt: "2026-10-05T10:36:00Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 32
maintainers: ["MystiaFin"]
openGraphImageUrl: "https://opengraph.githubassets.com/457eb8d182958e786e6c78048fc8c630bf9deeab8a5168d5a10ceb197c084725/MystiaFin/amane"
---

Amane is a Rust library for building Wayland desktop shells, like bars, panels and launchers. You write your shell in plain Rust, and the `amane` CLI builds and runs it for you.

Keep in mind, Amane is still early (0.1) and experimental, so things will break and change.

## Documentation

The full guide is at [mystiafin.github.io/amane](https://mystiafin.github.io/amane/). It walks you from your first shell through layout, widgets, input and animation, plus the built-in services for audio, network, bluetooth, notifications and workspaces.

## Installation

Before installing, check that you have what a shell needs to run:

- a Wayland compositor that supports wlr-layer-shell, for example niri, Hyprland or Sway. GNOME doesn't support it, so Amane won't work there.

### Manual installation

#### 1. Install Rust

You need a Rust toolchain with cargo. Cargo has to stay on your `PATH` after the install, because `amane dev` and `amane compile` call cargo to build your config.

#### 2. Run the install script

Clone the repo and run `install.sh`. It installs the system libraries Amane needs with pacman, apt or dnf, then installs the CLI with `cargo install --path cli`:

```sh
git clone…
