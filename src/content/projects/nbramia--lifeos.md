---
repo: "nbramia/LifeOS"
name: "LifeOS"
description: "Personal assistant, data aggregation, and CRM integrating Obsidian, Gsuite, and messaging"
readmeQualityOk: true
url: "https://github.com/nbramia/LifeOS"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 26
forks: 5
openIssues: 14
closedIssues: 327
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2026-01-07T20:56:39Z"
lastCommitAt: "2026-08-28T14:33:16Z"
lastReleaseAt: "2026-07-10T13:14:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["nbramia"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ebd60661223358602e4b574dc0a748755686dba679a9497bf70f6cea26dedf/nbramia/LifeOS"
---

# LifeOS

**Your personal operating system, built from the digital exhaust of your life.**

LifeOS is a self-hosted AI assistant that connects to your Gmail, Google Calendar, Google Docs/Sheets/Drive, iMessage, phone calls, WhatsApp, Slack, Obsidian vault, Granola meeting transcripts, iPhotos, LinkedIn, Apple contacts, Monarch finances, and Apple Health — then makes all of it **available and actionable through natural language.**

You can talk to it by text or **voice**, through a web chat, through Telegram, or through any MCP client (Claude Desktop, Claude Code). It can answer from your data, take action on your behalf (draft email, schedule things, edit files), and hand long tasks to an autonomous agent that works while you don't.

All of your data is indexed and stored **locally** — your vault, messages, photos, financial summaries, and health data never leave your machine. By default, orchestration and synthesis call the Claude API (`LIFEOS_LLM_BACKEND=anthropic`, the default), which sends the current query and its retrieved context to Anthropic; set `LIFEOS_LLM_BACKEND=local` to route everything through a local llama-server and keep inference on your own hardware too. A…
