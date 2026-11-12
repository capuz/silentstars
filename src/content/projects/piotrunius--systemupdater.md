---
repo: "Piotrunius/SystemUpdater"
name: "SystemUpdater"
description: "Modern, modular Linux / macOS system updater"
readmeQualityOk: true
url: "https://github.com/Piotrunius/SystemUpdater"
homepage: "https://piotrunius.github.io/SystemUpdater/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["automation", "homebrew", "linux", "macos", "updater", "btrfs", "cli", "dotfiles", "package-manager", "python"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-05T02:32:58Z"
lastCommitAt: "2026-11-12T05:37:33Z"
lastReleaseAt: "2026-10-20T11:29:07Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Piotrunius", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1405016778/6bcdd87c-ff83-4e47-92dd-572a6e1bc668"
---

# SystemUpdater

SystemUpdater (`sysupdate`) runs updates for supported Linux and macOS package managers, desktop apps, containers, and development tools from one command. It detects installed tools, runs only applicable modules, and reports results in a consistent terminal summary.

Before system package updates, it can create a Btrfs snapshot through Snapper. It also supports selective runs, custom commands, run history, and optional reboot handling.

## Features

- Detects the distribution from `/etc/os-release` on Linux or system version on macOS and selects applicable package managers.
- Checks installed tools and update targets before running their modules.
- Supports module, category, quiet, and verbose selection.
- Generates native shell completions for Bash, Zsh, and Fish (`--generate-completion`).
- Sends native desktop notifications on Linux (`notify-send`) and macOS (`osascript`) upon completion (`--notify`).
- Creates cooldown-limited Snapper snapshots before updates when available.
- Detects reboot requirements from updated packages, firmware, macOS system updates, and system reboot markers.
- Stores up to 30 private run records, with redacted and size-limited…
