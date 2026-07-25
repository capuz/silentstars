---
repo: "huangruiteng/loopx"
name: "loopx"
description: "Lightweight loop engineering state kernel for long-running AI agent teams. Agent-loop agnostic across Codex, Claude Code, and other coding agents, with durable goals, quota-aware auto-wake, executable todos, evidence logs, and verifiable handoffs."
readmeQualityOk: true
url: "https://github.com/huangruiteng/loopx"
homepage: "https://my.feishu.cn/wiki/CaL5wMk9ui17ngkWzeUcMlAYnZg"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agent-control-plane", "ai-agents", "codex", "loopx", "loop-engineering", "agent-ops", "long-running-agents", "workflow-automation"]
stars: 150
forks: 22
openIssues: 3
closedIssues: 11
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-05-31T14:58:56Z"
lastCommitAt: "2026-07-25T06:04:50Z"
lastReleaseAt: "2026-07-07T18:11:48Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["huangruiteng", "xielixing"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ce5023f0687348deca64b92730ed0403625af3ae4b38a4a93475637ae43a6e4/huangruiteng/loopx"
discussionCount: 1
---

**Loop engineering for long-running AI agents and peer agent teams.**

<sub>A lightweight state kernel and agent-agnostic local control plane for
Codex, Claude Code, Cursor, and other runtimes: objectives, gates, todos,
quota, scheduler hints, evidence, and typed continuation in one reviewable loop.</sub>

**把会干活的 Agent，接成可管理、可复盘、可持续改进的数字员工。**

</div>

---

LoopX is a lightweight state kernel and local control plane for loop engineering:
it keeps goals, todos, gates, quota, scheduler hints, evidence, and handoffs
stable while Codex, Claude Code, Cursor, or another runtime executes each
bounded turn. It does not replace your agent runtime; it makes long-running
agent work reviewable, restartable, and easier to hand off.

A useful mental model is an
**[agent-native Kanban for long-running work](https://github.com/huangruiteng/loopx/blob/HEAD/docs/development/control-plane-course/00-concept-primer.md)**.
Its cards carry identity, authority, evidence, and continuation; moves are
validated operators such as claim, gate, monitor, and writeback rather than UI
gestures; capabilities add domain lanes without creating a second control plane.
The board is a projection; LoopX state remains…
