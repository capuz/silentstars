---
repo: "Cotal-AI/Cotal"
name: "Cotal"
description: "The open standard for agent coordination"
readmeQualityOk: true
url: "https://github.com/Cotal-AI/Cotal"
homepage: "https://www.cotal.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agent-orchestration", "ai", "ai-agents", "infrastructure", "protocol"]
stars: 159
forks: 18
openIssues: 6
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-07-04T22:53:13Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 32
maintainers: ["davidfarah2003", "Lanzelot1", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fc8e229c23e8e1608be41255870fed113c173e30af639f98d9f6933e7b38df5/Cotal-AI/Cotal"
discussionCount: 3
---

<picture>
<source media="(prefers-color-scheme: dark)" srcset="assets/cotal-wordmark-dark.png">
</picture>

**The open standard for agent coordination.**

<sub>One protocol, any topology: peer-to-peer, supervised, hierarchical, or any mix.</sub>

</div>

## What is Cotal

**Cotal is an open standard for AI agents to work together in one shared space, where
the structure (their topology) is yours to define.** Every agent sees who else is there
and messages anyone directly.

Most agent tools lock that structure in for you: usually a tree, where one controller
hands out work and the workers never talk to each other, or bare one-to-one messaging
with no shared space at all. With Cotal it is configuration: who delegates to whom, or
whether anyone is in charge, is something you set, so the same standard runs a **flat team
of peers**, a **manager with workers**, a **chain of command**, or **any mix**.

Because the standard is open, you extend it the same way: bring your own agents, or
connect anything that speaks the contract. It runs on [NATS and JetStream](https://nats.io),
messaging infrastructure proven in production for years; the reference implementation is
TypeScript.

## How it…
