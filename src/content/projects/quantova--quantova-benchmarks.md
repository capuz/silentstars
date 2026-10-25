---
repo: "Quantova/Quantova-Benchmarks"
name: "Quantova-Benchmarks"
description: "Reproducible execution throughput benchmark for the Quantova node"
readmeQualityOk: true
url: "https://github.com/Quantova/Quantova-Benchmarks"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-29T05:35:00Z"
lastCommitAt: "2026-10-25T09:01:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 12
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f44fd29d681a3e79950c5c8f3358d20f5ddfbf985787dea18b28702d3a09c57/Quantova/Quantova-Benchmarks"
---

# Quantova throughput and finality

Reproducible benchmarks for the Quantova node. Every figure is produced by a harness that
checks its parallel result against the sequential state root before it reports, and the
throughput figures rerun on your own machine with a single command.

## Headline

Around 44,000 transactions a second of execution throughput on a single node, and block
finality under one second across a live validator committee. Signature verification and the
virtual machine both run far above throughput, so the compute path keeps margin and the bound
is serial state access.

## Execution throughput

Measured on an Apple M4, ten cores, 16 GB, release build. The full block path runs a module
lattice signature verify, a virtual machine transfer, and an account write back.

| workload | parallel | speedup |
| --- | --- | --- |
| independent transfers | 47,712 tx/s | 2.20x |
| a third contended on hot accounts | 47,021 tx/s | 2.14x |
| independent at half the cores | 36,469 tx/s | |

Held constant over twenty seconds the floor is 41,431 a second and the median 44,085, so the
figure is a rate the node sustains rather than a burst. Signature verification runs at 70,039 a…
