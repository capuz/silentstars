---
repo: "danieljoppi/AntHocNet"
name: "AntHocNet"
description: "Paper-faithful AntHocNet (ant-colony ad-hoc routing): a simulator-independent C++ core, an ns-3 module, and reproducible 20-seed benchmarks vs AODV/OLSR/DSDV where every published number carries a 95% CI. Satellite/ISL scenarios. NS-2 adapter frozen at v1.2.0, removed at v2.0.0."
readmeQualityOk: true
url: "https://github.com/danieljoppi/AntHocNet"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [58, 22]
topics: ["aco", "ant-colony-optimization", "manet", "ns-2", "ns-3", "routing-protocol", "swarm-intelligence", "ad-hoc-networks", "leo-satellite", "network-simulation"]
stars: 8
forks: 2
openIssues: 88
closedIssues: 246
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2016-01-06T13:35:26Z"
lastCommitAt: "2026-10-21T17:31:00Z"
lastReleaseAt: "2026-08-04T17:29:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 82
maintainers: ["danieljoppi", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/49137201/024eacd6-9233-4af5-ac1e-55df48cdb8ef"
---

# AntHocNet

**▶ [Learn it by playing](https://danieljoppi.github.io/AntHocNet/)** — a city-builder for networks and ants
that runs this repository's routing core, compiled to WebAssembly, in your
browser: place and move phones, break links, and watch the ants find the way.
Code reference: [API docs](https://danieljoppi.github.io/AntHocNet/api/).

**A paper-faithful AntHocNet you can install on a stock ns-3 tree in three
commands** — a drop-in `contrib/` module, no forked simulator. It is benchmarked
against AODV / OLSR / DSDV on identical scenarios under a fixed methodology
(20-seed, 900 s runs; every published number carries a 95% confidence interval —
[methodology](https://github.com/danieljoppi/AntHocNet/blob/HEAD/docs/benchmarks/methodology.md)). The algorithm itself is
simulator-independent C++ with its own unit-test suite: `make test` runs it with
no simulator installed. Releases are archived on Zenodo with DOIs, so results
can cite an exact, immutable version.

*AntHocNet vs AODV / OLSR / DSDV across the six named MANET scenarios (error
bars: 95% CI) — current numbers and per-scenario pages in…
