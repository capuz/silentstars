---
repo: "everruns/yolop"
name: "yolop"
description: "Everruns Coding Agent"
url: "https://github.com/everruns/yolop"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["acp", "ai-agents", "ai-coding", "coding", "everruns"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-05-27T03:38:41Z"
lastCommitAt: "2026-06-28T02:01:48Z"
lastReleaseAt: "2026-06-11T01:58:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/361a26a02d2d93309cbdaea4417ce8f95e72df589ef9e118c530b029f4a64079/everruns/yolop"
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
default, with [soft approval](./docs/features/approvals.md) for critical
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

First launch with no credentials opens a guided, keyboard-driven setup:
provider → credentials → model.…
