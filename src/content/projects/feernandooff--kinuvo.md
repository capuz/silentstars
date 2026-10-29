---
repo: "FeernandoOFF/kinuvo"
name: "kinuvo"
description: "A self-hosted personal AI assistant that uses your existing tools and knowledge and runs wherever you want."
readmeQualityOk: true
url: "https://github.com/FeernandoOFF/kinuvo"
homepage: "https://feernandooff.github.io/kinuvo/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-15T20:24:23Z"
lastCommitAt: "2026-10-29T14:08:25Z"
lastReleaseAt: "2026-10-27T00:46:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 56
maintainers: ["FeernandoOFF"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c513150defd9c3786dba66720364745015694aa95e5bc7f082c404e735a58df/FeernandoOFF/kinuvo"
---

# Kinuvo

A self-hosted personal AI assistant. Talk to named Agents that remember you across conversations, work with your Knowledge (Obsidian, Anytype), run Routines and Tasks, and use MCP servers, Skills and Computers. One Server owns your Agents; your Devices connect to it.

## Install

macOS and Linux:

```sh
curl -fsSL https://raw.githubusercontent.com/FeernandoOFF/kinuvo/main/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/FeernandoOFF/kinuvo/main/install.ps1 | iex
```

[Documentation and getting started](https://feernandooff.github.io/kinuvo/) · [Download apps](https://github.com/FeernandoOFF/kinuvo/releases/latest)

## Build from source

Uses the [Kotlin Toolchain](https://kotlin-toolchain.org) (`./kotlin`, no install needed):

```sh
./kotlin run -m cli          # the Server
./kotlin run -m desktop      # the desktop app
./kotlin test -p jvm
```

In a pinned development checkout, use the mise commands in [local testing](https://github.com/FeernandoOFF/kinuvo/blob/HEAD/docs/local-testing.md). See [AGENTS.md](https://github.com/FeernandoOFF/kinuvo/blob/HEAD/AGENTS.md) for layout,…
