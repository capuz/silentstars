---
repo: "Drackrath/Aurelia-TUI"
name: "Aurelia-TUI"
description: "Steam TUI Implementation of Aurelia CLI"
readmeQualityOk: true
url: "https://github.com/Drackrath/Aurelia-TUI"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cli", "commandline", "steam", "tui", "linux", "mac", "terminal", "windows"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-21T14:24:38Z"
lastCommitAt: "2026-11-23T10:18:04Z"
lastReleaseAt: "2026-11-23T10:20:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 46
maintainers: ["Drackrath"]
openGraphImageUrl: "https://opengraph.githubassets.com/d41b4aba4db506979a99b0ec225c99f15a7c35d14f2238cf27aee61a0e203046/Drackrath/Aurelia-TUI"
fundingLinks: ["GITHUB:https://github.com/Drackrath"]
---

# Aurelia TUI

A terminal UI for browsing, installing, updating, and launching your Steam
library — powered by the [`aurelia`](https://github.com/Drackrath/Aurelia)
command-line Steam launcher.

## About

Aurelia TUI is a graphical front-end for the `aurelia` CLI. It is a rebuild of
[`steam-tui`](https://github.com/dmadisetti/steam-tui): where the original drove
`steamcmd` directly, Aurelia TUI shells out to the modern `aurelia` binary
(using its `--json` output for every backend operation) and lets it handle the
heavy lifting — authentication, library listing, downloads, and launching
(including Proton/Wine on Linux).

> **Note**
>
> Steam no longer offers a backend-only mode, so a CLI-driven client like this
> is necessarily limited — but it stays useful if you'd rather not run the full
> Steam client.

## Requirements

- The [`aurelia`](https://github.com/Drackrath/Aurelia) CLI, **version `>= 0.3.1`**
  (on Arch: the [`aurelia`](https://aur.archlinux.org/packages/aurelia) AUR
  package; otherwise build it from source).
- A Steam account (logging in is described below).

Aurelia TUI looks for the `aurelia` binary in this order:
