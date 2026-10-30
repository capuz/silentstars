---
repo: "chnlich/charlie-bot"
name: "charlie-bot"
description: "Personal assistant based on agents (claude code / codex / opencode) to do the daily work"
readmeQualityOk: true
url: "https://github.com/chnlich/charlie-bot"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-16T21:11:44Z"
lastCommitAt: "2026-10-30T10:21:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["chnlich"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/chnlich/charlie-bot"
---

# CharlieBot

CharlieBot is a self-hosted multi-agent orchestration system: a master agent drives worker and reviewer agents across pluggable LLM CLI backends, operated through a web UI.

## Features

### Orchestration

- Master/worker/reviewer delegation in isolated git worktrees, integrated by fast-forward-only pushes to the base branch
- Pluggable backends: Claude Code, Anthropic-compatible, OpenAI-compatible, Codex, Gemini CLI, OpenCode, Charlie Code, Antigravity CLI
- Chat file uploads: text attachments ride the message's path text; image attachments reach the Charlie Code CLI as repeated `--image` flags by default, and are refused with one error event (nothing sent) when the backend entry sets `image_input: false`
- `charliebot improve` autonomous change-run-verify iteration loops
- Plan registry (`charliebot plan`) with HTML plan artifacts and anchored comments

### Automation

- Cron scheduled tasks in prompt, handler, loop, and task-chain (`steps`) modes
- Manual run of a scheduled task: `POST /api/cron/tasks/{name}/run` fires it once through the scheduled path
- Delayed triggers (`charliebot schedule-trigger`) watching local/remote PIDs and SLURM jobs; one trigger can…
