---
repo: "everruns/yolop"
name: "yolop"
description: "Everruns Coding Agent"
readmeQualityOk: true
url: "https://github.com/everruns/yolop"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["acp", "ai-agents", "ai-coding", "coding", "everruns"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-27T03:38:41Z"
lastCommitAt: "2026-07-24T06:07:30Z"
lastReleaseAt: "2026-07-21T00:15:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0f2b2fb654aa72a22fe23951b53d8e306704bde8da1a50efadb80ac97e4424a/everruns/yolop"
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
describing the agent's starting point: Yolop avoids per-tool approval pop-ups.
Routine workspace work runs automatically; hard prompts are reserved for the
configured shell boundary, with [soft approval](#soft-approval) for critical
moments that need spoken consent and an audit trail.

## Install

```bash
brew install everruns/tap/yolop
```

Works on macOS (arm64/x86_64) and Linux (x86_64). If your Homebrew enforces
tap trust checks, run `brew trust --tap everruns/tap` once first. Building from
source instead? `cargo install yolop --locked`.

## Quick start

```bash
cd your/repo
yolop
```

First launch with no credentials opens a guided, keyboard-driven setup:
provider → credentials → model. Or set a…
