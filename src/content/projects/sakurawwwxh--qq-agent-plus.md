---
repo: "sakurawwwxh/qq-agent-plus"
name: "qq-agent-plus"
description: "Linux QQ group chat agent (OneBot v11): split-message replies, sticker system, proactive speech, and built-in ops commands"
originalDescription: "Linux QQ 群聊 Agent（OneBot v11）：分条发言、贴纸系统、主动发言与内置运维命令"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sakurawwwxh/qq-agent-plus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["agent", "bot", "linux", "llm", "onebot", "qq", "systemd", "chatbot", "napcat", "nodejs"]
stars: 86
forks: 17
openIssues: 2
closedIssues: 27
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-18T13:56:33Z"
lastCommitAt: "2026-10-24T08:09:06Z"
lastReleaseAt: "2026-09-22T02:18:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 39
maintainers: ["sakurawwwxh", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1375947721/209e8e7d-d835-40bd-9bca-19d6048a8dc6"
discussionCount: 1
---

# QQ Agent Plus

A QQ group chat agent for Linux servers. It supports split-message replies, sending and receiving sticker packs, long-term memory, and built-in ops commands.

**Simplified Chinese** ｜ [English](https://github.com/sakurawwwxh/qq-agent-plus/blob/HEAD/README.en.md)

QQ Agent Plus is a QQ group chat agent for Linux servers. It connects to an external OneBot v11 protocol endpoint. Each trigger uses a separate OpenAI Chat Completions session. It does not depend on DSH, MCP, Electron, or Windows runtime environments.

## Features

The capabilities below all come from fixing real problems in live group chats. The failure mode and fix for each item are recorded in the [change list](https://github.com/sakurawwwxh/qq-agent-plus/blob/HEAD/docs/CHANGES.md).

- **Conversation behavior**: single-turn split-message replies, judging the mood of an image before responding, a sticker list kept in the system prompt (frequently used and unused stickers rotated, count adjustable), and a self-check before finishing.
- **Send pipeline**: network-layer send retries, QQ system emoji, message ID normalization, and fallback parsing of inline tool calls.
- **Sticker system**: automatically…
