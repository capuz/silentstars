---
repo: "rimio-ai/rimz"
name: "rimz"
description: "RimZ is a realtime dashboard and control room for harnessing agentic coding, build on tmux and Zellij."
readmeQualityOk: true
url: "https://github.com/rimio-ai/rimz"
homepage: "https://rimz.rimio.ai/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent-orchestration", "agentic-ai", "agentic-coding", "ai-agents", "ai-coding", "anthropic", "claude-code", "codex", "coding-agent", "devtools"]
stars: 32
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-20T18:05:31Z"
lastCommitAt: "2026-10-19T08:53:11Z"
lastReleaseAt: "2026-07-21T04:15:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["rimioai"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/rimio-ai/rimz"
discussionCount: 0
---

██████╗ ██╗███╗   ███╗  ███████╗
  ██╔══██╗██║████╗ ████║  ╚══███╔╝
 ██████╔╝██║██╔████╔██║    ███╔╝
██╔══██╗██║██║╚██╔╝██║   ███╔╝
  ██║  ██║██║██║ ╚═╝ ██║  ███████╗
  ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚══════╝
  The control room for your coding agents

---

RimZ puts your coding agents in one Zellij or tmux room and routes your attention to whichever one needs you. Every agent gets a live card in the sidebar (state, task, context health, live cost), so one human follows tens of agents at a glance, and one click lands in the pane that is waiting.

RimZ is one lightweight binary inside the Zellij or tmux you already run. Your keybinds stay, the agent CLIs run stock, and the official web, desktop, and mobile apps keep working untouched.

That small footprint carries the primitives **harness engineering** and **loop engineering** build on: the sidebar for observability, one command grammar for [every supported agent](#agent-compatibility-matrix), durable messages that steer and queue, supervised runs with exit codes for scripts and CI, teams and subagents that split work across models, wakeups that put the fleet on a clock or on an event, and dollar budgets that bound what it spends. The…
