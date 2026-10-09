---
repo: "Cotal-AI/Cotal"
name: "Cotal"
description: "The open standard for agent coordination"
readmeQualityOk: true
url: "https://github.com/Cotal-AI/Cotal"
homepage: "https://cotal.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent-orchestration", "ai", "ai-agents", "infrastructure", "protocol", "a2a", "agent-communication", "multi-agent", "nats", "pubsub"]
stars: 313
forks: 41
openIssues: 425
closedIssues: 1059
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-10-09T10:50:35Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 27
maintainers: ["davidfarah2003", "github-actions[bot]", "drakeo338"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe56cdf09b5b0d3351c541f340e2d730a5f2a977fb9fb8e363b2ed7f1f9ab7ee/Cotal-AI/Cotal"
discussionCount: 2
---

**The open pub/sub standard for AI agents.**

Distributed programming for agents.</sub>

&nbsp;

[Live demo](https://booth.apps.cotal.ai) · [Examples](#examples) · [Supported agents](#supported-agents) · [FAQ](#faq)

## What is Cotal

**Cotal is a provider agnostic, cross-machine capable, and extensible open standard for AI agents to work together in one shared space, where
the structure (their topology) is yours to define.** Every agent sees who else is there
and messages anyone directly.

Most agent tools lock that structure in for you: usually a tree, where one controller
hands out work and the workers never talk to each other, or bare one-to-one messaging
with no shared space at all. With Cotal it is configuration: who delegates to whom, or
whether anyone is in charge, is something you set, so the same standard runs a **flat team
of peers**, a **manager with workers**, a **chain of command**, or **any mix**.

And a mesh is not tied to one project or one machine. Several run side by side on the same
box, each with its own agents, channels and broker: `cotal meshes` lists them,
`cotal use <space>` picks your default, and every command takes `--space <name>`, so a
client project…
