---
repo: "bex-co/bex"
name: "bex"
description: "The open-source Render alternative — AI-native. Git push → build → deploy on your own infrastructure; agents are first-class users."
readmeQualityOk: true
url: "https://github.com/bex-co/bex"
homepage: "https://bex.co"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [48, 42]
topics: ["deploy", "gitops", "golang", "hetzner", "kubernetes", "kubernetes-operator", "paas", "ai-agents", "heroku-alternative", "mcp"]
stars: 408
forks: 43
openIssues: 2
closedIssues: 1
watchers: 44
contributors: 3
recentReleases: 0
createdAt: "2024-04-30T01:49:56Z"
lastCommitAt: "2026-07-08T05:41:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 33
maintainers: ["puncsky", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4063b7d668f51e91bc7560fffe139b5da699fd00c409d1431837dcab85c27ad0/bex-co/bex"
---

# bex

**The open-source Render alternative — AI-native.**

Push a Git repo (or a prebuilt image), get a running HTTPS service at `<name>.onbex.co` — on machines you own. bex runs identically as a local Docker mock and on Hetzner; only the infrastructure provider overlay changes. Built so AI agents can deploy and operate apps as first-class users, not an afterthought.

## Why bex

- **Own your PaaS.** Render's developer experience — deploy-from-git, custom domains + TLS, suspend/resume — on your own hardware, Apache-2.0.
- **Drop-in familiar.** `bex.yml` is `render.yaml`-shaped, and `bex-api` speaks Render's REST and GraphQL, verified against Render's OpenAPI spec ([docs/bex-api.md](https://github.com/bex-co/bex/blob/HEAD/docs/bex-api.md)).
- **Built for agents.** Every action is an API call or a Kubernetes CR; state is machine-readable (`phase` / `revision` / `url`). No dashboard-only actions. See the mission and roadmap in [docs/vision.md](https://github.com/bex-co/bex/blob/HEAD/docs/vision.md).

## Quickstart: local mock (machines = Docker containers)

Prereqs: Docker (OrbStack works), Go 1.25+, `kubectl`, `kind`, `clusterctl`.

```bash
# 1. stand up the mock substrate: kind…
