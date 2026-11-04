---
repo: "adxd-og/omelette-fleet"
name: "omelette-fleet"
description: "Gemini, Grok and Codex as read-only research & review units inside Claude Code — on the subscriptions you already pay for."
readmeQualityOk: true
url: "https://github.com/adxd-og/omelette-fleet"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["ai-agents", "claude-code", "codex", "developer-tools", "gemini", "grok", "mcp"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-03T12:14:08Z"
lastCommitAt: "2026-11-04T11:14:52Z"
lastReleaseAt: "2026-09-11T09:21:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 49
maintainers: ["adxd-og"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1355938298/892308f9-d036-42ec-af53-2138a2f6d8c0"
---

| Question | Where |
|---|---|
| What is this, and who is it for? | [What it is](#what-it-is) |
| How do I install it and wire it into a project? | [Quickstart](#quickstart) |
| What can I ask the units to do? | [What you can ask it](#what-you-can-ask-it) |
| How does my session work with the units? | [How a session works with it](#how-a-session-works-with-it) |
| Can a unit change my code? | [Is it really read-only?](#is-it-really-read-only) |
| Where is everything else? | [Documentation](#documentation) |
| Why CLIs, why read-only, and how does it compare to similar tools? | [FAQ](#faq) |

## What it is

Omelette Fleet adds three outside models to Claude Code as research and review peers: Google Gemini, xAI Grok and OpenAI Codex. Each one is a **unit**: a small MCP server (the way Claude Code talks to tools) that runs the vendor's own CLI, `agy`, `grok` or `codex`, on the subscription you already pay for. It is for people who work in Claude Code and want a second vendor's research or review without leaving the session. The one rule: **units propose, the session applies.** A unit reads, searches and reviews, and hands back text. Your Claude Code conversation, the **session**,…
