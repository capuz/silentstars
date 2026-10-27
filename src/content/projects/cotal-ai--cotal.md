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
stars: 362
forks: 44
openIssues: 462
closedIssues: 1345
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2026-06-02T02:52:25Z"
lastCommitAt: "2026-10-27T09:17:01Z"
lastReleaseAt: "2026-07-02T10:23:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 26
maintainers: ["davidfarah2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd7c6315cf3a35f7b4cc632c96c6bbedfe36b6263c920187299b12f7f4f4460d/Cotal-AI/Cotal"
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
[Read the overview](https://github.com/Cotal-AI/Cotal/blob/HEAD/docs/what-is-cotal.md).

## Quick start

```bash
curl -fsSL https://get.cotal.ai | sh
```

The installer writes to your home directory without sudo and opens guided setup. You can…
