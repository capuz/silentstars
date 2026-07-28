---
repo: "cuioss/plan-marshall"
name: "plan-marshall"
description: "An orchestration layer for AI coding assistants (currently Claude Code) that enforces consistency, reliability, and more predictable outputs."
readmeQualityOk: true
url: "https://github.com/cuioss/plan-marshall"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 5
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-11T15:07:15Z"
lastCommitAt: "2026-07-28T14:47:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 44
maintainers: ["cuioss-oliver", "cuioss-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6508872fd621083f73706f5cd3f54e17270e5750ef332ab9e77a5a78339184ca/cuioss/plan-marshall"
---

# Plan Marshall

> [!CAUTION]
> **Under Development. Not released yet. Alpha-Version**

### What is it?

Plan Marshall is an orchestration layer for AI coding assistants (currently Claude Code) that enforces consistency, reliability, and more predictable outputs. It packages a phase-driven planning workflow, a library of domain skills, and a marketplace of ten production bundles covering Java, JavaScript, Python, OCI containers, requirements, and plugin development.

## Prerequisites

> [!IMPORTANT]
> **Python 3 is required** and must be available as `python3` in your PATH.
>
> Verify with:
> ```bash
> python3 --version
> ```

> [!IMPORTANT]
> **Windows users: run inside WSL2.** Running under WSL2 (Ubuntu) is very strongly recommended — the build-queue server is **WSL-only** and does not run natively on Windows. Work through a WSL-connected editor: **VS Code + Remote-WSL** or **IntelliJ via JetBrains Gateway**. Full walkthrough: [User Guide › Windows / WSL Setup](https://github.com/cuioss/plan-marshall/blob/HEAD/doc/user/windows-wsl-setup.adoc).

### Supported platforms

Plan Marshall targets a POSIX runtime: **macOS** and **Linux** are supported natively. On **Windows**, Plan…
