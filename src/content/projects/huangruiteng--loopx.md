---
repo: "huangruiteng/loopx"
name: "loopx"
description: "Loop engineering for long-running AI agents."
url: "https://github.com/huangruiteng/loopx"
homepage: "https://huangruiteng.github.io/loopx/docs/showcases/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-control-plane", "ai-agents", "codex", "loopx", "loop-engineering", "agent-ops", "long-running-agents", "workflow-automation"]
stars: 47
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-31T14:58:56Z"
lastCommitAt: "2026-06-28T01:36:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["huangruiteng"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c0b5536654c31a16dd01e319e282e5eaee989eccda4e555db2422fb7d2f6fcb/huangruiteng/loopx"
discussionCount: 1
---

# LoopX

**Loop engineering for long-running AI agents.**

**Manage long-running agents like digital workers.**

**把会干活的 Agent，接成可管理、可复盘、可持续改进的数字员工。**

LoopX is a local control plane for loop engineering. It helps Codex,
Claude Code, Cursor, and other agent runtimes keep working on goals that span
hours, days, handoffs, and changing human feedback.

Use it when an agent is already useful for one session, but the work is too
long, too gated, or too easy to lose across restarts. LoopX turns that agent
surface into a reviewable Loop Agent: stable objective, explicit gates, scoped
next actions, evidence, cost, and handoff state. The agent still needs a CLI,
goal mode, automation hook, or loop scheduler; LoopX supplies the control
plane, not hidden autonomy.

Under the hood, LoopX keeps goals, gates, todos, claims, scopes, evidence, run
history, quota, and human decisions in one compact layer. Product surfaces fold
those mechanics into five questions a user can act on: what is the goal, what
is next, what needs human judgment, what evidence changed, and whether the loop
can be handed back to the agent.

LoopX 把一次静态 goal 变成能持续流转的动态 loop：该等人的地方明确等人，
不该空等的安全侧路继续推进，下一轮 agent…
