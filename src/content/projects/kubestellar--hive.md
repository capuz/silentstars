---
repo: "kubestellar/hive"
name: "hive"
description: "AI agent orchestration for open and closed source — a fully customizable fleet of AI agents covering every level of project maintenance, from brainstorming to full autonomy"
readmeQualityOk: true
url: "https://github.com/kubestellar/hive"
homepage: "https://hive.kubestellar.io"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 38
forks: 20
openIssues: 36
closedIssues: 545
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-04-17T15:00:19Z"
lastCommitAt: "2026-08-13T03:13:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 47
maintainers: ["clubanderson", "kubestellar-hive[bot]", "kubestellar-prow[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28b9d4a36d8db0a8e616d6e7a40d9049e2bff38252762dfdb2ae4891dac348c6/kubestellar/hive"
---

# Hive

AI agent orchestration for open source projects. A single Go binary enumerates GitHub issues and PRs, classifies them by complexity, and dispatches work to AI agents (Claude, Copilot, Gemini, Goose) on adaptive cadences governed by queue depth.

Hive separates decisions into two layers: a **deterministic pipeline** of shell scripts handles filtering, classification, merge-gating, and enforcement before any LLM sees the work. Agents only handle judgment calls — reading code, reasoning about fixes, writing PRs.

## Quick Start (Docker Compose)

**Prerequisites**

- Docker Engine 24+ with the Compose v2 plugin (`docker compose`, not the legacy `docker-compose`)
- A Linux, macOS, or Windows (WSL2) host on `amd64` or `arm64` — the pre-built images are multi-arch
- `git`, and a GitHub token (PAT or App) for the org you want the hive to work on

```bash
git clone -b v2 https://github.com/kubestellar/hive.git
cd hive/v2

cp hive.yaml.example hive.yaml
export HIVE_GITHUB_TOKEN=ghp_...
docker compose up -d
```

Dashboard at `http://localhost:3001`.

The pre-built image tag is documented in…
