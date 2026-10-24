---
repo: "timoncool/telegram-api-mcp"
name: "telegram-api-mcp"
description: "Ultimate Telegram Bot API MCP server — full v9.6 coverage, meta-mode, rate limiting, circuit breaker. TypeScript."
readmeQualityOk: true
url: "https://github.com/timoncool/telegram-api-mcp"
homepage: "https://www.npmjs.com/package/telegram-api-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-tools", "chatbot", "claude", "mcp", "mcp-server", "model-context-protocol", "telegram", "telegram-bot-api", "typescript"]
stars: 33
forks: 10
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T01:26:09Z"
lastCommitAt: "2026-10-24T08:07:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 58
undervaluedScore: 36
maintainers: ["github-actions[bot]", "timoncool"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ac5f8c59f75768c76991634f52687fc250581d78f771cfbe84d4e7b8a0532ac/timoncool/telegram-api-mcp"
fundingLinks: ["CUSTOM:https://github.com/timoncool/ACE-Step-Studio/blob/master/DONATE.md", "CUSTOM:https://dalink.to/nerual_dreming", "CUSTOM:https://boosty.to/neuro_art"]
---

# telegram-api-mcp

**Ultimate MCP server for Telegram Bot API — 185 methods, full v10.2 coverage, rich messages, meta-mode, rate limiting, circuit breaker.**

185/185 Bot API methods with Zod validation, token masking, tool annotations, and zero bloat (2 dependencies).

## Features

- **185/185 Bot API methods** — messages, media, polls, chats, forums, stickers, payments, business, stories, gifts, games, inline, managed bots
- **Rich messages** — post up to 32768 characters with headings, tables, lists, collages, slideshows, footnotes and up to 50 inline media, instead of the 1024-character caption ceiling
- **Bot API 10.2** (July 2026) — rich messages, ephemeral messages, live photos, guest mode, join-request queries, poll media
- **`telegram_format` tool** — the server explains the exact shape of `rich_message`, `media`, `reply_markup`, `poll` and more *before* you send, so an agent never has to guess the syntax (also exposed as MCP resources under `telegram://format/…`)
- **Meta-mode** — 2 tools instead of 185, saves ~99% context tokens
- **Rate limiting** — global (30 req/sec) + per-chat (20 msg/min), token bucket with async mutex
- **Circuit breaker** — 3-state…
