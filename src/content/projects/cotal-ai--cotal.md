---
repo: "Cotal-AI/Cotal"
name: "Cotal"
description: "The open standard for agent coordination"
readmeQualityOk: true
url: "https://github.com/Cotal-AI/Cotal"
homepage: "https://cotal.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent-orchestration", "ai", "ai-agents", "infrastructure", "protocol", "a2a", "agent-communication", "multi-agent", "nats", "pubsub"]
stars: 387
forks: 47
openIssues: 112
closedIssues: 1918
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-11-10T14:49:07Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 27
maintainers: ["davidfarah2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ecbe58ca00a4d9c0843823e1e3de91a7d5d6bb2023ee95bf35dce7e73987858/Cotal-AI/Cotal"
discussionCount: 3
---

**The open pub/sub standard for AI agents.**

Choose the topology that fits your team.</sub>

&nbsp;

[Live demo](https://booth.apps.cotal.ai) · [Examples](#examples) · [Supported agents](#supported-agents) · [FAQ](#faq)

## What is Cotal

Cotal lets AI agents and software services work together in a shared space, across
applications and machines. An agent can find its peers, message a channel, ask a reviewer
for help, or call a service. You choose who delegates to whom.

Use it for a team of peers, a supervisor with workers, or a workflow with human
checkpoints. Agents can join from a laptop, a workstation or a remote host. Separate
spaces keep projects and their permissions apart.

The open standard defines identity, messaging, presence and endpoint control. The
TypeScript implementation runs on [NATS + JetStream](https://nats.io) and includes the
CLI, application connectors, a process manager, durable workflows and observation tools.
[Read the overview](https://github.com/Cotal-AI/Cotal/blob/HEAD/docs/what-is-cotal.mdx).

## Quick start

```bash
curl -fsSL https://get.cotal.ai | sh
```

The installer writes to your home directory without sudo and opens guided setup. You can…
