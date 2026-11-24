---
repo: "selesnow/acpgram"
name: "acpgram"
description: "Telegram gateway to AI coding agents (Gemini CLI, Claude Code, Antigravity CLI, OpenCode) over the Agent Client Protocol"
readmeQualityOk: true
url: "https://github.com/selesnow/acpgram"
homepage: "https://alexey-seleznev.pro/acpgram/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["acp", "agent-client-protocol", "ai-agents", "antigravity", "claude-code", "coding-agent", "gemini-cli", "nodejs", "telegram-bot"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-11T10:49:38Z"
lastCommitAt: "2026-11-24T14:06:23Z"
lastReleaseAt: "2026-11-12T07:58:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["selesnow", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d06d151d1ddb2ebbb58a2566d11889b65454b282f761b22a78a232555294609/selesnow/acpgram"
---

# AcpGram

**English** · [Русский](https://github.com/selesnow/acpgram/blob/HEAD/README.ru.md) · [Website](https://alexey-seleznev.pro/acpgram/)

A Telegram gateway to AI coding agents — **Gemini CLI**, **Claude Code**, **Antigravity CLI**, **OpenAI Codex** and **OpenCode**. The bot runs the agent as a subprocess on the machine where it is installed and talks to it over the [Agent Client Protocol](https://agentclientprotocol.com) (JSON-RPC over stdin/stdout). You write a task in Telegram; the agent works in the selected project on your server, PC or laptop, and you watch its progress, approve its actions and get the answer right in the chat.

- No runtime npm dependencies — plain Node.js 24 (built-in `node:sqlite`, `fetch`); ESLint is used for development only.
- Windows, Linux and macOS. Tested on Windows Server and Linux (Ubuntu in WSL); macOS uses the same code as Linux.
- Multi-user: the main admin invites teammates and controls what each of them can do.

> The bot's default language is English. It also speaks Russian and Ukrainian: each user gets the language of their Telegram app (`ru`, `uk` or `en`), and `/language` changes it.
