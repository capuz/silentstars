---
repo: "airscripts/ghitgud"
name: "ghitgud"
description: "A better GitHub CLI that extends the official gh CLI."
url: "https://github.com/airscripts/ghitgud"
homepage: "https://airscript.it"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["api", "cli", "github"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-06-10T11:10:55Z"
lastCommitAt: "2026-06-30T13:02:27Z"
lastReleaseAt: "2026-05-30T20:17:18Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 84
undervaluedScore: 81
maintainers: ["airscripts", "renovate[bot]", "clawdeeo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/999511346/7483516c-05fd-400c-8d6d-43478ab0f613"
fundingLinks: ["GITHUB:https://github.com/airscripts", "KO_FI:https://ko-fi.com/airscript"]
discussionCount: 0
---

# ghitgud

A better GitHub CLI that extends the official gh CLI.

</p>

---

## Table of Contents

- [What It Does](#what-it-does)
- [How It Works](#how-it-works)
- [Features](#features)
- [Install](#install)
- [Configuration](#configuration)
- [Profile Management](#profile-management)
- [Commands](#commands)
- [PR Workflow](#pr-workflow)
- [Templates](#templates)
- [Output Format](#output-format)
- [Playbooks](#playbooks)
- [Development Checks](#development-checks)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)
- [Security](#security)
- [Support](#support)
- [License](#license)

---

## What It Does

ghg is not a replacement for `gh`. It is a companion that fills the gaps in the official GitHub CLI where GitHub has chosen not to ship features that power users need daily.

The output is not a wrapper. It is a superset.

---

## How It Works

ghg layers its commands on top of the GitHub REST API and local Git operations. Each command is self-contained — it resolves configuration, validates inputs, makes the minimal necessary API calls, and returns results in human-readable form or structured JSON.

The architecture is flat and explicit:

| Layer…
