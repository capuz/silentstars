---
repo: "AlphaJack/rusticlone"
name: "rusticlone"
description: "Scheduled 3-2-1-1-0 backups for computers and servers built on rustic profiles, with UI and notifications"
readmeQualityOk: true
url: "https://github.com/AlphaJack/rusticlone"
homepage: "https://alphajack.github.io/rusticlone/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["backup", "restore", "rustic", "rustic-frontend", "3-2-1-backup", "restic", "restic-gui"]
stars: 19
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-15T10:05:59Z"
lastCommitAt: "2026-11-03T11:14:47Z"
lastReleaseAt: "2025-09-22T22:31:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["AlphaJack"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/800950875/e3a9340a-b18a-44a3-8c8b-59a4f31d4eec"
---

# Rusticlone

Rusticlone backs up your desktops and servers on a schedule, keeps copies in more than one place and warns you when something needs your attention.

## Philosophy

- Zero lock-in: your backups are interoperable with [rustic](https://rustic.cli.rs/), [restic](https://restic.net/) and their [ecosystem](https://github.com/rubiojr/awesome-restic)
- Simple mental model: back up (snapshot) your files to a repository, copy that snapshot to other repositories, and mark old snapshots for deletion
- Lightweight and accessible: one small binary that you can run from the command line, from your desktop tray or as a web app
- Minimal configuration: add a few lines to your existing rustic profiles and you are good to go
- Quiet and reliable: it notifies you only when there are issues, not at every run

## Install

### Windows

One-line installer for PowerShell:

```powershell
irm https://github.com/AlphaJack/rusticlone/releases/latest/download/rusticlone-installer.ps1 | iex; & "$HOME\.cargo\bin\rusticlone.exe" install --auto-update
```

WinGet:

```pwsh
winget install AlphaJack.Rusticlone
```

Scoop:

```pwsh
scoop bucket add alphajack https://github.com/AlphaJack/scoop-bucket…
