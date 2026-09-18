---
repo: "chnlich/charlie-bot"
name: "charlie-bot"
description: "Personal assistant based on agents (claude code / codex / opencode) to do the daily work"
readmeQualityOk: true
url: "https://github.com/chnlich/charlie-bot"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [73, 21]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T21:11:44Z"
lastCommitAt: "2026-09-18T14:03:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["chnlich"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c468a722d35fac9f601187fad865238e02230c36a6b5674eff76ff9517c2fe4/chnlich/charlie-bot"
---

# CharlieBot

CharlieBot is a self-hosted multi-agent orchestration system: a master agent drives worker and reviewer agents across pluggable LLM CLI backends, operated through a web UI.

## Features

### Orchestration

- Master/worker/reviewer delegation in isolated git worktrees, integrated by fast-forward-only pushes to the base branch
- Pluggable backends: Claude Code, Kimi, OpenAI-compatible, Codex, Gemini CLI, OpenCode, Charlie Code, Antigravity CLI
- Chat file uploads: text attachments ride the message's path text; image attachments reach the Charlie Code CLI as repeated `--image` flags by default, and are refused with one error event (nothing sent) when the backend entry sets `image_input: false`
- `charliebot improve` autonomous change-run-verify iteration loops
- Plan registry (`charliebot plan`) with HTML plan artifacts and anchored comments

### Automation

- Cron scheduled tasks in prompt, handler, loop, and task-chain (`steps`) modes
- Delayed triggers (`charliebot schedule-trigger`) watching local/remote PIDs and SLURM jobs; one trigger can watch many targets
- `charliebot remote-launch` for long-running remote commands
- Slash commands hot-reloaded from YAML

###…
