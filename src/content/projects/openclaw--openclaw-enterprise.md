---
repo: "openclaw/openclaw-enterprise"
name: "openclaw-enterprise"
description: "The Enterprise-grade Control Plane for modern agentic workloads"
readmeQualityOk: true
url: "https://github.com/openclaw/openclaw-enterprise"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [71, 22]
stars: 391
forks: 76
openIssues: 68
closedIssues: 140
watchers: 4
contributors: 49
recentReleases: 0
createdAt: "2026-08-29T02:32:55Z"
lastCommitAt: "2026-10-11T10:15:58Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 24
maintainers: ["freeqaz", "ericcaiwx-star"]
openGraphImageUrl: "https://opengraph.githubassets.com/b694217a2318e8daf8019b3ad499f45344b8de12d1dad005a82b72c939d02362/openclaw/openclaw-enterprise"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# OpenClaw Enterprise

OpenClaw Enterprise (OCE) is the open source, vendor neutral platform for managing agents. Think of it as Kubernetes for agents.

OCE includes the [OpenClaw Control Plane (OCC)](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/guides/concepts.md#control-plane)
for deploying and managing [Agents](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/guides/concepts.md#agents-and-revisions).
Start with [Getting Started](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/README.md) to use the platform, [Operate](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/guides/operate/README.md) to administer it, or [Contribute](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/contributing/README.md) to change its source.

## Getting started

Choose [Local Setup](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/guides/quickstart.md) to run OCC on your machine, or [Kubernetes Setup](https://github.com/openclaw/openclaw-enterprise/blob/HEAD/docs/guides/kubernetes-setup.md) to install it on a cluster you already operate. For local setup, run from the repository root:

```bash
pnpm cli:build
export…
