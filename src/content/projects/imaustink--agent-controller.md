---
repo: "imaustink/agent-controller"
name: "agent-controller"
description: "An AI Agents Framework that is a K8s controller"
readmeQualityOk: true
url: "https://github.com/imaustink/agent-controller"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [69, 25]
stars: 5
forks: 0
openIssues: 9
closedIssues: 11
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-07-17T04:04:03Z"
lastCommitAt: "2026-10-03T22:04:04Z"
lastReleaseAt: "2026-07-17T23:44:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["imaustink", "github-actions[bot]", "claude-code-swe"]
openGraphImageUrl: "https://opengraph.githubassets.com/91b74cdef56beb3528d197d08191a4f5e230734c2206c9e2d98e132ba0c3f999/imaustink/agent-controller"
---

# agent-controller

> [github.com/imaustink/agent-controller](https://github.com/imaustink/agent-controller)

A Kubernetes-native framework for building production AI agents. Tools, Skills,
and Agents are declared as **custom resources** and launched as one-shot Jobs by
a dedicated controller — so operators manage the catalog declaratively and the
orchestrator stays focused on reasoning, not infrastructure.

## Why a controller + CRDs?

Hard-coding tool definitions and Job-launching logic inside an orchestrator
couples infrastructure concerns to application code: rotating a secret, tuning
resource limits, or adding a new tool all require an image rebuild and
redeployment. It also means the orchestrator's ServiceAccount needs broad
`batch/jobs create` permissions, every configuration change bypasses version
control, and there is no Kubernetes-native way to inspect what the agent has
been doing.

Modelling tools and agents as custom resources flips this:

| Concern | Baked into orchestrator | With core-controller |
| ------- | ----------------------- | ---------------------- |
| Tool definition | Config files / env vars | `Tool` CR — live-editable, `kubectl`-discoverable |
| Secret…
