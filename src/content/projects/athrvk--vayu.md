---
repo: "athrvk/vayu"
name: "vayu"
description: "Open-source API client with a native C++ load-testing engine. Postman-style requests + k6-level load tests in one local app"
readmeQualityOk: true
url: "https://github.com/athrvk/vayu"
homepage: "https://athrvk.github.io/vayu/"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [55, 42]
topics: ["testing-tools", "electron", "api-testing", "api-client", "load-testing", "performance", "postman-alternative", "bruno-alternative", "cpp20", "http-client"]
stars: 13
forks: 5
openIssues: 31
closedIssues: 580
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-01-02T06:18:04Z"
lastCommitAt: "2026-09-02T08:03:05Z"
lastReleaseAt: "2026-07-15T06:40:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["athrvk", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1126552851/b4223c70-1811-4cbf-acba-ece165f872cb"
discussionCount: 0
---

# Vayu - Open Source API Client and Native Load Tester in One Desktop App

**Vayu is a free, open source API client with a native C++ load engine - build requests like Postman, load test the same endpoint at 50k+ req/s, and let your coding agent drive all of it over MCP. One app, fully local, no account.**

- **50k+ req/s from the app's own UI** - 56,880 standalone, matching `wrk` and edging past `vegeta` on the same machine
- **Most Postman scripts run unmodified** - a QuickJS runtime implementing the `pm.*` API
- **MCP server built in** - Claude Code, Cursor, VS Code, Codex and Zed drive the same engine the UI does

---

## See it in action

*The load-test dashboard: 52,738 req/s at concurrency 64, 738,406 requests, 100% success. Throughput, latency percentiles, and error counters stream live from the C++ engine while the UI stays responsive, with every run kept in the history sidebar.*

*REST and GraphQL request builder with collections, layered environments, and Postman-compatible scripting.*

---

## Why Vayu exists

Most API teams run two tools side by side. Postman, Bruno, or Insomnia to build and send requests during development. k6, JMeter, or wrk when it is time to load…
