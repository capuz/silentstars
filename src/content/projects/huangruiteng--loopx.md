---
repo: "huangruiteng/loopx"
name: "loopx"
description: "Loop engineering for long-running AI agents."
url: "https://github.com/huangruiteng/loopx"
homepage: "https://huangruiteng.github.io/loopx/docs/showcases/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["agent-control-plane", "ai-agents", "codex", "loopx", "loop-engineering", "agent-ops", "long-running-agents", "workflow-automation"]
stars: 81
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-05-31T14:58:56Z"
lastCommitAt: "2026-07-04T06:12:40Z"
lastReleaseAt: "2026-07-04T04:58:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 31
maintainers: ["huangruiteng"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b85e902ef13f9d0a761978b6452747bf3ae0904e49e0883e2bad2861c1b4283/huangruiteng/loopx"
discussionCount: 1
---

**Loop engineering for long-running AI agents.**

<sub>Manage Codex, Claude Code, Cursor, and other agent runtimes like
reviewable digital workers: objectives, gates, todos, quota, evidence, and handoff
state in one local control plane.</sub>

**把会干活的 Agent，接成可管理、可复盘、可持续改进的数字员工。**

</div>

---

LoopX is a local control plane for agent loops that last longer than one chat
turn. It does not replace Codex, Claude Code, Cursor, or another runtime; it
keeps the shared state those runtimes need to continue safely across hours,
days, handoffs, blocked lanes, and changing human feedback.

Use it when an agent is already useful for one session, but the work is too
long, too gated, or too easy to lose across restarts. LoopX turns that agent
surface into a reviewable Loop Agent: stable objective, explicit gates, scoped
next actions, evidence, cost, and handoff state. The agent still needs a CLI,
task mode, automation hook, or loop scheduler; LoopX supplies the control
plane, not hidden autonomy.

[Quick Start](#quick-start) · [How It Works](#how-it-works) · [See It In Action](#see-it-in-action) ·
[Hosted Frontstage](https://huangruiteng.github.io/loopx/frontstage/) ·…
