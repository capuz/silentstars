---
repo: "plaited/behavioral"
name: "behavioral"
description: "Behavioral agent harness — a neuro-symbolic, self-improving agent built on the behavioral-programming runtime."
readmeQualityOk: true
url: "https://github.com/plaited/behavioral"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-framework", "behavioral-programming", "bun", "generative-ui", "neuro-symbolic", "at-protocol"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 93
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-11-26T00:22:51Z"
lastCommitAt: "2026-09-23T08:47:46Z"
lastReleaseAt: "2023-10-28T21:25:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 72
maintainers: ["EdwardIrby"]
openGraphImageUrl: "https://opengraph.githubassets.com/72420f3ec1e04471cf128f3416fda86fb3f72f80eff2e1433131b9e76b5aa8ef/plaited/behavioral"
discussionCount: 1
---

# @behavioral/sh

A behavioral agent harness — a neuro-symbolic, self-improving agent built on the
behavioral-programming runtime. The agent ships with an irreducible coordination floor
(the behavioral engine + the turn loop) and grows by composing plugins: everything above the
kernel is a plugin (`plugin.json`), and the agent improves as behaviors, tools, and skills are
added to or removed from a space. Neural generation proposes; symbolic verification disposes; the
exhaust is the teacher.

## Architecture (WIP — research phase)

The defining inversion: **the model is a tool, not the loop driver.** There is no
imperative `while` loop calling the model. `model-respond` is a stateless `useTool`
unit at the same level as `read`/`bash`/`mcp-client`; the agentic loop is a
**behavioral thread** whose `request`/`waitFor` rules the engine's super-step
scheduler interprets, and a **dispatch bridge** (wired into `useTrace`) that performs
the I/O when the engine selects a coordination event.

```mermaid
flowchart TD
  subgraph KERNEL["KERNEL FLOOR — src/kernel/kernel.ts"]
    direction TB
    K_PROV["provisions per process: model tools (scripted by default, live = fetch) · dispatch…
