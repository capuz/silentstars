---
repo: "dangtrivan15/choruskube"
name: "choruskube"
description: "AI-agent workflow orchestrator for Kubernetes and Docker — single-tenant OSS core"
readmeQualityOk: true
url: "https://github.com/dangtrivan15/choruskube"
homepage: "https://choruskube.com"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [49, 31]
topics: ["ai-orchestration", "ai-orchestrator", "docker", "harness", "kubernetes", "security", "workflow-automation", "claude-code"]
stars: 11
forks: 0
openIssues: 35
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-27T06:15:38Z"
lastCommitAt: "2026-11-13T18:29:47Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 79
undervaluedScore: 38
maintainers: ["dangtrivan15", "van-s-choruskube-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/908779b65fcf3c322c751aca75eb35441802ab22362e41a606e9540447ca1e8b/dangtrivan15/choruskube"
---

# ChorusKube

**An AI-agent workflow orchestrator for Kubernetes and Docker.**

Giving an AI coding agent free rein over your codebase is a leap of faith.
ChorusKube lets you define work as a directed graph — AI tasks, scripts, and
human-approval gates — and runs each node as an isolated container, so agents
do the work while you keep control. AI nodes run [Claude Code](https://claude.com/claude-code)
against a target git repo; a Temporal-backed orchestrator drives the graph and
a Worker owns the container lifecycle.

This is the open-source core: single-tenant, no external identity provider —
the API is open and every request is scoped to a seeded "system" organization.

## Why ChorusKube?

- **Workflow as a DAG** — model spec → plan → implement → test → review → merge
  as a graph with mandatory gates. Conditional routing and revision loops included.
- **Container isolation** — every node runs in its own ephemeral container with a
  unique per-execution secret; agents get autonomy in a sandbox, not your cluster.
- **Human-in-the-loop** — pause at review gates, inspect predecessor outputs and
  artifacts, then approve, reject, or request changes that feed the next iteration.
-…
