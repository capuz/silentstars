---
repo: "openclaw/openclaw-enterprise"
name: "openclaw-enterprise"
description: "The Enterprise-grade Control Plane for modern agentic workloads"
readmeQualityOk: true
url: "https://github.com/openclaw/openclaw-enterprise"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [62, 31]
stars: 436
forks: 97
openIssues: 93
closedIssues: 262
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2026-08-29T02:32:55Z"
lastCommitAt: "2026-10-25T08:39:28Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 24
maintainers: ["freeqaz", "freeqaz-openai"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf0acd143681caa556ab37fcf126119b8ade8604d696e0599148ad0616c0a8a/openclaw/openclaw-enterprise"
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
