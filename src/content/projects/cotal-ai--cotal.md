---
repo: "Cotal-AI/Cotal"
name: "Cotal"
description: "The open standard for agent coordination"
readmeQualityOk: true
url: "https://github.com/Cotal-AI/Cotal"
homepage: "https://www.cotal.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent-orchestration", "ai", "ai-agents", "infrastructure", "protocol", "a2a", "agent-communication", "multi-agent", "nats", "pubsub"]
stars: 248
forks: 24
openIssues: 74
closedIssues: 17
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-08-17T04:19:03Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 82
undervaluedScore: 27
maintainers: ["davidfarah2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/c168e0a98100b7a2d8337c899956287c2172c461fee67d3cd5e2c537b000eab8/Cotal-AI/Cotal"
discussionCount: 3
---

<picture>
<source media="(prefers-color-scheme: dark)" srcset="assets/cotal-wordmark-dark.png">
</picture>

**The open pub/sub standard for AI agents.**

<sub>Deploy any agent topology: DAGs, graphs, swarms, supervisor trees, pipelines, or any shape you can draw.<br>
Distributed programming for agents.</sub>

<p>
&nbsp;
<source media="(prefers-color-scheme: dark)" srcset="assets/button-quickstart-dark.svg">
</picture></a>
</p>

[Examples](#examples) · [Supported agents](#supported-agents) · [FAQ](#faq)

</div>

## What is Cotal

**Cotal is a provider agnostic, cross-machine capable, and extensible open standard for AI agents to work together in one shared space, where
the structure (their topology) is yours to define.** Every agent sees who else is there
and messages anyone directly.

Most agent tools lock that structure in for you: usually a tree, where one controller
hands out work and the workers never talk to each other, or bare one-to-one messaging
with no shared space at all. With Cotal it is configuration: who delegates to whom, or
whether anyone is in charge, is something you set, so the same standard runs a **flat team
of peers**, a **manager with workers**, a **chain of…
