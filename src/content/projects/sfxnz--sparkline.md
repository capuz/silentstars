---
repo: "sfxnz/sparkline"
name: "sparkline"
description: "Self-hosted live telemetry, alerts and benchmarks for NVIDIA DGX Spark (GB10) clusters"
readmeQualityOk: true
url: "https://github.com/sfxnz/sparkline"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 36]
topics: ["benchmarking", "dashboard", "dgx-spark", "gb10", "gpu-monitoring", "homelab", "nvidia", "observability", "self-hosted", "telemetry"]
stars: 11
forks: 2
openIssues: 25
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-09T11:51:11Z"
lastCommitAt: "2026-11-05T14:05:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 76
undervaluedScore: 32
maintainers: ["sfxnz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5afd20760a969d3c2ec1e3c298c2152d9e569dd84510038c0379ec4a106124d/sfxnz/sparkline"
---

# Sparkline

Sparkline is a self-hosted dashboard for a small NVIDIA DGX Spark cluster. A lightweight agent on each
Spark samples the GPU, unified memory, CPU cores, ConnectX-7 links, NVMe and thermals once a second. A
console merges the nodes, keeps an alert timeline, runs whitelisted benchmarks and serves a web app that
answers one question at a glance: is the cluster healthy, and what is it doing? Sparkline shows only what
the hardware actually reports. Anything GB10 doesn't expose is labelled "not reported by this hardware",
never shown as zero.

## Try it in one minute, no Spark needed

The demo runs three simulated nodes on any x86_64 or arm64 machine with Docker:

```sh
docker run --rm -p 127.0.0.1:9701:9700 ghcr.io/sfxnz/sparkline --demo
```

Open http://127.0.0.1:9701. There is no sign-in. The first minute is calm. Over the next two minutes,
spark1 has a thermal episode, spark2's stream stalls, and spark3 goes offline and comes back. Stop it with
Ctrl+C. The log's `Uvicorn running on http://172.17.0.x:9700` is the
container's own address, so use the port you published.

To build the image yourself instead:

```sh
git clone https://github.com/sfxnz/sparkline.git && cd…
