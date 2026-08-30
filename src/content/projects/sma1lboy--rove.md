---
repo: "Sma1lboy/rove"
name: "rove"
description: "Rove — the agent multiplexer for your terminal. Run coding agents on parallel tasks with isolated worktrees and persistent sessions."
readmeQualityOk: true
url: "https://github.com/Sma1lboy/rove"
homepage: "https://rove.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agentic-ai", "ai", "ai-agents", "ai-coding-assistant", "anthropic", "bun", "claude-code", "cli", "codex", "coding-agent"]
stars: 114
forks: 7
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-05-09T10:03:04Z"
lastCommitAt: "2026-08-30T00:43:38Z"
lastReleaseAt: "2026-05-11T03:02:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 33
maintainers: ["Sma1lboy", "github-actions[bot]", "NarwhalChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/de89c3d70cc91eaef024a2b0704309ddfe0ffc89bf62226491a465d09355d566/Sma1lboy/rove"
discussionCount: 8
---

# Rove: the agent multiplexer for your terminal

</p>

Rove is a terminal-native workspace for running multiple coding tasks in parallel with [Claude Code](https://claude.com/claude-code), [Codex](https://github.com/openai/codex), [Copilot](https://github.com/github/copilot-cli), Kimi, or any CLI you register.

Rove isolates parallel work in git worktrees and branches, while agent and shell sessions keep running when you disconnect.

</p>

</p>

</p>

The sidebar tracks tasks and their sessions. The workspace embeds the active agent or shell. The files pane shows what changed in the worktree. Switch tasks to read output, inspect a diff, run tests, or send the next instruction.

## Quick start

One line on a machine with nothing installed. It sets up the Bun runtime Rove needs, then Rove itself:

```bash
curl -fsSL https://rove.run/install.sh | sh
```

Or use the package manager you already have:

```bash
npm install -g @sma1lboy/rove   # offers to install Bun on first launch
bun install -g @sma1lboy/rove   # if you already run Bun
npx @sma1lboy/rove              # try it without installing
```

To let a coding agent drive Rove itself, install the skill:

```bash
rove skill install…
