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
stars: 51
forks: 31
openIssues: 11
closedIssues: 60
watchers: 4
contributors: 25
recentReleases: 0
createdAt: "2022-05-06T16:27:10Z"
lastCommitAt: "2026-08-21T04:10:53Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 60
maintainers: ["github-actions[bot]", "SpecterShell", "chris-addison"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb422bc1f885b18276ae7269d23f6a8520714a4e645830d8c057f002348d3f8e/SpecterShell/Dumplings"
discussionCount: 4
---

# Dumplings

Dumplings is a PowerShell automation project for monitoring Windows package releases, updating package state, generating and validating WinGet manifests, and submitting changes to [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs).

The repository contains thousands of independent package tasks backed by a concurrent runner, static installer analyzers, manifest tooling, notification transports, and GitHub submission support.

## Features

- Runs selected or all package tasks with explicit dependency ordering and configurable concurrency.
- Compares releases with persisted task state and distinguishes new, changed, updated, and rollback states.
- Detects and statically analyzes many Windows installer and bootstrapper formats.
- Reads, updates, formats, and validates multi-file WinGet manifests without invoking `winget validate`.
- Writes task state, sends queued Telegram or Matrix notifications, and submits guarded pull requests.
- Publishes a task status dashboard to GitHub Pages after each Automation workflow run.
- Keeps GPL installer implementations behind a JSON child-process boundary from the Apache-2.0 PackageModule.

## Architecture

```mermaid…
