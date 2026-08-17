---
repo: "Sma1lboy/rove"
name: "rove"
description: "Rove — the agent multiplexer for your terminal. Run coding agents on parallel tasks with isolated worktrees and persistent sessions."
readmeQualityOk: true
url: "https://github.com/Sma1lboy/rove"
homepage: "https://rove.sma1lboy.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["agentic-ai", "ai", "ai-agents", "ai-coding-assistant", "anthropic", "bun", "claude-code", "cli", "codex", "coding-agent"]
stars: 94
forks: 7
openIssues: 3
closedIssues: 15
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-05-09T10:03:04Z"
lastCommitAt: "2026-08-17T04:18:51Z"
lastReleaseAt: "2026-05-11T03:02:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 34
maintainers: ["Sma1lboy", "github-actions[bot]", "ZHallen122"]
openGraphImageUrl: "https://opengraph.githubassets.com/612bcf26a69c12b017ec38e872a9b90b2ccfc739e58b3fbcb8ece9f5aa7900bf/Sma1lboy/rove"
discussionCount: 8
---

# Rove — the agent multiplexer for your terminal

</p>

Rove is a terminal-native workspace for running multiple coding tasks in parallel with [Claude Code](https://claude.com/claude-code), [Codex](https://github.com/openai/codex), [Copilot](https://github.com/github/copilot-cli), Kimi, or any CLI you register. 

Rove isolates parallel work in git worktrees and branches, while agent and shell sessions keep running when you disconnect.

</p>

</p>

</p>

The sidebar tracks tasks and their sessions, the workspace embeds the active agent or shell, and the files pane shows the worktree's changes. Switch tasks to review output, inspect diffs, run tests, or send the next instruction.

## Quick start

Requires [Bun](https://bun.sh) ≥ 1.3.11, git, and at least one supported agent CLI on `PATH`. Rove runs on macOS, Linux, and Windows; Windows also requires Node.js and Git for Windows/Git Bash.

Try it without installing:

```bash
bunx @sma1lboy/rove
```

Or install it globally, then launch it in a repository:

```bash
bun install -g @sma1lboy/rove
cd your-repo
rove
```

Press `n`, choose a repository, base branch, and agent, then enter a prompt. Press `F1` for the live keybinding…
