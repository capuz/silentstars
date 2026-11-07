---
repo: "Sma1lboy/rove"
name: "rove"
description: "Rove — the agent multiplexer for your terminal. Run coding agents on parallel tasks with isolated worktrees and persistent sessions."
readmeQualityOk: true
url: "https://github.com/Sma1lboy/rove"
homepage: "https://rove.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["agentic-ai", "ai", "ai-agents", "ai-coding-assistant", "anthropic", "bun", "claude-code", "cli", "codex", "coding-agent"]
stars: 184
forks: 12
openIssues: 0
closedIssues: 41
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-05-09T10:03:04Z"
lastCommitAt: "2026-11-07T22:51:25Z"
lastReleaseAt: "2026-05-11T03:02:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 31
maintainers: ["Sma1lboy", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1233749549/2e60aeae-dece-41c4-8918-b6b08af91583"
discussionCount: 15
---

# Rove: the agent multiplexer for your terminal

Rove is a terminal-native workspace for running multiple coding tasks in parallel with [Claude Code](https://claude.com/claude-code), [Codex](https://github.com/openai/codex), [Copilot](https://github.com/github/copilot-cli), Kimi, Gemini CLI, OpenCode, Cursor Agent, [and more](https://github.com/Sma1lboy/rove/blob/HEAD/docs/ENGINES.md), or any CLI you register.

Rove isolates parallel work in git worktrees and branches, while agent and shell sessions keep running when you disconnect.

The sidebar tracks tasks and their sessions. The workspace embeds the active agent or shell. The files pane shows what changed in the worktree. Switch tasks to read output, inspect a diff, run tests, or send the next instruction.

## How it fits together

```mermaid
flowchart LR
  subgraph phone["Phone"]
    app["iOS / Android app"]
    wxapp["WeChat"]
  end

  subgraph laptop["Your machine"]
    tui["TUI and rove api<br/>(you, scripts, agents)"]
    browser["Browser page"]
    bridge["rove-bridge<br/>(rove --web)"]
    core["Daemon<br/>tasks, issue store,<br/>PR poller, machine hub"]
    routines["Routines<br/>(cron, run by the daemon)"]
    pty["PTY…
