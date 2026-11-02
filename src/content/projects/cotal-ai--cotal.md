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
stars: 381
forks: 44
openIssues: 273
closedIssues: 1599
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-11-02T11:36:29Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 27
maintainers: ["davidfarah2003", "Manas-Kenge"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f78c63c6f15760d2a2bb045c79c297b832267218dfd12aa7fa0a5c6a3a9cbfe/Cotal-AI/Cotal"
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
