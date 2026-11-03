---
repo: "bmscomp/kates"
name: "kates"
description: "A terminal-first platform for performance testing, chaos engineering, and operational resilience of Apache Kafka clusters. Runs on a local Kind-based Kubernetes environment with production-parity infrastructure."
readmeQualityOk: true
url: "https://github.com/bmscomp/kates"
language: "Go"
languages: ["Go", "Java"]
languagePcts: [52, 30]
topics: ["apache-kafka", "chaos-engineering", "golang", "grafana-dashboards", "helm-charts", "kafka", "kraft", "kubernetes", "litmuschaos", "load-testing"]
stars: 17
forks: 8
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-30T21:56:59Z"
lastCommitAt: "2026-11-03T12:47:34Z"
lastReleaseAt: "2026-05-05T21:43:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 63
maintainers: ["bmscomp", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29054dc2c4f057bb84d4109ca9640c4da14f690cc3a56854bdce0a0346b0892e/bmscomp/kates"
discussionCount: 6
---

Performance testing, chaos engineering and security auditing<br/>
    for Apache Kafka on Kubernetes.

You find out how a Kafka cluster handles a broker failure on the day a broker fails — unless you have already tried it. Kates puts load on Apache Kafka, injects faults into its brokers, measures what they cost in throughput, P99 latency, recovery time and lost records, and audits broker security configuration. It is for teams that run Kafka on Kubernetes and want those measurements to be repeatable, on a local Kind cluster or as pass/fail gates in a CI pipeline.

Performance tests work against any Kafka cluster the Kates API can reach; fault injection targets Strimzi-managed brokers, by default the cluster `krafter` in namespace `kafka`. Kates has three parts: the `kates` CLI (Go), the Kates API (Quarkus) that runs the tests and faults and keeps the results in PostgreSQL, and the signed Helm charts that install Kafka and everything around it.

**[The book](https://bmscomp.github.io/kates/)** · [Why Kates](#why-kates) · [Quick start](#quick-start) · [CLI at a glance](#cli-at-a-glance) · [GitHub Action](#github-action) · [Architecture](#architecture) ·…
