---
repo: "Sma1lboy/rove"
name: "rove"
description: "Rove — the agent multiplexer for your terminal. Run coding agents on parallel tasks with isolated worktrees and persistent sessions."
readmeQualityOk: true
url: "https://github.com/Sma1lboy/rove"
homepage: "https://rove.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["agentic-ai", "ai", "ai-agents", "ai-coding-assistant", "anthropic", "bun", "claude-code", "cli", "codex", "coding-agent"]
stars: 178
forks: 12
openIssues: 1
closedIssues: 39
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-05-09T10:03:04Z"
lastCommitAt: "2026-10-21T20:00:57Z"
lastReleaseAt: "2026-05-11T03:02:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 31
maintainers: ["Sma1lboy", "github-actions[bot]", "wisp-agent-ai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1233749549/2e60aeae-dece-41c4-8918-b6b08af91583"
discussionCount: 13
---

# Rove: the agent multiplexer for your terminal

Rove is a terminal-native workspace for running multiple coding tasks in parallel with [Claude Code](https://claude.com/claude-code), [Codex](https://github.com/openai/codex), [Copilot](https://github.com/github/copilot-cli), Kimi, Gemini CLI, OpenCode, Cursor Agent, [and more](https://github.com/Sma1lboy/rove/blob/HEAD/docs/ENGINES.md), or any CLI you register.

Rove isolates parallel work in git worktrees and branches, while agent and shell sessions keep running when you disconnect.

The sidebar tracks tasks and their sessions. The workspace embeds the active agent or shell. The files pane shows what changed in the worktree. Switch tasks to read output, inspect a diff, run tests, or send the next instruction.

## Quick start

Install Rove, then launch it in a repository. Rove runs on [Bun](https://bun.sh) ≥ 1.3.11, and the install script sets Bun up if you don't have it.

```bash
curl -fsSL https://rove.run/install.sh | sh
cd your-repo
rove
```

Press `n` to create your first task. You need git and at least one supported agent CLI on `PATH`; other install methods are under [Install](#install).

To let a coding agent drive Rove…
