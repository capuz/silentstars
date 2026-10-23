---
repo: "j2h4u/mcp-telegram"
name: "mcp-telegram"
description: "MCP server exposing Telegram as tools for LLMs — read history, search with context, look up entities by name"
readmeQualityOk: true
url: "https://github.com/j2h4u/mcp-telegram"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["datalake", "mcp", "mcp-server", "own-your-data", "telegram"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-30T12:14:14Z"
lastCommitAt: "2026-10-23T09:32:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["j2h4u", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c61a9e7f8e5032a004d42604cc4938eebad85abb3845c3a7843b0a96d05bb44/j2h4u/mcp-telegram"
---

# mcp-telegram

**A local Telegram mirror and MCP server for personal AI agents.**

`mcp-telegram` keeps a local, searchable copy of your Telegram dialogs and
exposes it through the [Model Context Protocol](https://modelcontextprotocol.io).
It is built for agents that need to triage unread chats, browse folders and
topics, read recent context, search message history, audit your own activity,
and understand how fresh or complete the local mirror is.

The local database is the durable working source of truth for local search,
analytics and MCP, not a disposable cache in front of Telegram. Ingestion,
backfill and incoming updates maintain its facts. Ordinary reads should return
the retained authorized information without contacting or waiting for Telegram.
Observation age and incomplete coverage describe what is known; they do not
make previously collected information disappear. Confirmed changes, deletions
and account/privacy boundaries retain their normal meaning.

Profile reads use local observations; enabled personal-dialog synchronization
also collects counterpart profiles in the background and applies delivered
profile updates. Never-collected sections remain explicitly…
