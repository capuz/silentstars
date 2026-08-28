---
repo: "kdeps/kdeps"
name: "kdeps"
description: "YAML-defined AI agents and workflow pipelines — ship as Docker, K8s, ISO, or a single binary."
readmeQualityOk: true
url: "https://github.com/kdeps/kdeps"
homepage: "https://kdeps.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["agent", "llms", "workflow", "yaml", "orchestration", "ai", "llamafile", "nvidia", "agentic", "gguf"]
stars: 37
forks: 5
openIssues: 13
closedIssues: 395
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-01T01:46:41Z"
lastCommitAt: "2026-08-28T14:24:01Z"
lastReleaseAt: "2025-02-02T00:43:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["jjuliano", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/836501717/81bba773-3b05-4680-9d12-d15b311c38e8"
discussionCount: 1
---

# kdeps

Build and deploy AI agents in YAML. Two modes: **workflow** (DAG pipelines), **agent** (autonomous LLM loop). Git-native: everything lives in versionable YAML you commit to your repo like any other code.

## Install

```bash
curl -LsSf https://raw.githubusercontent.com/kdeps/kdeps/main/install.sh | sh
```

Windows (PowerShell):

```powershell
irm https://raw.githubusercontent.com/kdeps/kdeps/main/install.ps1 | iex
```

Or with Homebrew (macOS and Linux):

```bash
brew install kdeps/tap/kdeps
```

## Book

[<img src="https://d2sofvawe08yqg.cloudfront.net/kdeps/s_hero?1779817160" alt="AI Appliances book cover" width="140" align="right" style="margin-left:16px">](https://leanpub.com/kdeps)

**[AI Appliances - Build & Deploy Autonomous AI Agents and Agencies in YAML](https://leanpub.com/kdeps)**
Free. PDF, EPUB, and web.

Hands-on guide covering deterministic pipelines, multi-agent orchestration, error handling, and vendor-agnostic deployment - the production challenges most AI frameworks leave to you.

<br clear="right">

## Modes

### Workflow mode

DAG-deterministic request/response pipelines: each resource declares its dependencies via `requires:` and runs in order,…
