---
repo: "mshykhov/telegram-mcp-readonly"
name: "telegram-mcp-readonly"
description: "Read-only Telegram MCP server. Search chats, read messages, and download attachments from any MCP client."
readmeQualityOk: true
url: "https://github.com/mshykhov/telegram-mcp-readonly"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude", "codex", "mcp", "model-context-protocol", "python", "read-only", "security", "self-hosted", "telegram"]
stars: 20
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-06T02:38:45Z"
lastCommitAt: "2026-09-13T08:30:26Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 30
maintainers: ["chigwell", "mshykhov", "ex3lite"]
openGraphImageUrl: "https://opengraph.githubassets.com/bed4790e76bff5ea5d8e0dea8df526c62e4b410f7843eb131c94607c19951871/mshykhov/telegram-mcp-readonly"
---

# Telegram MCP Readonly

Search Telegram chats and messages from any [MCP](https://modelcontextprotocol.io/) client. Read conversation history and download attachments without sending messages or changing chats.

[Quick start](#install) · [Client setup](#connect-an-mcp-client) · [Documentation](https://github.com/mshykhov/telegram-mcp-readonly/blob/HEAD/docs/README.md) · [Security](https://github.com/mshykhov/telegram-mcp-readonly/blob/HEAD/SECURITY.md)

## What it does

| Capability | Included |
| --- | --- |
| Search | Messages across chats, account-wide search, folder filters |
| Read | History, topics, rich messages, custom emoji metadata, profiles |
| Attachments | Downloads confined to one configured directory |
| Connect | Stdio for one client; a shared local HTTP service for several clients |
| Protect | Explicit read-only allowlist, private session setup, sanitized results |

## Install

You need Python 3.10+, [uv](https://docs.astral.sh/uv/), a Telegram account, and API credentials from [my.telegram.org/apps](https://my.telegram.org/apps).

```sh
git clone https://github.com/mshykhov/telegram-mcp-readonly.git
cd telegram-mcp-readonly
uv sync --frozen
uv run python…
