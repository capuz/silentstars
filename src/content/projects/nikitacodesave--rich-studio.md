---
repo: "nikitaCodeSave/Rich-Studio"
name: "Rich-Studio"
description: "Local service for posts to a Telegram channel with full Rich Messages"
originalDescription: "Локальный сервис для постов в Telegram-канал с полным Rich Messages"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/nikitaCodeSave/Rich-Studio"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [58, 39]
stars: 12
forks: 6
openIssues: 9
closedIssues: 62
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-09T08:19:43Z"
lastCommitAt: "2026-11-16T11:55:06Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 53
maintainers: ["NikitaNe", "nikitaCodeSave"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbf022291f27089bc8803d60f4d4f0eaee2a42dbb62baa33a4de4bb401361b1e/nikitaCodeSave/Rich-Studio"
---

# Rich Studio

Local service for posts to a Telegram channel with full Rich Messages (Bot API 10.4, `sendRichMessage`): a visual editor, a preview as it appears in Telegram, publishing to several channels, pinning, a first comment, polls, buttons with replies, plus an HTTP API, an MCP server for AI agents, and a skill for Claude Code.

All screenshots below were taken from a test run of the studio against a mock Telegram API (`tests/mock_telegram.py`), and the request and response examples come from the same place. On 9 October 2026 the studio passed a run against the real Bot API in a test supergroup: all examples, media, buttons, pinning, polls, replacement with history, scheduled posts, `Idempotency-Key`, `dry_run`, the editor, and MCP. Channel-only features (first comment in the discussion, `members_only` for polls, pinning in a channel) have not yet been tested on a real channel, so make the first publication to a test channel.

**Contents:** [what it does](#что-умеет) · [quick start](#быстрый-старт) · [editor](#редактор) · [preview](#предпросмотр) · [publishing and working with the channel](#публикация-и-работа-с-каналом) · [HTTP API](#http-api) · [MCP for…
