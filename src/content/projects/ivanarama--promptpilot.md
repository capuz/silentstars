---
repo: "ivanarama/PromptPilot"
name: "PromptPilot"
description: "Background task queue for Claude Code and other AI CLIs — web UI + Telegram bot"
originalDescription: "Background task queue for Claude Code and other AI CLIs — web UI + Telegram bot"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/ivanarama/PromptPilot"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "claude-code", "herdr", "herdr-plugin", "telegram-bot"]
stars: 20
forks: 11
openIssues: 7
closedIssues: 25
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-03-29T22:34:31Z"
lastCommitAt: "2026-10-31T09:53:29Z"
lastReleaseAt: "2026-09-23T18:40:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["ivanarama", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/0283d66ac1fb7aaa1849ef354c2f09d6cd4f9e27ea516e48e506a2713a40d836/ivanarama/PromptPilot"
discussionCount: 0
---

# PromptPilot

> **Background task queue for AI CLIs** — schedule prompts, retry on rate limits, manage everything via Web UI or Telegram bot.
>
> Works with Claude Code, OpenAI Codex, Qwen Code, Cursor Agent, or any CLI that accepts a prompt argument.

---

Universal prompt scheduler for AI CLIs — queue, scheduling, and automatic retry.

Works with **any** AI CLI: Claude Code, Codex, Qwen Code, and others.

## Features

- **Multi-provider** — Claude, Codex, Qwen, Cursor Agent, or any custom CLI
- **Task queue** with priorities (1 — highest, 10 — lowest)
- **Scheduling** — run prompts at a specified time
- **Model selection** — for Claude Code providers (sonnet/opus/haiku) and any providers with an explicit `models` list (Web UI + bot)
- **Rate limit detection** — automatic detection of API limits; provider overload (529 overloaded) is distinguished from exhausted quota and is named as such in the notification
- **Exponential backoff** — retry with increasing delay (60s → 1h)
- **Crash recovery** — when the worker restarts, hung tasks return to the queue
- **CLI + Web UI** — two interfaces to choose from
- **Telegram bot** — manage tasks via Telegram with…
