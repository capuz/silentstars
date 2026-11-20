---
repo: "haymon-ai/dbmcp"
name: "dbmcp"
description: "Database MCP server for MySQL, MariaDB, PostgreSQL, and SQLite -  with builtin PII redaction and write-prevention"
readmeQualityOk: true
url: "https://github.com/haymon-ai/dbmcp"
homepage: "https://dbmcp.haymon.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "ai-agents", "database", "mariadb", "mcp", "mcp-server", "mysql", "postgres", "sql", "sqlite"]
stars: 33
forks: 8
openIssues: 9
closedIssues: 94
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-14T10:15:58Z"
lastCommitAt: "2026-11-19T12:00:51Z"
lastReleaseAt: "2026-04-01T06:33:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["athopen", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1181567531/b1cd125f-d21b-4ac1-a9e1-3c78bbfda3e6"
discussionCount: 0
---

# Database MCP

A single-binary [MCP](https://modelcontextprotocol.io/) server for SQL databases. Connect your AI assistant to MySQL/MariaDB, PostgreSQL, or SQLite with zero runtime dependencies.

**[Website](https://dbmcp.haymon.ai)** · **[Releases](https://github.com/haymon-ai/dbmcp/releases)**

## Features ✨

- **Multi-database** — MySQL/MariaDB, PostgreSQL, and SQLite from one binary
- **MCP tools** — schema discovery (`listDatabases`, `listTables`, `listViews`, `listTriggers`, `listFunctions`, `listProcedures`, `listMaterializedViews`), data access (`readQuery`, `writeQuery`), DDL (`createDatabase`, `dropDatabase`, `dropTable`), and `explainQuery`. Read-only mode hides the write tools (`writeQuery`, `createDatabase`, `dropDatabase`, `dropTable`). See [MCP Tools](#mcp-tools) for per-backend availability.
