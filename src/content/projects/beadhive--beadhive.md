---
repo: "beadhive/beadhive"
name: "beadhive"
description: "An opinionated and efficient automated software-factory"
readmeQualityOk: true
url: "https://github.com/beadhive/beadhive"
homepage: "https://beadhive.ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agentic-ai", "ai-agents", "autonomous-agents", "claude", "claude-code", "cli", "developer-tools", "devops-automation", "issue-tracker", "llm-agents"]
stars: 29
forks: 5
openIssues: 137
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-11T06:23:23Z"
lastCommitAt: "2026-11-04T11:19:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 60
undervaluedScore: 34
maintainers: ["briancripe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297186619/4e9dba8e-20a0-4b15-b765-75bb6ca07c68"
---

# Beadhive (`bh`)

`bh` is a single CLI for managing **beads** issue tracking across many repositories. Each
repo is its own beads database (a **hive**) with a short, stable prefix; `bh` onboards them,
keeps their labels consistent, runs `bd`/`git` across one or all of them, and aggregates
every hive into one cross-repo view — even hives whose code isn't checked out.

It's a thin orchestrator over `bd`, `git`, `git-workspace`, `dolt`, and `docker`: `bh`
encodes the conventions, the registry, validation, and routing. Config and runtime state live
under `~/.beadhive/`; **no issue data lives there** — each hive's issues live in its own Dolt
DB under `refs/dolt/data` on that repo's own git remote.

`bh` is the CLI of **Beadhive**, a bead-machine — a software factory that uses beads.
The process it drives is documented in [docs/AGF.md](https://github.com/beadhive/beadhive/blob/HEAD/docs/AGF.md).

This repo is the CLI's source (Python package `beadhive` on PyPI, command `bh`). For what
Beadhive is conceptually, rather than how to drive it, see [beadhive.ai](https://beadhive.ai).

## Install

**Agents:** point your agent at…
