---
repo: "ReliablyObserve/loki-vl-proxy"
name: "loki-vl-proxy"
description: "Loki-compatible API proxy for VictoriaLogs. Use Grafana's native Loki datasource, Explore, and Logs Drilldown with VictoriaLogs. No plugin required."
readmeQualityOk: true
url: "https://github.com/ReliablyObserve/loki-vl-proxy"
homepage: "https://reliablyobserve.github.io/loki-vl-proxy/"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["golang", "grafana", "helm", "kubernetes", "logging", "logql", "loki", "observability", "opentelemetry", "proxy"]
stars: 49
forks: 4
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-03T17:24:36Z"
lastCommitAt: "2026-10-30T10:23:20Z"
lastReleaseAt: "2026-04-04T09:19:17Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 43
maintainers: ["szibis", "reliablyobserve-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/91c085cd11350d55ddcbf73e519dbc3f3cb0b5b541499eec6c42ecbce8190103/ReliablyObserve/loki-vl-proxy"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/szibis", "LIBERAPAY:https://liberapay.com/szibis"]
---

# Loki-VL-proxy

📖 **Project site:** [reliablyobserve.github.io/Loki-VL-proxy](https://reliablyobserve.github.io/Loki-VL-proxy/) — full docs, benchmarks, runbooks, comparison matrix.

LogQL queries arrive → parsed into a typed AST (`internal/logql`) → translated into LogsQL via a typed builder (`internal/logsql`) → sent to VictoriaLogs.

Both parsers are hand-written recursive descent. The LogQL side handles the full Loki grammar. The LogsQL side uses a builder API that produces typed, syntactically valid LogsQL at construction time. Translation uses two tiers: stable string operations for well-understood paths (stream selectors, line filters), and typed AST construction for complex paths (stats aggregations, binary metric expressions, `PipeMath`/`PipeStats`/`PipeFilter` nodes).

**Label metadata — complete on the first response:** like Loki, `/labels` and `/label/{name}/values` return every label name and value with data in the requested range (1h → 7d) on the first request, from VictoriaLogs metadata calls over that whole range (sub-ms proxy overhead); repeated requests are served from cache. An empty answer is cached for only 30 seconds (or the disk or peer write-through…
