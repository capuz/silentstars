---
repo: "initxy/noeta"
name: "noeta"
description: "Open-source, Claude Code–compatible coding agent. Crash-proof tasks, zero-cost waits for approval, laptop to multi-server. Works with Claude, DeepSeek, OpenAI-compatible models. TUI · CLI · ACP · HTTP · Python SDK."
readmeQualityOk: true
url: "https://github.com/initxy/noeta"
homepage: "https://initxy.github.io/noeta/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["acp", "agent-sdk", "agentic-ai", "ai-agent", "ai-coding", "anthropic", "claude-code", "cli", "coding-agent", "deepseek"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-01T15:24:31Z"
lastCommitAt: "2026-11-07T10:36:19Z"
lastReleaseAt: "2026-11-06T14:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["initxy"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4a6e402033405d0dc0753ffdac7311c5bb0243e0c74aa1ae0f46a609a382c88/initxy/noeta"
discussionCount: 0
---

Claude Code–compatible · one Postgres, any number of workers · any worker continues any task · waiting holds no process

---

**noeta** is a coding agent that looks like Claude Code to the model and runs like a server
program for you. The model gets Claude Code's tools, prompt rules, reminders and request shape,
so the habits models learned on Claude Code carry over, and your Claude Code settings, hooks,
skills, agents, MCP servers and plugins work too. Underneath, every task is a log in a store:
point any number of workers at one Postgres and any of them continues any task, while a task
that waits for a person holds no process at all. It also runs on one laptop with SQLite, in your
terminal or embedded in Python.

## Why noeta

- 🌐 **Self-host it on many workers.** One Postgres store, any number of `noeta worker`
  processes, `noeta serve` in front. No worker owns a task: each step is claimed, run and
  appended to the task's log, so the next step can run anywhere. A deploy, a crash or a lost
  machine only moves the task to another worker; a tool call that was in flight is reported to
  the model as "outcome unknown", never silently run twice.
- ⏸️ **Waiting holds no process.**…
