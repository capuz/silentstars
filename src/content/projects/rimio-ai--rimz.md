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
stars: 30
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-07-20T18:05:31Z"
lastCommitAt: "2026-10-01T10:24:21Z"
lastReleaseAt: "2026-07-21T04:15:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 51
maintainers: ["rimioai"]
openGraphImageUrl: "https://opengraph.githubassets.com/e73e468d2eb625a6ac1d18e0f5e8057411e5737f46add87eb6b53841357279f9/rimio-ai/rimz"
discussionCount: 0
---

██████╗ ██╗███╗   ███╗  ███████╗
  ██╔══██╗██║████╗ ████║  ╚══███╔╝
 ██████╔╝██║██╔████╔██║    ███╔╝
██╔══██╗██║██║╚██╔╝██║   ███╔╝
  ██║  ██║██║██║ ╚═╝ ██║  ███████╗
  ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚══════╝
  The control room for your coding agents
</pre></div>

</p>

</p>

---

RimZ puts your coding agents in one Zellij or tmux room and routes your attention to whichever one needs you. Every agent gets a live card in the sidebar (state, task, context health, live cost), so one human follows tens of agents at a glance, and one click lands in the pane that is waiting.

  <br/><sub>The sidebar triages the fleet on the left; agents work in their own panes.</sub>
</p>

RimZ is one lightweight binary inside the Zellij or tmux you already run. Your keybinds stay, the agent CLIs run stock, and the official web, desktop, and mobile apps keep working untouched.

That small footprint carries the primitives **harness engineering** and **loop engineering** build on: the sidebar for observability, one command grammar for [every supported agent](#agent-compatibility-matrix), durable messages that steer and queue, supervised runs with exit codes for scripts and CI, teams and subagents that split work…
