---
repo: "Nomadcxx/sysc-greet"
name: "sysc-greet"
description: "A tui greeter (not built in rust) "
readmeQualityOk: true
url: "https://github.com/Nomadcxx/sysc-greet"
homepage: "https://nomadcxx.github.io/sysc-greet/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["bubbletea", "display-manager", "golang", "greetd", "linux", "login-manager", "niri", "sway", "tui", "wayland"]
stars: 390
forks: 25
openIssues: 14
closedIssues: 62
watchers: 3
contributors: 8
recentReleases: 2
createdAt: "2025-10-14T03:41:26Z"
lastCommitAt: "2026-10-23T11:58:39Z"
lastReleaseAt: "2026-10-02T12:58:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 39
maintainers: ["Nomadcxx", "betmut"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e4e505eac49265ec4bdf9c5e3b2d6f37885050da61241b10436c34c6a811f24/Nomadcxx/sysc-greet"
fundingLinks: ["GITHUB:https://github.com/Nomadcxx"]
discussionCount: 2
---

A graphical console greeter for [greetd](https://git.sr.ht/~kennylevinsen/greetd), written in Go with the Bubble Tea framework.

## Quick Links

- [Full Documentation](https://nomadcxx.github.io/sysc-greet/) - Complete guides, configuration, and usage instructions

> [!NOTE]
> The greeter supports Niri, Cagebreak, Sway, and Mango. Hyprland 0.55+ uses the Lua config and requires explicit opt-in with `SYSC_COMPOSITOR=hyprland`. Test startup, login, and quit on the target machine before enabling it for greetd.
>
> sysc-compositor support is experimental. sysc-compositor is unreleased and WIP; when its binary is installed, the greeter runs it with the Niri config and IPC.

## Installation

### Quick Install

One-line installer that works on most Linux distributions:

```bash
curl -fsSL https://raw.githubusercontent.com/Nomadcxx/sysc-greet/master/install.sh | sudo bash
```

The installer automatically detects your package manager and works on Arch Linux, Debian/Ubuntu, Fedora, and openSUSE. It'll handle greeter backend selection, install dependencies, and set everything up for you.

### Build from Source

If you want to build it yourself, just clone the repo and run the installer:…
