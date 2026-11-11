---
repo: "joulie-k8s/Joulie"
name: "Joulie"
description: "Kubernetes-native node-level power orchestration"
readmeQualityOk: true
url: "https://github.com/joulie-k8s/Joulie"
homepage: "https://joulie-k8s.github.io/Joulie/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 8
forks: 2
openIssues: 35
closedIssues: 28
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-02-25T22:17:52Z"
lastCommitAt: "2026-11-11T11:19:48Z"
lastReleaseAt: "2026-09-22T13:17:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 67
maintainers: ["matbun", "mtrx1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff5e12bab1222290bed0f7f51cc4b8054fb191d7f707fa60bedb1feed080890/joulie-k8s/Joulie"
---

## What it is

Joulie uses per-node digital twins to model your Kubernetes cluster's energy state in real time.
It continuously ingests telemetry (CPU/GPU power draw via RAPL and NVML/DCGM,
read from Prometheus as the OpenTelemetry hardware metrics `hw.energy` and
`hw.power` or as [Kepler](https://github.com/sustainable-computing-io/kepler)
energy counters, and per-pod resource utilization via cAdvisor) to maintain an
up-to-date model of every node's thermal and power state.

Joulie was started at [CERN](https://home.cern) and is developed in the open;
contributions from other sites and teams are welcome (see [CONTRIBUTING.md](https://github.com/joulie-k8s/Joulie/blob/HEAD/CONTRIBUTING.md)).

These per-node digital twins drive two things:

1. **Energy control**: the controller manager writes desired power state into `NodeTwin` CRs
   (CPU and GPU power caps and, when enabled, governor presets). The node agent reads
   `NodeTwin.spec` and enforces them.

2. **Scheduling decisions**: a scheduler extender reads the twin's computed
   `NodeTwin.status` (power headroom, predicted cooling stress, power trend) to steer
   new pods toward nodes with the best energy-efficiency /…
