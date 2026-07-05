---
repo: "5dive-ai/5dive"
name: "5dive"
description: "Run a company of AI agents on a server you own. Spin up named agents (claude, codex, grok…), put them on an org chart with a shared backlog, let them hand off work and ping your phone only when a human must decide. MIT."
readmeQualityOk: true
url: "https://github.com/5dive-ai/5dive"
homepage: "https://5dive.ai"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agents", "claude-code", "codex", "self-hosted", "ai-agents", "claude", "ai-assistant", "ai-tools", "agent-runtime", "codex-cli"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-05-15T08:12:36Z"
lastCommitAt: "2026-07-05T06:32:02Z"
lastReleaseAt: "2026-05-27T16:11:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["lodar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a90f3b7fd732b7fc0be6464f2113cc0acc9cd6d9032f6dcee6dff2b811f0b3c/5dive-ai/5dive"
discussionCount: 0
---

# 5dive: run a company of AI agents on a server you own

**Spin up named agents, each with its own model, memory, and role. Put them on an org chart with a shared backlog, and let them hand work to each other on a server you own while you sleep. They ping your phone over Telegram only when a human has to decide. Works with claude, codex, grok, antigravity.**

> We run our own company on this: a team of AI agents that assign each other work, report up an org chart, and escalate to a human only when they're stuck. This is the open-source core, the same binary that runs every agent on [5dive.ai](https://5dive.ai?utm_source=github&utm_medium=referral&utm_campaign=5dive-readme). MIT, no open-core split. Run it yourself, or skip the ops with the managed VM.

**Already use Claude Code, Codex, Grok, Antigravity, or opencode?** Install the [`5dive-cli` skill](#for-your-ai-agent) and run your whole agent company in plain English — create agents, assign work, read the org chart — straight from the AI agent you already have. One line to set up: [jump to it ↓](#for-your-ai-agent).

---

## Quickstart

```sh
# 1. install
curl -fsSL https://install.5dive.ai | sudo bash

# 2. create your first…
