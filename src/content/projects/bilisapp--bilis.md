---
repo: "bilisapp/bilis"
name: "bilis"
description: "Self-hostable log storage and search. Point any OTLP-compatible shipper at one HTTP endpoint, and get a fast, searchable, live-tailing view of your logs — backed by ClickHouse, on your own box."
readmeQualityOk: true
url: "https://github.com/bilisapp/bilis"
homepage: "https://bilis.app"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [56, 23]
topics: ["error-handling", "logging"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T14:06:42Z"
lastCommitAt: "2026-11-07T10:37:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 51
maintainers: ["xar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7b9f2c7c6367f1a87ca6fb92d030fd92343adfd022d8cd1f96b7d19bb376f7c/bilisapp/bilis"
---

Self-hosted logs, traces and metrics on ClickHouse, speaking plain OpenTelemetry.<br>
  One <code>claude mcp add</code> and Claude Code can ask production why it broke.

---

```bash
claude mcp add --transport http bilis https://your-bilis-host/mcp
```

> *"Checkout started returning 500s around 14:00 — find out why."*
>
> Claude calls `error-summary`, pulls the failing request with `get-trace`, sees the payment span timing out after a deploy, reads the matching logs with `search-logs`, and opens the file that needs fixing — in the repo it is already working in.

## Why Bilis

- **Built for agents as well as people.** A remote MCP server with ten read-only tools (`search-logs`, `error-summary`, `list-traces`, `get-trace`, `service-latency`, `list-metrics`, `query-metric`, …). It signs in with OAuth and a consent screen, so there is no key to copy into a config file. Works with Claude Code, Claude Desktop, Cursor and any other MCP client.
- **OpenTelemetry in, no SDK of ours.** Point any OTLP/HTTP exporter at it (JSON or protobuf). There's also a Monolog channel for Laravel, a one-line Linux host agent, and a DSN endpoint for existing error-reporting SDKs…
