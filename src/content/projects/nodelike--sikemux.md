---
repo: "nodelike/sikemux"
name: "sikemux"
description: "The IDE for you and your coding agents. Run Claude Code, Codex and other agents next to your code, terminals, Git and a real browser, in one native app for Mac and Linux. Built in Rust with GPUI."
readmeQualityOk: true
url: "https://github.com/nodelike/sikemux"
homepage: "https://sikemux.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "git", "ide", "macos", "rust", "terminal"]
stars: 16
forks: 7
openIssues: 19
closedIssues: 42
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-22T12:03:17Z"
lastCommitAt: "2026-11-10T11:37:54Z"
lastReleaseAt: "2026-05-27T20:10:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 51
maintainers: ["nodelike"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de869c01c90ff502bdb8bc7c4162ae14764fc90e5bf9da2836933133b833001/nodelike/sikemux"
---

# Sikemux

**The IDE for you and your coding agents.**

Bring Claude Code, Codex or OpenCode. Sikemux gives them your shell, browser, logs and deploys, in one 25 MB native app.

## Install

```bash
curl -fsSL https://sikemux.com/install | sh
```

On a Mac this puts Sikemux in `/Applications`; on Linux it asks whether you want the desktop app (the `.deb` or `.rpm`, the Arch package on x86_64, or else the AppImage in `~/Applications`) or just the core for a server. Add `SIKEMUX_CHANNEL=nightly` before `sh` for the nightly build.

Or download the latest `.dmg` from [sikemux.com](https://sikemux.com) or [Releases](https://github.com/nodelike/sikemux/releases/latest). It is about 25 MB, needs macOS 11 or later on Apple Silicon, and keeps itself up to date.

On Linux, the `.deb`, `.rpm`, Arch package and `.AppImage` are in the same release. These are the x86_64 names; arm64 has `_arm64` and `.aarch64` in their place, and no Arch package, so Arch on arm64 takes the AppImage:

```bash
sudo apt install ./Sikemux_<version>_amd64.deb                 # Debian, Ubuntu
sudo dnf install ./Sikemux-<version>-1.x86_64.rpm              # Fedora
sudo pacman -U…
