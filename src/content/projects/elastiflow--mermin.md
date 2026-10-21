---
repo: "elastiflow/mermin"
name: "mermin"
description: "A Kubernetes-native network observability tool that uses eBPF to auto-instrument network traffic and export it as Flow Traces via OpenTelemetry, providing deep visibility into cluster communications."
readmeQualityOk: true
url: "https://github.com/elastiflow/mermin"
homepage: "https://docs.mermin.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cni", "ebpf", "kubernetes", "network", "observability", "open-telemetry", "otel"]
stars: 35
forks: 1
openIssues: 5
closedIssues: 16
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2025-05-02T20:43:59Z"
lastCommitAt: "2026-10-21T21:15:41Z"
lastReleaseAt: "2026-01-14T16:43:51Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 55
maintainers: ["renovate[bot]", "github-actions[bot]", "maksym-iv-ef"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e580abd8d8f80048c53dc9c22ce7c0cb729e4c4f4dbc8bdcdf4b96c6f9ccc1d/elastiflow/mermin"
discussionCount: 0
---

**Mermin** is a powerful, Kubernetes-native network observability tool that uses eBPF to efficiently capture network traffic and export it as **Flow Traces** via the OpenTelemetry Protocol (OTLP). It provides deep visibility into your cluster's network communications with zero application changes required.

---

## Why Mermin?

### The Problem

Your APM traces show application behavior. Your network monitoring shows IP-level statistics. But there's a gap: when a trace shows a slow network span, you have no way to correlate that with actual network flow data. When network teams see congestion, they can't map it back to specific services or pods.

The MELT stack (Metrics, Events, Logs, Traces) is missing network flow data—connection-level information that bridges application performance with network reality.

### What Mermin Does

Mermin captures network traffic using eBPF and exports it as **Flow Traces**—network flows represented as OpenTelemetry spans. This brings network visibility into the OTel ecosystem using a standard signal type.

**The "Sweet Spot": Why Flow Data?**

Observability involves trade-offs between granularity and overhead. Flow data sits between two extremes:

-…
