---
repo: "eric-tramel/moraine"
name: "moraine"
description: "Unified realtime agent trace database & search MCP"
url: "https://github.com/eric-tramel/moraine"
homepage: "http://eric-tramel.github.io/moraine/"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["agentic-ai", "agents", "bm25", "claude-code", "codex", "search", "traces"]
stars: 70
forks: 12
openIssues: 12
closedIssues: 158
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-02-15T02:43:10Z"
lastCommitAt: "2026-06-28T03:11:40Z"
lastReleaseAt: "2026-04-19T15:33:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["eric-tramel", "gabsprogrammer", "lluisinthedesert"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e0b3c5bc472a2de6566421fa40116d346a4bd67f209a438dff3be8b94007ef4/eric-tramel/moraine"
discussionCount: 6
---

# Moraine

Moraine is a local trace stack for agent work. It indexes sessions from agent
harnesses such as Codex, Claude Code, Kimi CLI, OpenCode, Hermes, and Pi Coding Agent into ClickHouse,
serves a monitor UI, and exposes MCP retrieval over the indexed history.

Agents get searchable long-term memory through MCP. You get a unified local
record of what happened across providers, including tools, tokens, and
conversation history.

Moraine is under active development. Config keys, schemas, and MCP tools can
change across minor releases.

## Screenshots

## Documentation

- [Home](https://eric-tramel.github.io/moraine/)
- [Introduction](https://eric-tramel.github.io/moraine/introduction.html)
- [Quickstart and Installation](https://eric-tramel.github.io/moraine/quickstart.html)
- [Configuration](https://eric-tramel.github.io/moraine/configuration.html)
- [Remote ClickHouse](https://eric-tramel.github.io/moraine/remote-clickhouse.html)
- [Agent MCP Search](https://eric-tramel.github.io/moraine/agent-mcp-search/index.html)

## Supported Agent Harnesses

Moraine ships session trace ingestion adapters for these agent harnesses:

| Harness | Config value | Session traces ingested |
|…
