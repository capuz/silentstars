---
repo: "5dive-ai/5dive"
name: "5dive"
description: "Run a company of AI agents on a server you own. Spin up named agents (claude, codex, pi…), put them on an org chart with a shared backlog, let them hand off work and ping your phone only when a human must decide. MIT."
readmeQualityOk: true
url: "https://github.com/5dive-ai/5dive"
homepage: "https://5dive.ai"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["claude-code", "self-hosted", "ai-agents", "agent-runtime", "codex-cli", "zero-human-company", "multi-agent", "autonomous-agents", "loop-engineering", "agent-loops"]
stars: 64
forks: 11
openIssues: 12
closedIssues: 17
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-05-15T08:12:36Z"
lastCommitAt: "2026-10-03T09:13:51Z"
lastReleaseAt: "2026-05-27T16:11:44Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 35
maintainers: ["5dive-bot", "lodar", "chemmonitor"]
openGraphImageUrl: "https://opengraph.githubassets.com/baa02991b4f3913756a394ee203b7df23742c8fa0ea214b4b69cb4784e4ea79d/5dive-ai/5dive"
discussionCount: 4
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

Run one persistent agent, or grow it into a team. They take work off a shared SQLite task queue, talk to each other, hand work off while you sleep, and you decide the rest on your phone. Works with every major agent CLI.

> **We run our own company on this.** The agents that build 5dive.ai cut this repo's releases. We keep the calls on spend, publishing and anything destructive. The badge up top is that claim, measured: releases shipped versus decisions escalated to a human. Same binary you're installing. MIT, no open-core. Run it yourself, or skip the ops with the [managed VM](https://5dive.ai?utm_source=github&utm_medium=owned&utm_campaign=5dive-readme).

**Run…
