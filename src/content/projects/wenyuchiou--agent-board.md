---
repo: "WenyuChiou/agent-board"
name: "agent-board"
description: "A local dashboard for AI agents that shows what each one is doing and which one is waiting on you. Works with Claude Code, Codex, Antigravity, Cursor, OpenCode, Grok Build and Hermes Agent. Runs on your computer, keeps everything in one Markdown file, no account."
readmeQualityOk: true
url: "https://github.com/WenyuChiou/agent-board"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 43]
topics: ["ai-agents", "antigravity", "claude-code", "cli", "codex", "coding-agents", "cursor", "developer-tools", "local-first", "opencode"]
stars: 60
forks: 7
openIssues: 197
closedIssues: 571
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-10-16T19:59:16Z"
lastCommitAt: "2026-11-14T10:27:53Z"
lastReleaseAt: "2026-11-10T23:45:21Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 39
maintainers: ["WenyuChiou", "RyanGosling0508", "SUPERD6"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1422618347/2b859fe9-3c61-4f95-b7bb-4c0668801ac3"
---

Claude Code, Codex, Antigravity and other AI agents report to one board on your computer. When one stops to ask you something, its question goes to the top within seconds, so you stop hunting through windows. One Markdown file, no account.

## Quick start

With Node.js 22+, in any terminal:

```sh
npx @wenyuchiou/agent-board@next setup
```

Then open a new session of your agent and run:

```sh
npx @wenyuchiou/agent-board@next
```

- `setup` shows what it will change and asks once before it writes.
- In that new session, type `/agent-board` (`$agent-board` in Codex; in Hermes, ask it for the Agent Board skill), or run the second command (Cursor has no such command).
- Per-agent steps, language, options and other ways to install: [setup guide](https://github.com/WenyuChiou/agent-board/blob/HEAD/docs/SETUP.md#after-setup-per-agent).

## What you get

- **Questions first.** A question an agent is waiting on goes to the top, with a button for each option it can read, or you write your own answer.
- **Every agent stays where it is.** Agents keep running in their own terminals; the board reads what their hooks report.
- **Local and plain.** One Markdown file you can read and edit, a page…
