---
repo: "rararulab/rara"
name: "rara"
description: "Proactive developer agent with tape memory, tool orchestration, and multi-channel interfaces"
readmeQualityOk: true
url: "https://github.com/rararulab/rara"
homepage: "https://rararulab.github.io/rara/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agent-framework", "ai-agent", "developer-tools", "kernel", "llm", "multi-agent", "proactive-agent", "rust", "telegram-bot", "tape-memory"]
stars: 10
forks: 0
openIssues: 107
closedIssues: 966
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-02T07:52:51Z"
lastCommitAt: "2026-07-11T05:56:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["crrow"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e4099a2d7c7edec3d643e9fcfcec51299200576dad602bdcdb3b06e4ad4b2d4/rararulab/rara"
---

</p>

<h1 align="center">rara</h1>

  <em>your agent, harnessed by kernel</em>
</p>

</p>

</p>

> **Work in Progress** — APIs, behavior, and module boundaries may change at any time.

---

Think of an agent as a **process**. Rara is its **kernel**.

An operating system doesn't tell a process what to compute — it provides scheduling, memory, I/O, and protection. Rara does the same for agents: lifecycle, memory, tool access, channels, and guardrails. You define the behavior. Rara runs it.

## Highlights

- **Kernel architecture** — OS-inspired event loop: LLM, Tool, Memory, Session, Guard, EventBus
- **Tape memory** — Append-only fact model with anchors, handoffs, and sessions ([tape.systems](https://tape.systems))
- **Proactive** — Heartbeat-driven background actions, not just request-response
- **Multi-channel** — Telegram, Web, TUI, WeChat — one agent, many I/O surfaces
- **Skills** — Extensible capability system without touching core
- **Gateway** — Supervisor that boots, restarts, and auto-deploys on git updates — like a bootloader for your agent OS

## Inspired By

- Kernel architecture inspired by [OpenFang](https://github.com/pchaganti/gx-openFang)
- Tape memory system from…
