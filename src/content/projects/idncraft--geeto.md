---
repo: "IDNCraft/geeto"
name: "geeto"
description: "AI Git workflow automation — auto branch names, commit messages, releases, PRs, Trello integration"
readmeQualityOk: true
url: "https://github.com/IDNCraft/geeto"
homepage: "https://www.npmjs.com/package/geeto"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["git", "cli", "ai", "typescript", "workflow", "commit", "branch-naming", "release-manager", "conventional-commits", "github-copilot"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-16T02:40:13Z"
lastCommitAt: "2026-08-14T05:14:35Z"
lastReleaseAt: "2026-02-20T09:16:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 52
maintainers: ["rust142"]
openGraphImageUrl: "https://opengraph.githubassets.com/75d9c9bfd3704a4ad4860f16bbe0bc899bf2362332013e3407befd2e10da1978/IDNCraft/geeto"
---

# Geeto

**A guided Git workflow for consistent branches, commits, reviews, releases, and cleanup.**

Geeto turns working-tree changes into a clean, merged branch through one interactive CLI. It handles the repetitive Git steps, uses your preferred AI provider for suggestions, and keeps every action available as a standalone command when you need more control.

```text
Stage → Branch → Commit → Push → Merge → Cleanup
```

## Install

```bash
brew tap IDNCraft/geeto
brew trust --formula idncraft/geeto/geeto
brew install geeto
```

Or install from npm:

```bash
npm install -g geeto
```

Requires Git 2.0 or newer. npm installations also require Node.js 18 or newer. See [all installation methods](#installation) for Bun, APT, standalone binaries, and source builds.

## Quick Start

Run Geeto inside a Git repository:

```bash
geeto
```

On the first run, choose an AI provider and follow the guided workflow. Geeto previews generated branch names, commit messages, and release notes before applying them.

[Watch the terminal demo](https://asciinema.org/a/788604)

## Contents

- [Why Geeto](#why-geeto)
- [Workflow](#workflow)
- [AI Providers](#ai-providers)
- [CLI Reference](#cli-reference)…
