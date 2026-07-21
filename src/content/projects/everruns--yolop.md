---
repo: "everruns/yolop"
name: "yolop"
description: "Everruns Coding Agent"
readmeQualityOk: true
url: "https://github.com/everruns/yolop"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["acp", "ai-agents", "ai-coding", "coding", "everruns"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-27T03:38:41Z"
lastCommitAt: "2026-07-21T06:10:42Z"
lastReleaseAt: "2026-07-21T00:15:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9686ee925a72275f3a3ccc3ad763066c75ab968240eb65424f6175612598574f/everruns/yolop"
---

# Yolop

A terminal coding agent built on
[`everruns-runtime`](https://crates.io/crates/everruns-runtime). One binary
that plans, edits, runs, and verifies code in your repository — autonomous by
default, with persistent sessions, agent skills, MCP servers, and editor
integration over the Agent Client Protocol.

## Origin of the name

`yolop` comes from the Ukrainian `Йолоп`: a dummy, fool, or not-too-bright
person. The name was meant to sound clever and funny in Ukrainian while also
describing the agent's starting point: yolop does not believe in per-tool
approval pop-ups. It uses an AI-judgement approach instead — autonomous by
default, with [soft approval](https://github.com/everruns/yolop/blob/HEAD/docs/features/approvals.md) for critical
moments when you want spoken consent and an audit trail.

## Install

```bash
brew install everruns/tap/yolop
```

Works on macOS (arm64/x86_64) and Linux (x86_64). If your Homebrew enforces
tap trust checks, trust the tap once first with `brew trust --tap everruns/tap`.
Building from source instead? `cargo install yolop --locked`.

## Quick start

```bash
cd your/repo
yolop
```

First launch with no credentials opens a guided,…
