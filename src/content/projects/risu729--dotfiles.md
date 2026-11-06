---
repo: "risu729/dotfiles"
name: "dotfiles"
description: "🐿️ Risu's dotfiles bonsai 🌳 for Windows 11 🪟 and WSL 2 🐧"
readmeQualityOk: true
url: "https://github.com/risu729/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [64]
topics: ["dotfiles"]
stars: 7
forks: 1
openIssues: 29
closedIssues: 99
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-06-03T15:12:56Z"
lastCommitAt: "2026-11-06T02:43:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 73
maintainers: ["renovate[bot]", "risu729"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbc7144b11d9c0ffd945ae5a3ca4280daab788631797c023400035f4fc4bf034/risu729/dotfiles"
---

# 🐿 Risu's Dotfiles

My development environment for Windows 11, WSL2 (Ubuntu), and macOS, managed
with [mise](https://mise.jdx.dev/). Windows hosts desktop apps; WSL2 and macOS
share shell configuration and command-line tools.

## Installation

Choose the platform to configure. The Windows installer also handles WSL2.

### Windows 11

Set up Windows without a Microsoft account to avoid automatically installing
OneDrive. During initial setup, stay disconnected from the internet, press
`Shift + F10`, and run:

```cmd
start ms-cxh:localonly
```

Continue with **I don't have internet**. Update Windows to the latest version
and uninstall OneDrive if present, then run in Windows Terminal:

```powershell
powershell -c "irm dot.risunosu.com/win | iex"
```

This also sets up WSL2 with the personal profile. After installation, restore
[PowerToys settings][powertoys-backup]
from the backup in [`win/`](https://github.com/risu729/dotfiles/blob/HEAD/win/).

Remove unnecessary pre-installed software and install these apps separately:

- [Lenovo Vantage](https://www.lenovo.com/us/en/software/vantage)
- [Minecraft Launcher](https://aka.ms/minecraftClientGameCoreWindows)
-…
