---
repo: "SpecterShell/Dumplings"
name: "Dumplings"
description: "Dump remote resources and lint outdated packages"
readmeQualityOk: true
url: "https://github.com/SpecterShell/Dumplings"
homepage: "https://spectershell.github.io/Dumplings/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
stars: 60
forks: 36
openIssues: 11
closedIssues: 77
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2022-05-06T16:27:10Z"
lastCommitAt: "2026-11-02T15:17:26Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 59
maintainers: ["github-actions[bot]", "SpecterShell"]
openGraphImageUrl: "https://opengraph.githubassets.com/f57a8450fb3f3a9c61b7bd8c410f980fa423368e3f5c48c17958501234758782/SpecterShell/Dumplings"
discussionCount: 5
---

# Dumplings

Dumplings monitors Windows package releases and submits updated manifests to [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs). Its PowerShell runner manages thousands of package tasks, with static installer analysis, manifest validation, and notifications.

## Features

- Runs selected or all package tasks with explicit dependency ordering and configurable concurrency.
- Compares releases with persisted task state and distinguishes new, changed, updated, and rollback states.
- Detects and statically analyzes many Windows installer and bootstrapper formats.
- Reads, updates, formats, and validates multi-file WinGet manifests without invoking `winget validate`.
- Writes task state, sends queued Telegram or Matrix notifications, and submits guarded pull requests.
- Publishes a task status dashboard to GitHub Pages after each Automation workflow run.
- Keeps GPL installer implementations behind a JSON child-process boundary from the Apache-2.0 PackageModule.

## Architecture

```mermaid
flowchart LR
    Core["Core runner"] --> Tasks["Tasks/*"]
    Core --> Package["PackageModule (Apache-2.0)"]
    Tasks --> Package
    Package -->|"JSON child process"|…
