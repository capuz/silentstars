---
repo: "ClickHouse/loom"
name: "loom"
description: "Shared long-term memory, document search and a code index for AI agents, linked to your code. Memories point at the files and symbols they're about and surface when an agent edits them. MCP server, Claude Code and Codex plugins, SDKs. Self-hosted on ClickHouse."
readmeQualityOk: true
url: "https://github.com/ClickHouse/loom"
homepage: "https://clickhouse.github.io/loom/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["agent-memory", "ai-agents", "code-search", "knowledge-base", "mcp", "code-intelligence", "claude-code", "codex", "long-term-memory", "ai-memory"]
stars: 10
forks: 2
openIssues: 31
closedIssues: 6
watchers: 0
contributors: 131
recentReleases: 3
createdAt: "2026-10-08T12:50:03Z"
lastCommitAt: "2026-11-13T18:23:16Z"
lastReleaseAt: "2026-11-12T17:18:15Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 52
maintainers: ["zlareb1", "michael-anastasakis"]
openGraphImageUrl: "https://opengraph.githubassets.com/418beecb38785152ddcb1f973f8b970aaadee1dd12f1774210d26e09b82a2f20/ClickHouse/loom"
---

For Claude Code, Codex, Cursor and your own agents.

  
  English · <a href="./i18n/zh-CN/README.md">简体中文</a> · <a href="./i18n/ja/README.md">日本語</a> · <a href="./i18n/ko/README.md">한국어</a> · <a href="./i18n/pt-BR/README.md">Português (Brasil)</a> · <a href="./i18n/es/README.md">Español</a> · <a href="./i18n/ru/README.md">Русский</a>
  

Loom is an open-source, self-hosted MCP server that gives your agents long-term, shared
memory: what one agent learns in a session, the next agent or tool can find.

Agents connect through MCP, HTTP, Python or TypeScript. Self-host with Docker or
[on Kubernetes with the Helm chart](https://github.com/ClickHouse/loom/blob/HEAD/docs/operations/kubernetes.md); agent context and
index data live in [ClickHouse](https://github.com/ClickHouse/loom/blob/HEAD/docs/use-cases/self-hosted-clickhouse.md), and a
deployment can choose [Postgres at first boot](https://github.com/ClickHouse/loom/blob/HEAD/docs/operations/postgres.md) for live
memory and knowledge state. The dashboard brings memories, repositories, tasks and runs
into one place.

## What Loom is for

- **Long-term memory shared across your coding agents**, with plugins that load context
  at…
