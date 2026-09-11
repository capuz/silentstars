---
repo: "kurok/pywrkr"
name: "pywrkr"
description: "A fast, async Python HTTP benchmarking tool inspired by wrk and Apache ab. Supports concurrent connections, latency breakdown,      percentile stats, SLO thresholds, rate limiting, scripted scenarios, live TUI dashboard, multi-URL testing, distributed master/worker   mode, and observability export (OpenTelemetry, Prometheus)."
readmeQualityOk: true
url: "https://github.com/kurok/pywrkr"
homepage: "https://github.com/kurok/pywrkr"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 0
closedIssues: 52
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T09:32:11Z"
lastCommitAt: "2026-09-11T08:14:40Z"
lastReleaseAt: "2026-03-12T18:21:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["kurok"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddf2cca2928078c251d39e031e1f3b1e6b1d7e54a5d3da9e948eac24b3990321/kurok/pywrkr"
discussionCount: 2
---

# pywrkr

**Load-test any HTTP endpoint in one command — and get wrk/ab-grade numbers without the wrk/ab setup.** `pywrkr` is a pure-Python benchmarking CLI: point it at a URL and get latency percentiles (p50–p99.99), a throughput timeline, status/error breakdowns, and CI-ready SLO checks.

Five load modes (duration, fixed-count, virtual users, constant rate, traffic profiles), HAR-file import to turn a browser recording into a test, and OpenTelemetry / Prometheus export — no JVM, no YAML, no cluster.

## Demo

<sub>Recorded with [asciinema](https://asciinema.org) + [agg](https://github.com/asciinema/agg) — regenerate with `docs/record-demo.sh`.</sub>

## Install

```bash
pip install pywrkr
```

## Minimal example

```bash
# 10 connections, 5-second benchmark
pywrkr https://example.com -c 10 -d 5
```

That's it. Add `--json results.json`, `-w report.html`, `--threshold "p95<300ms"`, or `-u 1000` for virtual users when you need more — see [Quick Start](#quick-start) below.

> **See also:** [awesome-http-benchmark](https://github.com/denji/awesome-http-benchmark) — a curated list of HTTP(S) load & benchmarking tools (wrk, ab, k6, vegeta, …) where pywrkr fits in.

## Features

-…
