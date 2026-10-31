---
repo: "iopsystems/rezolus"
name: "rezolus"
description: "High-resolution, low-overhead systems and service telemetry"
readmeQualityOk: true
url: "https://github.com/iopsystems/rezolus"
homepage: "https://rezolus.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["ebpf", "hardware", "infrastructure", "kernel", "observability", "otel", "telemetry"]
stars: 279
forks: 23
openIssues: 66
closedIssues: 97
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2023-01-13T21:47:33Z"
lastCommitAt: "2026-10-31T07:45:42Z"
lastReleaseAt: "2023-10-26T19:57:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 38
maintainers: ["brayniac", "thinkingfish"]
openGraphImageUrl: "https://opengraph.githubassets.com/49cb413689e27b0b4408921a78dbd1b271b5a4b9b9d64e568cf12d40865fe30b/iopsystems/rezolus"
---

# Rezolus

**High-resolution systems telemetry for tail latency, missed deadlines, and
performance regressions.**

Rezolus measures CPU, GPU, scheduler, I/O, and network behavior so you can
investigate what the machine was doing when a workload slowed down. It preserves
latency distributions, records telemetry for later analysis, and provides live
and offline dashboards—all from one binary.

Use it for performance engineering, production incidents, inference serving,
and latency-critical workloads such as physical AI, trading, and storage.
It complements application metrics, tracing, and profiling: Rezolus supplies
system-level evidence, not individual request traces or call-stack profiles.

[Quick start](#quick-start) · [Choose a workflow](#choose-a-workflow) ·
[Metrics](https://github.com/iopsystems/rezolus/blob/HEAD/docs/metrics.md) · [Documentation map](#documentation-map)

**See it before installing:** [explore the sample recording in the web viewer](https://rezolus.com/viewer/?capture=demo.dendro).
The sample loads automatically and is processed in your browser. A viewer URL
carries the time range and selectors, so a link reopens the same view (see
[linking to a…
