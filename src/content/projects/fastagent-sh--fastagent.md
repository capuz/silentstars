---
repo: "fastagent-sh/fastagent"
name: "fastagent"
description: "Vibe first. Then FastAgent — turn a local agent directory into a live service: in your app, on GitHub, in Telegram, or any channel."
readmeQualityOk: true
url: "https://github.com/fastagent-sh/fastagent"
homepage: "https://fastagent.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["typescript", "agents-md", "llm", "ai-agents", "telegram-bot", "agent-framework", "feishu"]
stars: 65
forks: 3
openIssues: 7
closedIssues: 102
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-11T14:07:39Z"
lastCommitAt: "2026-10-29T14:03:23Z"
lastReleaseAt: "2026-07-04T12:04:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 37
maintainers: ["kid7st"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1266321081/22110a7f-5e43-478f-9933-2be77650381f"
discussionCount: 1
---

A file-defined agent directory can become a live service. FastAgent takes it out of the terminal and serves it in your Next/Astro app, Telegram, Slack, Feishu, on a clock, or behind your own channel.

Leave the terminal. Become a live service.

- **Add it to your app** — one route, your auth, your database, your host.
- **Run it as a live service** — Telegram, Slack or Feishu bot, webhook handler, schedule, or custom channel.

FastAgent is not a new agent-authoring DSL. You bring the existing definition and project layout; FastAgent provides the serving runtime and adapters around it.

## Why FastAgent

Coding agents made it cheap to vibe useful agent directories. The hard part is the next step: local agents live in terminals, but real services receive webhooks, join chats, run on a clock, and keep their conversations across restarts.

FastAgent is the missing bridge from local agent directory to live service.

## Features

- **Vibe first — an agent is a directory of its own.** A `SYSTEM.md` prompt, reusable skills, and TypeScript tools stay as files you inspect, edit, and commit — no new DSL, no framework rewrite. The projects it works on are declared beside it as its content,…
