---
repo: "ReliablyObserve/loki-vl-proxy"
name: "loki-vl-proxy"
description: "Loki-compatible API proxy for VictoriaLogs. Use Grafana's native Loki datasource, Explore, and Logs Drilldown with VictoriaLogs. No plugin required."
readmeQualityOk: true
url: "https://github.com/ReliablyObserve/loki-vl-proxy"
homepage: "https://reliablyobserve.github.io/loki-vl-proxy/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["golang", "grafana", "helm", "kubernetes", "logging", "logql", "loki", "observability", "opentelemetry", "proxy"]
stars: 45
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-03T17:24:36Z"
lastCommitAt: "2026-09-23T08:46:27Z"
lastReleaseAt: "2026-04-04T09:19:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 41
maintainers: ["szibis", "reliablyobserve-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/369f6ba1d121f7757edc3c51f8a46c9fcd2b86b22ab2641d56c1b71b4680c08c/ReliablyObserve/loki-vl-proxy"
---

# Loki-VL-proxy

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="website/static/img/loki-vl-proxy-logo-white.jpg">
  </picture>
</p>

📖 **Project site:** [reliablyobserve.github.io/Loki-VL-proxy](https://reliablyobserve.github.io/Loki-VL-proxy/) — full docs, benchmarks, runbooks, comparison matrix.

<details>
<summary><strong>How it works (TLDR)</strong></summary>

LogQL queries arrive → parsed into a typed AST (`internal/logql`) → translated into LogsQL via a typed builder (`internal/logsql`) → sent to VictoriaLogs.

Both parsers are hand-written recursive descent. The LogQL side handles the full Loki grammar. The LogsQL side uses a builder API that produces typed, syntactically valid LogsQL at construction time. Translation uses two tiers: stable string operations for well-understood paths (stream selectors, line filters), and typed AST construction for complex paths (stats aggregations, binary metric expressions, `PipeMath`/`PipeStats`/`PipeFilter` nodes).

**Label metadata — complete on the first response:** like Loki, `/labels` and `/label/{name}/values` return every label name and value with data in the requested range (1h → 7d) on the first request,…
