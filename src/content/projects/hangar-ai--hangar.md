---
repo: "hangar-ai/hangar"
name: "hangar"
description: "Run a team of Claude Code agents in one native window (Rust, no Electron): a shared task board and memory over MCP, an orchestrator that runs workers in git worktrees and lands what they deliver, and Hangar Mobile to steer them from your phone. Claude Code only. Local, open source."
readmeQualityOk: true
url: "https://github.com/hangar-ai/hangar"
homepage: "https://hangarai.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai-agents", "claude-code", "coding-agents", "developer-tools", "git-worktree", "mcp", "model-context-protocol", "multi-agent", "orchestration", "terminal"]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-08-05T00:23:17Z"
lastCommitAt: "2026-11-19T05:04:54Z"
lastReleaseAt: "2026-08-10T14:05:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["simnJS"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1323482379/459a396e-aefb-427d-a12c-1ee326802a70"
---

Hangar is an open-source native desktop app written in Rust (no Electron), built for **Claude
Code only**: it runs the Claude Code already on your machine, as many sessions as you need, and
gives them a shared board, a shared memory and an orchestrator. Other coding agents (Codex,
Gemini CLI, OpenCode) are not supported since 2.0; a pane can still be a plain shell.
No telemetry, ever. Everything works with no account; an
optional Hangar account (Settings › Hangar account, off by default) links your machines and
syncs your usage statistics between them. Until you sign in, nothing leaves your PC. Once you
do, and only if you turn the sync on, Hangar sends totals per machine, day, model and project
name (tokens, active time and cost), never a path, a prompt or any code. What is sent, and how to
delete it, is on the [privacy page](https://hangarai.dev/privacy.html).
