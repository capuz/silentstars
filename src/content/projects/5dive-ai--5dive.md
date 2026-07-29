---
repo: "5dive-ai/5dive"
name: "5dive"
description: "Run a company of AI agents on a server you own. Spin up named agents (claude, codex, pi…), put them on an org chart with a shared backlog, let them hand off work and ping your phone only when a human must decide. MIT."
readmeQualityOk: true
url: "https://github.com/5dive-ai/5dive"
homepage: "https://5dive.ai"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["agents", "claude-code", "codex", "self-hosted", "ai-agents", "claude", "ai-assistant", "ai-tools", "agent-runtime", "codex-cli"]
stars: 30
forks: 4
openIssues: 9
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-15T08:12:36Z"
lastCommitAt: "2026-07-29T06:14:13Z"
lastReleaseAt: "2026-05-27T16:11:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 44
maintainers: ["lodar", "A-MO7SEN"]
openGraphImageUrl: "https://opengraph.githubassets.com/da909c4262babf02c987273dc5661992e2c5b01cf6704d1e4363c024a09d69c7/5dive-ai/5dive"
discussionCount: 3
---

<picture>
      <source media="(prefers-color-scheme: dark)" srcset="docs/readme-hero-dark.png">
    </picture>
  </a>
</p>

</p>

</p>

</p>

**A company of AI agents, and the orchestrator is just bash.** No framework, no protocol, no broker: each agent is its own Linux user running an official coding CLI (claude, codex, a few others) as a systemd service, coordinating through one bash CLI they all call. Isolation is unix users, supervision is systemd, logs are journald. **I used the OS instead of building a platform.**

They take work off a shared SQLite task queue, hand it to each other while you sleep, and ping your phone over Telegram only when a human has to decide. Works with every major agent CLI.

> **We run our own company on this.** The agents that build 5dive.ai cut this repo's releases, and only ask a human when they're stuck. The badge up top is that claim, measured: releases shipped versus decisions escalated to a human. Same binary you're installing. MIT, no open-core. Run it yourself, or skip the ops with the [managed VM](https://5dive.ai?utm_source=github&utm_medium=owned&utm_campaign=5dive-readme).

**Run your whole company in plain language**, from the AI agent…
